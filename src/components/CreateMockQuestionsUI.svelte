<script lang="ts">
  import { questionSchema } from "../schemas/mock";
  import MarkdownEditor from "./MarkdownEditor.svelte";
  import {
    questionsToCreate,
    totalQuestionsToCreate,
  } from "../stores/mock/create/questions";
  import JSONImport from "./JSONImport.svelte";

  let questionsCreatorHidden = $state(true);
  let showAddForm = $state(false);
  let showJSONModal = $state(false);
  let editingQuestionId: number | null = $state(null);

  let questionsArray = $derived(Object.entries($questionsToCreate));

  function makeEmptyForm() {
    return {
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
  }

  let formData = $state(makeEmptyForm());
  let formErrors: Record<string, string> = $state({});

  $effect(() => {
    const parsed = questionSchema.safeParse(formData);
    if (!parsed.success) {
      formErrors = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        formErrors[path] = issue.message;
      });
    } else {
      formErrors = {};
    }
  });

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
      parsed.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        formErrors[path] = issue.message;
      });
      return;
    }

    if (editingQuestionId !== null) {
      questionsToCreate.setKey(editingQuestionId, parsed.data);
    } else {
      questionsToCreate.setKey($totalQuestionsToCreate + 1, parsed.data);
    }

    showAddForm = false;
    resetForm();
  }

  function resetForm() {
    formData = makeEmptyForm();
    editingQuestionId = null;
  }

  function toggleJSONModel() {
    showJSONModal = !showJSONModal;
  }
</script>

<div
  class="flex justify-between items-center border border-gray-700 p-4 bg-gray-50"
>
  <span class="text-lg font-semibold">{$totalQuestionsToCreate} questions</span>
  <button
    class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
    onclick={(e) => {
      e.preventDefault();
      questionsCreatorHidden = false;
    }}
  >
    Edit
  </button>
</div>

{#if !questionsCreatorHidden}
  <div
    class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
  >
    {#if showJSONModal}
      <JSONImport toggleJSON={toggleJSONModel} />
    {/if}

    <div
      class="bg-white rounded-lg shadow-lg w-3/4 h-3/4 flex flex-col overflow-hidden"
    >
      <div
        class="flex justify-between items-center px-6 py-4 border-b border-gray-200"
      >
        <span class="font-semibold">{$totalQuestionsToCreate} questions</span>
        <div class="space-x-3">
          <button
            class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
            onclick={(e) => {
              e.preventDefault();
              showAddForm = true;
              resetForm();
            }}
          >
            + Add
          </button>
          <button
            class="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-200"
            onclick={(e) => {
              e.preventDefault();
              showJSONModal = true;
            }}
          >
            Import JSON
          </button>
        </div>
      </div>

      <div class="flex-1 flex overflow-hidden">

        <div
          class="w-1/2 border-r border-gray-200 p-4 overflow-y-auto bg-gray-50"
        >
          {#if $totalQuestionsToCreate === 0}
            <div class="flex items-center justify-center h-full text-gray-500">
              No questions added
            </div>
          {:else}
            <ol class="space-y-3">
              {#each questionsArray as [id, question]}
                <li
                  class="p-3 bg-white border border-gray-300 rounded flex justify-between items-center hover:shadow-sm"
                >
                  <div class="flex-1 pr-2">
                    <div class="font-medium">
                      {question.number ?? id}. {question.content ?? "Untitled"}
                    </div>
                    <div class="text-sm text-gray-500">
                      Marks: {question.marks}
                    </div>
                  </div>
                  <button
                    class="px-2 py-1 text-sm text-gray-600 hover:underline"
                    onclick={(e) => {
                      e.preventDefault();
                      formData = { ...question };
                      editingQuestionId = Number(id);
                      showAddForm = true;
                    }}
                  >
                    Edit
                  </button>
                </li>
              {/each}
            </ol>
          {/if}
        </div>

  
        {#if showAddForm}
          <div class="w-1/2 p-4 overflow-y-auto">
            <h3 class="text-xl font-semibold mb-4">
              {editingQuestionId !== null ? "Edit Question" : "Add Question"}
            </h3>

            <div class="space-y-4">
              <div>
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label class="block mb-1 text-gray-700 font-medium"
                  >Content</label
                >
                <MarkdownEditor bind:text={formData.content} />
                {#if formErrors["content"]}
                  <div class="text-red-600 text-sm mt-1">
                    {formErrors["content"]}
                  </div>
                {/if}
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <!-- svelte-ignore a11y_label_has_associated_control -->
                  <label class="block mb-1 text-gray-700">Marks (correct)</label
                  >
                  <input
                    type="number"
                    bind:value={formData.marks}
                    class="w-full border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-gray-200"
                  />
                  {#if formErrors["marks"]}
                    <div class="text-red-600 text-sm mt-1">
                      {formErrors["marks"]}
                    </div>
                  {/if}
                </div>
                <div>
                  <!-- svelte-ignore a11y_label_has_associated_control -->
                  <label class="block mb-1 text-gray-700">Marks (wrong)</label>
                  <input
                    type="number"
                    bind:value={formData.negativeMarks}
                    class="w-full border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-gray-200"
                  />
                  {#if formErrors["negativeMarks"]}
                    <div class="text-red-600 text-sm mt-1">
                      {formErrors["negativeMarks"]}
                    </div>
                  {/if}
                </div>
              </div>

              <div>
                <h4 class="font-medium mb-2">Options</h4>
                <div class="space-y-3">
                  {#each formData.options as opt, i (opt.number)}
                    <div
                      class="border border-gray-300 rounded p-3 flex items-start space-x-3"
                    >
                      <input
                        type="radio"
                        name="correctOption"
                        value={opt.number}
                        bind:group={formData.correctOptionNumber}
                        class="mt-1"
                      />
                      <div class="flex-1">
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="text-sm font-medium text-gray-700"
                          >Option #{opt.number}</label
                        >
                        <textarea
                          bind:value={formData.options[i].content}
                          class="w-full border border-gray-300 rounded px-2 py-1 mt-1 focus:ring focus:ring-gray-200"
                        ></textarea>
                        {#if formErrors[`options.${i}.content`]}
                          <div class="text-red-600 text-sm mt-1">
                            {formErrors[`options.${i}.content`]}
                          </div>
                        {/if}
                      </div>
                      <button
                        class="text-red-600 hover:underline text-sm"
                        onclick={(e) => {
                          e.preventDefault();
                          deleteOption(i);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  {/each}
                </div>
                <button
                  class="mt-2 text-gray-600 hover:underline text-sm"
                  onclick={(e) => {
                    e.preventDefault();
                    addOption();
                  }}
                >
                  + Add option
                </button>
              </div>

              <div class="pt-4 flex justify-end space-x-3">
                <button
                  class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
                  onclick={(e) => {
                    e.preventDefault();
                    validateAndSave();
                  }}
                >
                  Save
                </button>
                <button
                  class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  onclick={() => {
                    showAddForm = false;
                    resetForm();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        {:else}

          <div
            class="w-1/2 flex items-center justify-center text-gray-400 italic"
          >
            Select “Add” or “Edit” to work on a question
          </div>
        {/if}
      </div>

      <!-- Footer -->
      <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
        <button
          class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          onclick={(e) => {
            e.preventDefault();
            questionsCreatorHidden = true;
          }}
        >
          Done
        </button>
      </div>
    </div>
  </div>
{/if}
