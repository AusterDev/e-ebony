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
  let isSyncing = $state(false);
  let apiError = $state<ErrorResponse | null>(null);
  let showInstructions = $state(true);
  let fullscreenMode = $state(false);
  let session = $state(null);

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
        const { d } = result;
        const ses = d.session;
        const savedAnswers = d.answers;

        if (savedAnswers) processAnswers(savedAnswers);

        if (ses) {
          const startTime = new Date(ses.createdAt).getTime();
          const durationSeconds = ses.mock.totalTimeMins * 60;
          const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
          timeLeft = Math.max(0, durationSeconds - elapsedSeconds);
          session = ses;
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
    if (timeLeft <= 0 || isSyncing) return;
    const answersToSync = Object.entries(answers)
      .filter(([, val]) => val.selectedOption)
      .map(([qIndex, val]) => ({
        questionID: questions[parseInt(qIndex, 10)].id,
        optionID: val.selectedOption,
      }));

    if (answersToSync.length === 0) return;

    isSyncing = true;
    try {
      await fetch("/api/v1/session/session", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mockID: mockId, answers: answersToSync }),
      });
    } catch (error) {
      console.error("Error caught while syncing answers", error);
    } finally {
      isSyncing = false;
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
  }

  let currentQ = $derived(questions[currentQuestion]);

  function getQuestionStatus(qNum: number) {
    const answer = answers[qNum];
    if (!answer) return "not-visited";
    if (answer.status === "marked-review") return "marked-review";
    if (answer.status === "check-later") return "check-later";
    if (answer.selectedOption) return "answered";
    return "not-answered";
  }

  let stats = $derived({
    answered: questions.map((_, idx) => getQuestionStatus(idx)).filter((s) => s === "answered").length,
    notAnswered: questions.map((_, idx) => getQuestionStatus(idx)).filter((s) => s === "not-answered").length,
    markedReview: questions.map((_, idx) => getQuestionStatus(idx)).filter((s) => s === "marked-review").length,
    checkLater: questions.map((_, idx) => getQuestionStatus(idx)).filter((s) => s === "check-later").length,
    notVisited: questions.map((_, idx) => getQuestionStatus(idx)).filter((s) => s === "not-visited").length,
  });

  function formatTime(seconds: number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function getStatusClass(status: string) {
    const base = "w-full aspect-square rounded-lg font-bold text-sm transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-700";
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
    if (!answers[currentQuestion]) {
      answers[currentQuestion] = { selectedOption: optionId, status: "not-answered" };
    } else {
      answers[currentQuestion].selectedOption = optionId;
    }
  }

  async function handleSaveNext() {
    if (answers[currentQuestion]?.selectedOption) {
      answers[currentQuestion].status = "answered";
    }
    if (currentQuestion < questions.length - 1) currentQuestion++;
    await syncAnswers();
  }

  async function handleMarkReview() {
    if (!answers[currentQuestion]) {
      answers[currentQuestion] = { selectedOption: '', status: "marked-review" };
    } else {
      answers[currentQuestion].status = "marked-review";
    }
    if (currentQuestion < questions.length - 1) currentQuestion++;
    await syncAnswers();
  }

  async function handleCheckLater() {
    if (!answers[currentQuestion]) {
      answers[currentQuestion] = { selectedOption: '', status: "check-later" };
    } else {
      answers[currentQuestion].status = "check-later";
    }
    if (currentQuestion < questions.length - 1) currentQuestion++;
    await syncAnswers();
  }

  async function handleClear() {
    if (answers[currentQuestion]) {
      answers[currentQuestion].selectedOption = '';
      answers[currentQuestion].status = 'not-answered';
    }
    await syncAnswers();
  }

  function startTest() {
    showInstructions = false;

  }

  $effect(() => {
    if (timeLeft <= 300 && timeLeft > 0 && timeLeft % 60 === 0) {
      console.log(`[WARNING] Only ${Math.floor(timeLeft / 60)} minutes remaining!`);
    }
  });

  $effect(() => {
    if (questions.length > 0 && !answers[currentQuestion] && !isLoading) {
      answers[currentQuestion] = { selectedOption: '', status: 'not-answered' };
    }
  });
</script>

{#if showInstructions}
  <div
    class="fixed inset-0 bg-slate-900 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
    >
      <div class="bg-slate-800 px-8 py-6 flex-shrink-0">
        <h1 class="text-3xl font-bold text-white">Test Instructions</h1>
      </div>
      <div class="p-8 overflow-y-auto">
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-bold text-slate-800 mb-3">
              General Instructions
            </h2>
            <ul class="space-y-2 text-slate-700">
              <li class="flex items-start gap-2">
                <span class="text-slate-600 font-bold">•</span>
                <span>Total Questions: <strong>{questions.length}</strong></span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-slate-600 font-bold">•</span>
                <span>Total Time: <strong>{totalTimeMins} minutes</strong></span
                >
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-slate-800 mb-3">
              Question Status Legend
            </h2>
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
            <p class="text-slate-800 font-semibold">
              Tip: Use the question palette to navigate quickly between
              questions!
            </p>
          </div>
        </div>
      </div>
      <div class="bg-slate-50 px-8 py-6 border-t flex-shrink-0">
        <button
          onclick={startTest}
          class="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          I Understand, Start Test
        </button>
      </div>
    </div>
  </div>
{/if}

<div class="h-screen w-full bg-slate-100 flex flex-col">
  <!-- Header -->
  <header
    class="bg-slate-900 shadow-xl text-white flex-shrink-0 border-b-4 border-slate-700"
  >
    <div class="max-w-full mx-auto px-4 py-2">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-4">
          <div class="text-lg font-bold flex items-center gap-2">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {mockId}
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            onclick={() => (showPalette = !showPalette)}
            class="px-3 py-1.5 text-sm bg-slate-800 rounded-lg hover:bg-slate-700 transition flex items-center gap-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span class="hidden sm:inline">{showPalette ? "Hide" : "Show"}</span
            >
          </button>
          <div
            class="px-3 py-1.5 bg-slate-800 rounded-lg text-center">
            <div class="text-xs opacity-90">Time</div>
            <div class="text-base font-mono font-bold">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow p-3 flex flex-col lg:flex-row gap-3 overflow-hidden">
    <!-- Question Content -->
    <div
      class="w-full lg:w-1/2 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border-2 border-slate-200"
    >
      <div
        class="bg-slate-50 px-4 py-2 border-b-2 border-slate-200 flex-shrink-0"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span class="bg-slate-800 text-white px-2 py-0.5 rounded text-sm"
              >Q{currentQ?.number}</span
            >
          </h2>
          <div class="flex gap-2">
            <span
              class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-bold border border-slate-300"
            >
              +{currentQ?.marks}
            </span>
            <span
              class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-bold border border-slate-300"
            >
              -{currentQ?.negativeMarks}
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 overflow-y-auto flex-grow custom-scrollbar">
        <p class="text-base text-slate-800 leading-relaxed">
          {currentQ?.content}
        </p>
      </div>
    </div>

    <!-- Answer Section & Palette -->
    <div class="w-full lg:w-1/2 flex flex-col gap-3">
      <!-- Answer Options -->
      <div
        class="bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border-2 border-slate-200 {showPalette
          ? 'h-[55%]'
          : 'flex-1'}"
      >
        <div class="p-4 flex-grow overflow-y-auto custom-scrollbar">
          <h3
            class="font-bold text-slate-800 mb-3 text-base flex items-center gap-2"
          >
            <svg
              class="w-5 h-5 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            Select Your Answer
          </h3>
          <div class="space-y-2">
            {#each currentQ?.options || [] as option}
              <label
                class="flex items-start p-3 border-2 rounded-lg cursor-pointer transition-all {answers[
                  currentQuestion
                ]?.selectedOption === option.id
                  ? 'border-slate-700 bg-slate-50 shadow-md'
                  : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50'}"
              >
                <input
                  type="radio"
                  name="question-{currentQ?.id}"
                  value={option.id}
                  checked={answers[currentQuestion]?.selectedOption ===
                    option.id}
                  onchange={() => handleOptionSelect(option.id)}
                  class="mt-1 w-4 h-4 text-slate-700 flex-shrink-0"
                />
                <span class="ml-2 text-slate-800 flex-1 text-sm">
                  <span
                    class="inline-block w-6 h-6 rounded-full text-center leading-6 font-bold mr-2 text-xs transition-all {answers[
                      currentQuestion
                    ]?.selectedOption === option.id
                      ? 'bg-slate-700 text-white'
                      : 'bg-slate-200 text-slate-700'}">{option.number}</span
                  >
                  {option.content}
                </span>
              </label>
            {/each}
          </div>
        </div>

        <!-- Action Buttons -->
        <div
          class="bg-slate-50 px-4 py-2 border-t-2 border-slate-200 flex-shrink-0"
        >
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
            <button
              onclick={handleSaveNext}
              class="bg-slate-700 hover:bg-slate-800 text-white px-2 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Save
            </button>
            <button
              onclick={handleMarkReview}
              class="bg-slate-600 hover:bg-slate-700 text-white px-2 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              Review
            </button>
            <button
              onclick={handleCheckLater}
              class="bg-slate-500 hover:bg-slate-600 text-white px-2 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Later
            </button>
            <button
              onclick={handleClear}
              class="bg-slate-400 hover:bg-slate-500 text-white px-2 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <div
          class="px-4 py-2 border-t-2 border-slate-200 bg-white flex justify-between flex-shrink-0"
        >
          <button
            onclick={() => (currentQuestion = Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            class="px-3 py-1.5 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Prev
          </button>
          <button
            onclick={() =>
              (currentQuestion = Math.min(
                questions.length - 1,
                currentQuestion + 1,
              ))}
            disabled={currentQuestion === questions.length - 1}
            class="px-3 py-1.5 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1"
          >
            Next
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Question Palette -->
      {#if showPalette}
        <div
          class="flex-1 bg-white rounded-xl shadow-xl p-4 flex flex-col overflow-scroll border-2 border-slate-200 min-h-0"
        >
          <div class="flex items-center justify-between mb-2 flex-shrink-0">
            <h3
              class="font-bold text-slate-800 text-base flex items-center gap-2"
            >
              <svg
                class="w-5 h-5 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Palette
            </h3>
          </div>

          <div class="grid grid-cols-4 gap-1 mb-2 flex-shrink-0 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-slate-700 rounded"></div>
              <span class="text-slate-600 text-[10px]">Ans</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-slate-200 rounded"></div>
              <span class="text-slate-600 text-[10px]">Not</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-slate-500 rounded"></div>
              <span class="text-slate-600 text-[10px]">Rev</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-slate-400 rounded"></div>
              <span class="text-slate-600 text-[10px]">Lat</span>
            </div>
          </div>

          <div class="flex-grow overflow-y-auto custom-scrollbar min-h-20">
            <div class="grid grid-cols-10 gap-1">
              {#each questions as q, idx}
                <button
                  onclick={() => (currentQuestion = idx)}
                  class="{getStatusClass(getQuestionStatus(idx))} {idx ===
                  currentQuestion
                    ? 'ring-2'
                    : ''} text-xs"
                >
                  {q.number}
                </button>
              {/each}
            </div>
          </div>

          <div class="border-t-2 border-slate-200 mt-2 pt-2 flex-shrink-0">
            <div class="grid grid-cols-2 gap-2 mb-2 text-xs">
              <div class="bg-slate-50 p-1.5 rounded border border-slate-200">
                <div class="text-slate-600 text-[10px]">Answered</div>
                <div class="text-slate-800 font-bold text-sm">
                  {stats.answered}
                </div>
              </div>
              <div class="bg-slate-50 p-1.5 rounded border border-slate-200">
                <div class="text-slate-600 text-[10px]">Not Ans</div>
                <div class="text-slate-800 font-bold text-sm">
                  {stats.notAnswered}
                </div>
              </div>
              <div class="bg-slate-50 p-1.5 rounded border border-slate-200">
                <div class="text-slate-600 text-[10px]">Review</div>
                <div class="text-slate-800 font-bold text-sm">
                  {stats.markedReview}
                </div>
              </div>
              <div class="bg-slate-50 p-1.5 rounded border border-slate-200">
                <div class="text-slate-600 text-[10px]">Not Visit</div>
                <div class="text-slate-800 font-bold text-sm">
                  {stats.notVisited}
                </div>
              </div>
            </div>
            <button
              onclick={() => (showSubmitModal = true)}
              class="w-full bg-slate-800 hover:bg-slate-900 text-white py-2 rounded-lg text-sm font-bold transition"
            >
              Submit Test
            </button>
          </div>
        </div>
      {/if}
    </div>
  </main>
</div>

<!-- Submit Modal -->
{#if showSubmitModal}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  >
    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full">
      <div class="bg-slate-800 px-6 py-4 rounded-t-xl">
        <h2 class="text-xl font-bold text-white">Submit Test?</h2>
      </div>
      <div class="p-6">
        {#if timeLeft <= 0}
          <p class="text-slate-700 mb-4">
            Time is up! Please submit your test for evaluation.
          </p>
        {:else}
          <p class="text-slate-700 mb-6">
            Are you sure you want to submit your test for evaluation?
          </p>
          <div
            class="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 mb-6"
          >
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div class="text-slate-600">Answered</div>
                <div class="text-slate-800 font-bold">
                  {stats.answered} / {questions.length}
                </div>
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
            <button
              onclick={() => (showSubmitModal = false)}
              class="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 rounded-lg font-semibold transition"
            >
              Cancel
            </button>
          {/if}
          <button
            onclick={handleSubmitTest}
            class="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Now
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 10px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 10px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
