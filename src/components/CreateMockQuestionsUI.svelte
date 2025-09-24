<script lang="ts">
  import { questionSchema } from "../schemas/mock";
  import MarkdownEditor from "./MarkdownEditor.svelte";
  import { questionsToCreate, totalQuestionsToCreate } from "../stores/mock/create/questions";
  import { z } from "zod";

  let questionsCreatorHidden = false;
  let showAddForm = true;

  let questionsArray: [string, any][] = [];
  $: questionsArray = Object.entries(questionsToCreate.get());

  let formData = {
    number: $totalQuestionsToCreate + 1,
    content: "Define your question **here**",
    marks: 1,
    negativeMarks: 0,
    correctOptionNumber: 1,
    options: [
      {
        number: 1,
        content: "Option",
        questionNumber: $totalQuestionsToCreate + 1,
      },
    ],
  };

  // Real-time errors: key = path, value = message
  let formErrors: Record<string, string> = {};

  // Reactive validation whenever formData changes
  $: {
    const parsed = questionSchema.safeParse(formData);
    if (!parsed.success) {
      formErrors = {};
      parsed.error.issues.forEach(issue => {
        const path = issue.path.join(".");
        formErrors[path] = issue.message;
      });
    } else {
      formErrors = {};
    }
  }

  function addOption() {
    formData = {
      ...formData,
      options: [
        ...formData.options,
        {
          number: formData.options.length + 1,
          content: "Option",
          questionNumber: formData.number,
        },
      ],
    };
  }

  function deleteOption(index: number) {
    formData = {
      ...formData,
      options: formData.options
        .filter((_, i) => i !== index)
        .map((opt, i) => ({ ...opt, number: i + 1 })),
    };
  }

  function validateAndSave() {
    const parsed = questionSchema.safeParse(formData);
    if (!parsed.success) {
      formErrors = {};
      parsed.error.issues.forEach(issue => {
        const path = issue.path.join(".");
        formErrors[path] = issue.message;
      });
      return;
    }

    questionsToCreate.setKey($totalQuestionsToCreate + 1, parsed.data);
    showAddForm = false;
    resetForm();
  }

  function resetForm() {
    formData = {
      number: $totalQuestionsToCreate + 1,
      content: "",
      marks: 1,
      negativeMarks: 0,
      correctOptionNumber: 1,
      options: [
        { number: 1, content: "", questionNumber: $totalQuestionsToCreate + 1 },
      ],
    };
  }
</script>

<!-- Header -->
<div class="flex justify-between border border-slate-900 p-4 w-full">
  <p>{$totalQuestionsToCreate} questions</p>
  <button on:click={(e) => { e.preventDefault(); questionsCreatorHidden = false; }}>Edit</button>
</div>

{#if !questionsCreatorHidden}
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-slate-200 p-6 rounded-lg border border-black w-2/3 h-2/3 flex flex-col">
      
      <!-- Top Controls -->
      <div class="flex justify-between items-center mb-4">
        <p>{$totalQuestionsToCreate} questions</p>
        <div class="space-x-4">
          <button on:click={(e) => { e.preventDefault(); showAddForm = true; }}>Add</button>
          <button class="text-slate-800">Import JSON</button>
        </div>
      </div>

      <!-- No questions placeholder -->
      {#if $totalQuestionsToCreate === 0}
        <div class="flex-1 flex items-center justify-center h-1/2">
          No questions added
        </div>
      {/if}

      <!-- Existing Questions -->
      {#if $totalQuestionsToCreate > 0}
        <ol class="flex-1 overflow-y-auto space-y-2">
          {#each questionsArray as [id, question]}
            <li class="p-2 border border-gray-400 rounded flex justify-between">
              <span>{question.number ?? id}. {question.content ?? "Untitled"}</span>
              <span>Marks: {question.marks}</span>
            </li>
          {/each}
        </ol>
      {/if}

      <!-- Add/Edit Form -->
      {#if showAddForm}
        <div class="fixed inset-0 bg-white p-6 z-50 flex flex-col">
          <div class="flex-1 flex flex-row space-x-6 [&_label]:text-slate-900 [&_label]:text-xl [&_input]:p-2 [&_input]:border [&_input]:border-black [&_textarea]:border [&_textarea]:p-2">

            <!-- Left Pane: Question -->
            <div class="flex-1 flex flex-col space-y-4">
              <div>
                <p class="font-bold text-lg">Add Question</p>
                <p class="italic text-base">Markdown is supported</p>
              </div>

              <label class="w-full h-full">
                Content
                <MarkdownEditor bind:text={formData.content} />
                {#if formErrors["content"]}
                  <span class="text-red-600 text-sm">{formErrors["content"]}</span>
                {/if}
              </label>

              <label class="flex flex-col">
                <span class="mb-1">Marks for being correct:</span>
                <input type="number" bind:value={formData.marks} />
                {#if formErrors["marks"]}
                  <span class="text-red-600 text-sm">{formErrors["marks"]}</span>
                {/if}
              </label>

              <label class="flex flex-col">
                <span class="mb-1">Marks for being wrong:</span>
                <input type="number" bind:value={formData.negativeMarks} />
                {#if formErrors["negativeMarks"]}
                  <span class="text-red-600 text-sm">{formErrors["negativeMarks"]}</span>
                {/if}
              </label>
            </div>

            <!-- Right Pane: Options -->
            <div class="flex-1 flex flex-col space-y-3">
              <h4 class="font-semibold text-lg">Options</h4>
              <div class="flex-1 overflow-y-auto space-y-2 pr-2">
                {#each formData.options as opt, i}
                  <div class="flex items-start space-x-3 border border-gray-300 rounded p-2">
                    <input
                      type="radio"
                      name="correctOption"
                      value={opt.number}
                      bind:group={formData.correctOptionNumber}
                      class="mt-1"
                    />

                    <div class="flex-1 flex flex-col space-y-1 w-full min-h-10">
                      <span class="text-sm font-medium text-gray-700">Option #{opt.number}</span>
                      <MarkdownEditor bind:text={opt.content} />
                      {#if formErrors[`options.${i}.content`]}
                        <span class="text-red-600 text-sm">{formErrors[`options.${i}.content`]}</span>
                      {/if}
                    </div>

                    <button
                      class="ml-2 text-sm text-red-600 underline"
                      on:click={(e) => { e.preventDefault(); deleteOption(i); }}
                    >
                      ✕
                    </button>
                  </div>
                {/each}
              </div>

              <button
                on:click={(e) => { e.preventDefault(); addOption(); }}
                class="self-start underline text-sm"
              >
                + Add option
              </button>
            </div>
          </div>

          <div class="flex space-x-8 mt-6 justify-end">
            <button on:click={(e) => { e.preventDefault(); validateAndSave(); }}>Ok</button>
            <button class="text-red-500" on:click={() => (showAddForm = false)}>Cancel</button>
          </div>
        </div>
      {/if}

      <div class="flex flex-row justify-between mt-4">
        0 selected
        <button
          on:click={(e) => { e.preventDefault(); questionsCreatorHidden = !questionsCreatorHidden; }}
        >Save</button>
      </div>
    </div>
  </div>
{/if}
