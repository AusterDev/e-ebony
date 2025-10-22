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

      // Success: redirect
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

<form
  class="p-2 flex flex-col items-center [&_label]:text-slate-900 [&_label]:text-xl [&_input]:p-4 [&_input]:border-1 [&_input]:border-black space-y-8 w-1/2"
  onsubmit={(e) => {
    e.preventDefault();
    submit();
  }}
>
  <label class="flex flex-col text-2xl w-2/3 relative">
    Subject
    <input type="text" bind:value={subject} />
    {#if formErrors["subject"]}
      <span class="text-red-600 text-sm">{formErrors["subject"]}</span>
    {/if}
  </label>

  <div class="flex flex-col text-2xl w-2/3">
    Instructions
    <div class="border min-h-24">
      <MarkdownEditor bind:text={instructions} />
    </div>
    <p class="text-base italic">Markdown is supported</p>
    {#if formErrors["instructions"]}
      <span class="text-red-600 text-sm">{formErrors["instructions"]}</span>
    {/if}
  </div>

  <label class="flex flex-col text-2xl w-2/3">
    Questions
    <CreateMockQuestionsUI />
    {#if Object.keys(formErrors).some((key) => key.startsWith("questions"))}
      <span class="text-red-600 text-sm">Some questions have errors!</span>
    {/if}
  </label>

  <div class="flex flex-row text-2xl w-3/4 space-x-5">
    <label class="w-1/2">
      Time per question (mins)
      <input type="number" bind:value={timePerQuestion} />
    </label>
    <label class="text-right">
      Total time (mins)
      <input class="text-right" value={totalTime} disabled />
    </label>
  </div>

  <button
    type="submit"
    class="text-2xl px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 disabled:opacity-50"
    disabled={loadingSubmit}
  >
    {#if loadingSubmit}
      Submitting…
    {:else}
      Submit
    {/if}
  </button>
</form>
