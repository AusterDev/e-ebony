<script lang="ts">
  import CreateMockQuestionsUI from "./CreateMockQuestionsUI.svelte";
  import MarkdownEditor from "./MarkdownEditor.svelte";
  import {
    questionsToCreate,
    totalQuestionsToCreate,
  } from "../stores/mock/create/questions";
  import {
    CreateMockMetaUISchema,
    CreateMockRequestSchema,
  } from "../schemas/mock";
  import type { APIResponse } from "../types/response";
  import type { Mock } from "../generated/prisma";
  import ErrorDialog from "./ErrorDialog.svelte";

  let subject = $state("");
  let instructions = $state("Instructions **here**");
  let timePerQuestion = $state(0);

  let totalTime = $derived(timePerQuestion * $totalQuestionsToCreate);

  let formErrors: Record<string, string> = $state({});

  let errorDialog: null | string = $state(null);

  // Loading flag
  let loadingSubmit = $state(false);

  $effect(() => {
    const parsed = CreateMockMetaUISchema.safeParse({
      subject: subject,
      instructions: instructions,
      totalTime: totalTime,
    });

    if (!parsed.success) {
      const tempErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        tempErrors[path] = issue.message;
      });
      formErrors = tempErrors;
    } else {
      formErrors = {};
    }
  });

  function clearErrorMsg() {
    errorDialog = null;
  }

  async function submit() {
    const parsed = CreateMockRequestSchema.safeParse({
      subject,
      instructions,
      totalTime: totalTime,
      questions: Object.values($questionsToCreate),
    });

    if (!parsed.success) {
      console.error("Validation failed:", parsed.error.format());
      errorDialog = "Please fix the form errors before submitting.";
      return;
    }

    loadingSubmit = true;

    const endpoint = "/api/v1/mock";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          instructions,
          questions: Object.values($questionsToCreate),
          totalTime: totalTime,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`Server error ${res.status}: ${errorText}`);
        errorDialog = `Server error ${res.status}: ${res.statusText}`;
        loadingSubmit = false;
        return;
      }

      const body = await res.json();
      const b = body as APIResponse<Mock>;

      if (!b.ok || !b.d) {
        console.error("API response error:", b.error);
        errorDialog = `API error: ${b.error || "Unknown error"}`;
        loadingSubmit = false;
        return;
      }

      const mockId = b.d.id;
      window.location.href = `/mock/${mockId}`;
    } catch (error) {
      console.error("Unexpected error:", error);
      errorDialog =
        "An unexpected internal error occurred. Please try again.";
      loadingSubmit = false;
    }
  }
</script>

<ErrorDialog errorMsg={errorDialog || null} clearMsg={clearErrorMsg} />

<div class="min-h-screen bg-slate-100 py-8 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-6">
      <div class="flex items-center gap-4 mb-2">
        <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-slate-900">Create Mock Test</h1>
          <p class="text-slate-600">Set up a new mock test with custom questions</p>
        </div>
      </div>
    </div>

    <form
      class="space-y-6"
      onsubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <label class="block">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span class="text-lg font-semibold text-slate-900">Subject Code</span>
            <span class="text-red-500">*</span>
          </div>
          <p class="text-sm text-slate-600 mb-3">Subject code must be unique. It can be used to access the mock test.</p>

          <input 
            type="text" 
            bind:value={subject} 
            placeholder="Enter subject code (e.g., Mathematics-JEE-012, Physics-JEE-013)"
            class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-700 focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
          />
          {#if formErrors["subject"]}
            <div class="mt-2 flex items-center gap-2 text-red-600 text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              {formErrors["subject"]}
            </div>
          {/if}
        </label>
      </div>

      <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div class="mb-3">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="text-lg font-semibold text-slate-900">Instructions</span>
            <span class="text-red-500">*</span>
          </div>
          <p class="text-sm text-slate-600 mb-3">Provide clear instructions for test takers. Markdown formatting is supported.</p>
        </div>
        <div class="h-64">
          <MarkdownEditor bind:text={instructions} />
        </div>
        <div class="mt-2 flex items-center gap-2 text-xs text-slate-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Supports **bold**, *italic*, `code`, and more
        </div>
        {#if formErrors["instructions"]}
          <div class="mt-2 flex items-center gap-2 text-red-600 text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {formErrors["instructions"]}
          </div>
        {/if}
      </div>

      <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-lg font-semibold text-slate-900">Questions</span>
            <span class="text-red-500">*</span>
          </div>
          <p class="text-sm text-slate-600">Add questions to your mock test</p>
        </div>
        <CreateMockQuestionsUI />
        {#if Object.keys(formErrors).some((key) => key.startsWith("questions"))}
          <div class="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Some questions have validation errors. Please review and fix them.
          </div>
        {/if}
      </div>

      <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-lg font-semibold text-slate-900">Time Configuration</span>
            <span class="text-red-500">*</span>
          </div>
          <p class="text-sm text-slate-600">Set time limits for the test</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label class="block">
            <span class="text-sm font-medium text-slate-700 mb-2 block">Time per Question (minutes)</span>
            <input 
              type="number" 
              bind:value={timePerQuestion}
              min="0"
              step="0.5"
              placeholder="e.g., 2"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-700 focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
            />
            <p class="mt-1 text-xs text-slate-500">Time allocated per question</p>
          </label>

          <label class="block">
            <span class="text-sm font-medium text-slate-700 mb-2 block">Total Time (minutes)</span>
            <div class="relative">
              <input 
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-900 font-semibold cursor-not-allowed"
                value={totalTime}
                disabled
              />
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <p class="mt-1 text-xs text-slate-500">Automatically calculated: {timePerQuestion} × {$totalQuestionsToCreate} questions</p>
          </label>
        </div>

        {#if totalTime > 0}
          <div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div class="flex items-center gap-2 text-sm text-slate-700">
              <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Total test duration:</strong> {totalTime} minutes ({Math.floor(totalTime / 60)}h {totalTime % 60}m)</span>
            </div>
          </div>
        {/if}
      </div>

      <div class="flex items-center justify-center gap-4 pt-4">
        <button
          type="button"
          onclick={() => window.history.back()}
          class="px-8 py-4 bg-slate-200 text-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-300 transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold text-lg hover:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
          disabled={loadingSubmit || Object.keys(formErrors).length > 0}
        >
          {#if loadingSubmit}
            <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating Mock Test...
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Create Mock Test
          {/if}
        </button>
      </div>

      {#if subject || $totalQuestionsToCreate > 0 || totalTime > 0}
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 class="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Summary
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div class="text-slate-600">Subject</div>
              <div class="font-semibold text-slate-900">{subject || "Not set"}</div>
            </div>
            <div>
              <div class="text-slate-600">Questions</div>
              <div class="font-semibold text-slate-900">{$totalQuestionsToCreate}</div>
            </div>
            <div>
              <div class="text-slate-600">Time/Question</div>
              <div class="font-semibold text-slate-900">{timePerQuestion} min</div>
            </div>
            <div>
              <div class="text-slate-600">Total Time</div>
              <div class="font-semibold text-slate-900">{totalTime} min</div>
            </div>
          </div>
        </div>
      {/if}
    </form>
  </div>
</div>