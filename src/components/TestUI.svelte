<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { marked } from "marked";
  import type { ErrorResponse } from "../types/response";

  let { questions = [], totalTimeMins = 180, mockId, user } = $props();

  let currentQuestion = $state(0);
  let answers = $state<{ [key: number]: { selectedOption: string; status: string } }>({});
  let timeLeft = $state(totalTimeMins * 60);
  let showSubmitModal = $state(false);
  let showPalette = $state(true);
  let isLoading = $state(true);
  let isSubmitting = $state(false);
  let apiError = $state<ErrorResponse | null>(null);
  let showInstructions = $state(true);
  let fullscreenMode = $state(false);

  let timerInterval: any;
  let syncInterval: any;

  function normalizeError(err: any): ErrorResponse {
    const validTypes = [
      "conflict", "unauthorized", "server_error", "validation",
      "signatureless", "internal", "warning", "time", "not_found",
    ];
    if (!err || !validTypes.includes(err.type)) {
      return { type: "internal", cause: err?.cause || "Unknown error" };
    }
    return err;
  }

  function processAnswers(savedAnswers: any[]) {
    const initialAnswers: typeof answers = {};
    const questionIdMap = new Map(questions.map((q: any, i: number) => [q.id, i]));
    for (const answer of savedAnswers) {
      const questionIndex = questionIdMap.get(answer.questionID);
      if (questionIndex !== undefined) {
        initialAnswers[questionIndex] = {
          selectedOption: answer.optionID,
          status: "answered",
        };
      }
    }
    answers = initialAnswers;
  }

  onMount(async () => {
    try {
      const res = await fetch("/api/v1/session/session");
      const result = await res.json();

      const errorType = result.error?.type;

      if (res.ok && result.d) {
        const { session, answers: savedAnswers } = result.d;

        if (savedAnswers) processAnswers(savedAnswers);

        if (session) {
          const startTime = new Date(session.createdAt).getTime();
          const durationSeconds = session.mock.totalTimeMins * 60;
          const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
          timeLeft = Math.max(0, durationSeconds - elapsedSeconds);
        }

        startClientTimer();
        syncInterval = setInterval(syncAnswers, 30000);
      } else if (errorType === "time") {
        timeLeft = 0;
        showSubmitModal = true;
        if (result.d?.answers) processAnswers(result.d.answers);
      } else {
        apiError = { type: "internal", cause: result.error?.cause || "Unknown error" };
      }
    } catch (error) {
      apiError = { type: "internal", cause: "Failed to connect to the server." };
      console.error("Error fetching session:", error);
    } finally {
      isLoading = false;
    }
  });

  onDestroy(() => {
    clearInterval(timerInterval);
    clearInterval(syncInterval);
    if (timeLeft > 0) {
      syncAnswers();
    }
  });

  async function syncAnswers() {
    if (timeLeft <= 0) return;
    const answersToSync = Object.entries(answers)
      .filter(([, val]) => val.selectedOption)
      .map(([qIndex, val]) => ({
        questionID: questions[parseInt(qIndex, 10)].id,
        optionID: val.selectedOption,
      }));

    if (answersToSync.length === 0) return;

    try {
      await fetch("/api/v1/session/session", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mockID: mockId, answers: answersToSync }),
      });
      console.log(`[INFO] Answers synced at ${new Date()}`);
    } catch (error) {
      console.error("Error caught while syncing answers", error);
    }
  }

  async function handleSubmitTest() {
    isSubmitting = true;
    showSubmitModal = false;

    if (timeLeft > 0) await syncAnswers();

    try {
      const response = await fetch("/api/v1/session/submit", { method: "POST" });
      const result = await response.json();

      if (result.ok && result.d) {
        alert(result.d.resultId)
        window.location.replace(`/mock/test/result/${result.d.resultId}`);
      } else {
        apiError = normalizeError(result.error);
      }
    } catch (error) {
      console.error("Error caught while submitting test", error);
      apiError = { type: "internal", cause: "Failed to connect to the server." };
    } finally {
      isSubmitting = false;
    }
  }

  function startClientTimer() {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(timerInterval);
        showSubmitModal = true;
      }
    }, 1000);

    setInterval(() => {
      syncAnswers();
    }, 45 * 1000);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      fullscreenMode = true;
    } else {
      document.exitFullscreen();
      fullscreenMode = false;
    }
  }

  let currentQ = $derived(questions[currentQuestion]);

  let stats = $derived({
    answered: Object.values(answers).filter((a) => a?.status === "answered").length,
    notAnswered: questions.length - Object.values(answers).filter((a) => a?.selectedOption).length,
    markedReview: Object.values(answers).filter((a) => a?.status === "marked-review").length,
    checkLater: Object.values(answers).filter((a) => a?.status === "check-later").length,
    notVisited: questions.length - Object.keys(answers).length,
  });

  function formatTime(seconds: number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function getQuestionStatus(qNum: number) {
    const answer = answers[qNum];
    if (!answer) return "not-visited";
    if (answer.selectedOption && answer.status === "answered") return "answered";
    if (answer.status === "marked-review") return "marked-review";
    if (answer.status === "check-later") return "check-later";
    if (answer.selectedOption) return "answered";
    return "not-answered";
  }

  function getStatusClass(status: string) {
    const base = "w-full aspect-square rounded-lg font-bold text-sm transition-all flex items-center justify-center";
    switch (status) {
      case "answered":
        return base + " bg-slate-700 hover:bg-slate-800 text-white";
      case "marked-review":
        return base + " bg-slate-500 hover:bg-slate-600 text-white";
      case "check-later":
        return base + " bg-slate-400 hover:bg-slate-500 text-white";
      case "not-answered":
        return base + " bg-slate-300 hover:bg-slate-400 text-slate-700";
      default:
        return base + " bg-slate-200 hover:bg-slate-300 text-slate-600";
    }
  }

  function handleOptionSelect(optionId: string) {
    answers = { ...answers, [currentQuestion]: { ...answers[currentQuestion], selectedOption: optionId } };
  }

  function handleSaveNext() {
    if (answers[currentQuestion]?.selectedOption) {
      answers = { ...answers, [currentQuestion]: { ...answers[currentQuestion], status: "answered" } };
    }
    if (currentQuestion < questions.length - 1) currentQuestion++;
  }

  function handleMarkReview() {
    answers = { ...answers, [currentQuestion]: { ...answers[currentQuestion], status: "marked-review" } };
    if (currentQuestion < questions.length - 1) currentQuestion++;
  }

  function handleCheckLater() {
    answers = { ...answers, [currentQuestion]: { ...answers[currentQuestion], status: "check-later" } };
    if (currentQuestion < questions.length - 1) currentQuestion++;
  }

  function handleClear() {
    const newAnswers = { ...answers };
    delete newAnswers[currentQuestion];
    answers = newAnswers;
  }

  function startTest() {
    showInstructions = false;
  }

  $effect(() => {
    if (timeLeft <= 300 && timeLeft > 0 && timeLeft % 60 === 0) {
      console.log(`[WARNING] Only ${Math.floor(timeLeft / 60)} minutes remaining!`);
    }
  });
</script>

{#if showInstructions}
  <div class="fixed inset-0 bg-slate-900 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
      <div class="bg-slate-800 px-8 py-6">
        <h1 class="text-3xl font-bold text-white">Test Instructions</h1>
      </div>
      <div class="p-8 overflow-y-auto max-h-[60vh]">
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-bold text-slate-800 mb-3">General Instructions</h2>
            <ul class="space-y-2 text-slate-700">
              <li class="flex items-start gap-2">
                <span class="text-slate-600 font-bold">•</span>
                <span>Total Questions: <strong>{questions.length}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-slate-600 font-bold">•</span>
                <span>Total Time: <strong>{totalTimeMins} minutes</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-slate-600 font-bold">•</span>
                <span>Each question has 4 options. Choose the most appropriate answer.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-slate-600 font-bold">•</span>
                <span>Your answers are auto-saved every 30 seconds.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-slate-800 mb-3">Marking Scheme</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-slate-100 border-2 border-slate-300 rounded-lg p-4">
                <div class="text-slate-700 font-bold text-lg">Correct Answer</div>
                <div class="text-slate-600">+{currentQ?.marks || 4} marks</div>
              </div>
              <div class="bg-slate-100 border-2 border-slate-400 rounded-lg p-4">
                <div class="text-slate-700 font-bold text-lg">Wrong Answer</div>
                <div class="text-slate-600">-{currentQ?.negativeMarks || 1} marks</div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold text-slate-800 mb-3">Question Status Legend</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-slate-700 rounded"></div>
                <span class="text-sm text-slate-700">Answered</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-slate-200 rounded"></div>
                <span class="text-sm text-slate-700">Not Visited</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-slate-500 rounded"></div>
                <span class="text-sm text-slate-700">Mark Review</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-slate-400 rounded"></div>
                <span class="text-sm text-slate-700">Check Later</span>
              </div>
            </div>
          </div>

          <div class="bg-slate-100 border-l-4 border-slate-600 p-4 rounded">
            <p class="text-slate-800 font-semibold">Tip: Use the question palette to navigate quickly between questions!</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-50 px-8 py-6 border-t">
        <button onclick={startTest} class="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
          I Understand, Start Test
        </button>
      </div>
    </div>
  </div>
{/if}

{#if isLoading}
  <div class="h-screen w-full flex items-center justify-center bg-slate-100">
    <div class="text-center">
      <div class="w-20 h-20 border-4 border-slate-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div class="text-2xl font-bold text-slate-800">Loading Your Test Session...</div>
      <div class="text-slate-600 mt-2">Please wait while we prepare your test</div>
    </div>
  </div>
{:else if apiError}
  <div class="h-screen w-full flex items-center justify-center bg-slate-100 p-4">
    <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
      <div class="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-slate-800 mb-2">An Error Occurred</h2>
      <p class="text-slate-700 mb-6">{apiError.cause}</p>
      <button onclick={() => window.location.reload()} class="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition">
        Retry
      </button>
    </div>
  </div>
{:else}
  <div class="h-screen w-full bg-slate-100 flex flex-col">
    <header class="bg-slate-900 shadow-xl text-white flex-shrink-0">
      <div class="max-w-full mx-auto px-6 py-4">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center gap-6">
            <div class="text-2xl font-bold flex items-center gap-2">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Mock Test
            </div>
            <div class="flex items-center gap-3 border-l border-slate-700 pl-6">
              <img src={user.imageUrl} alt="User profile" class="w-10 h-10 rounded-full object-cover ring-2 ring-slate-600" />
              <span class="font-medium">{user.fullName || user.firstName}</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button onclick={toggleFullscreen} class="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              {fullscreenMode ? 'Exit' : 'Fullscreen'}
            </button>
            <button onclick={() => (showPalette = !showPalette)} class="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {showPalette ? 'Hide' : 'Show'} Palette
            </button>
            <div class="px-6 py-3 bg-slate-800 rounded-lg text-center {timeLeft < 300 ? 'animate-pulse bg-slate-700' : ''}">
              <div class="text-xs opacity-90">Time Remaining</div>
              <div class="text-2xl font-mono font-bold">{formatTime(timeLeft)}</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow p-6 flex gap-6 overflow-hidden">
      <div class="w-1/2 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-slate-200">
        <div class="bg-slate-50 px-6 py-4 border-b border-slate-200">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span class="bg-slate-800 text-white px-3 py-1 rounded-lg">Q{currentQ?.number}</span>
            </h2>
            <div class="flex gap-2">
              <span class="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold border border-slate-300">
                +{currentQ?.marks}
              </span>
              <span class="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold border border-slate-300">
                -{currentQ?.negativeMarks}
              </span>
            </div>
          </div>
        </div>
        <div class="p-6 overflow-y-auto flex-grow">
          <article class="prose max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900">
            {@html marked(currentQ?.content || "")}
          </article>
        </div>
      </div>

      <div class="w-1/2 flex flex-col {showPalette ? 'gap-6' : ''}">
        <div class="bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-slate-200 transition-all duration-300 ease-in-out {showPalette ? 'h-[55%]' : 'h-full'}">
          <div class="p-6 flex-grow overflow-y-auto">
            <h3 class="font-bold text-slate-800 mb-4 text-xl flex items-center gap-2">
              <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Select Your Answer
            </h3>
            <div class="space-y-3">
              {#each currentQ?.options || [] as option}
                <label class="flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all {answers[currentQuestion]?.selectedOption === option.id ? 'border-slate-700 bg-slate-50 shadow-md' : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50'}">
                  <input type="radio" name="question-{currentQ?.id}" value={option.id} checked={answers[currentQuestion]?.selectedOption === option.id} onchange={() => handleOptionSelect(option.id)} class="mt-1 w-5 h-5 text-slate-700" />
                  <span class="ml-3 text-slate-800 flex-1">
                    <span class="inline-block w-8 h-8 bg-slate-200 rounded-full text-center leading-8 font-bold mr-2 text-slate-700">{option.number}</span>
                    {option.content}
                  </span>
                </label>
              {/each}
            </div>
          </div>
          <div class="bg-slate-50 px-6 py-4 border-t border-slate-200 flex-shrink-0">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              <button onclick={handleSaveNext} class="bg-slate-700 hover:bg-slate-800 text-white px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Save
              </button>
              <button onclick={handleMarkReview} class="bg-slate-600 hover:bg-slate-700 text-white px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Review
              </button>
              <button onclick={handleCheckLater} class="bg-slate-500 hover:bg-slate-600 text-white px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Later
              </button>
              <button onclick={handleClear} class="bg-slate-400 hover:bg-slate-500 text-white px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear
              </button>
            </div>
          </div>
          <div class="px-6 py-4 border-t border-slate-200 bg-white flex justify-between rounded-b-2xl">
            <button onclick={() => (currentQuestion = Math.max(0, currentQuestion - 1))} disabled={currentQuestion === 0} class="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button onclick={() => (currentQuestion = Math.min(questions.length - 1, currentQuestion + 1))} disabled={currentQuestion === questions.length - 1} class="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
              Next
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {#if showPalette}
          <div class="h-[45%] bg-white rounded-2xl shadow-xl p-6 flex flex-col overflow-hidden border border-slate-200">
            <div class="flex items-center justify-between mb-4 flex-shrink-0">
              <h3 class="font-bold text-slate-800 text-xl flex items-center gap-2">
                <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Question Palette
              </h3>
            </div>

            <div class="grid grid-cols-4 gap-2 mb-4 flex-shrink-0 text-xs">
              <div class="flex items-center gap-1">
                <div class="w-4 h-4 bg-slate-700 rounded"></div>
                <span class="text-slate-600">Answered</span>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-4 h-4 bg-slate-200 rounded"></div>
                <span class="text-slate-600">Not Visited</span>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-4 h-4 bg-slate-500 rounded"></div>
                <span class="text-slate-600">Review</span>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-4 h-4 bg-slate-400 rounded"></div>
                <span class="text-slate-600">Later</span>
              </div>
            </div>

            <div class="flex-grow overflow-y-auto">
              <div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {#each questions as q, idx}
                  <button onclick={() => (currentQuestion = idx)} class="{getStatusClass(getQuestionStatus(idx))} {idx === currentQuestion ? 'ring-4 ring-slate-800 ring-offset-2' : ''}">
                    {q.number}
                  </button>
                {/each}
              </div>
            </div>

            <div class="border-t border-slate-200 mt-4 pt-4 flex-shrink-0">
              <div class="grid grid-cols-2 gap-3 mb-3 text-sm">
                <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <div class="text-slate-600">Answered</div>
                  <div class="text-slate-800 font-bold text-lg">{stats.answered}</div>
                </div>
                <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <div class="text-slate-600">Not Answered</div>
                  <div class="text-slate-800 font-bold text-lg">{stats.notAnswered}</div>
                </div>
                <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <div class="text-slate-600">Marked Review</div>
                  <div class="text-slate-800 font-bold text-lg">{stats.markedReview}</div>
                </div>
                <div class="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <div class="text-slate-600">Not Visited</div>
                  <div class="text-slate-800 font-bold text-lg">{stats.notVisited}</div>
                </div>
              </div>
              <button onclick={() => (showSubmitModal = true)} class="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-bold transition">
                Submit Test
              </button>
            </div>
          </div>
        {/if}
      </div>
    </main>

    {#if showSubmitModal}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full">
          <div class="bg-slate-800 px-6 py-4 rounded-t-xl">
            <h2 class="text-xl font-bold text-white">Submit Test?</h2>
          </div>
          <div class="p-6">
            {#if timeLeft <= 0}
              <p class="text-slate-700 mb-4">Time is up! Your progress has been saved. Please submit your test for evaluation.</p>
            {:else}
              <p class="text-slate-700 mb-6">Are you sure you want to submit your test for evaluation?</p>
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <div class="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div class="text-slate-600">Answered</div>
                    <div class="text-slate-800 font-bold">{stats.answered} / {questions.length}</div>
                  </div>
                  <div>
                    <div class="text-slate-600">Not Answered</div>
                    <div class="text-slate-800 font-bold">{stats.notAnswered}</div>
                  </div>
                  <div>
                    <div class="text-slate-600">Marked Review</div>
                    <div class="text-slate-800 font-bold">{stats.markedReview}</div>
                  </div>
                  <div>
                    <div class="text-slate-600">Not Visited</div>
                    <div class="text-slate-800 font-bold">{stats.notVisited}</div>
                  </div>
                </div>
              </div>
            {/if}
            <div class="flex gap-3">
              {#if timeLeft > 0}
                <button onclick={() => (showSubmitModal = false)} class="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 rounded-lg font-semibold transition">
                  Cancel
                </button>
              {/if}
              <button onclick={(e) => {e.preventDefault();handleSubmitTest();return false;}} disabled={isSubmitting} class="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50">
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}