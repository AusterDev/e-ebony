<script lang="ts">
  import { questionSchema } from "../schemas/mock";
  import {
    questionsToCreate,
    totalQuestionsToCreate,
  } from "../stores/mock/create/questions";
  import { writable } from "svelte/store";

  let { toggleJSON } = $props();

  let showPasteModal = $state(false);
  let pastedJsonText = $state("");

  const importError = writable<string | null>(null);
  const importSuccess = writable<string | null>(null);
  const validationErrors = writable<{ index: number; errors: string[] }[]>([]);

  function clearMessages() {
    importError.set(null);
    importSuccess.set(null);
    validationErrors.set([]);
  }

  function handleFileImport(event: Event) {
    clearMessages();
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      importError.set("No file selected.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const json = JSON.parse(text);
        processImportedQuestions(json);
      } catch {
        importError.set("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  }

  function handlePasteImport() {
    clearMessages();
    try {
      const json = JSON.parse(pastedJsonText);
      processImportedQuestions(json);
      pastedJsonText = "";
      showPasteModal = false;
    } catch (err) {
      console.error(err);
      importError.set(`Invalid JSON: ${err}`);
    }
    showPasteModal = false;
  }

  function processImportedQuestions(json: any) {
    if (!Array.isArray(json)) {
      importError.set("JSON must be an array of questions.");
      return;
    }

    const existingQuestions = Object.values(questionsToCreate.get());
    const existingContents = new Set(
      existingQuestions.map((q) => q.content.trim())
    );

    let addedCount = 0;
    let errors: { index: number; errors: string[] }[] = [];

    json.forEach((question, index) => {
      const result = questionSchema.safeParse(question);
      if (result.success) {
        const isDuplicate = existingContents.has(result.data.content.trim());
        if (isDuplicate) {
          errors.push({
            index,
            errors: ["Duplicate question detected (same content)."],
          });
          return;
        }

        const id = totalQuestionsToCreate.get() + 1;

        questionsToCreate.setKey(id, {
          ...result.data,
          number: id,
        });

        addedCount++;
        existingContents.add(result.data.content.trim());
      } else {
        const errs = result.error.errors.map((e) => e.message);
        errors.push({ index, errors: errs });
      }
    });

    validationErrors.set(errors);

    if (addedCount > 0) {
      importSuccess.set(`Imported ${addedCount} valid question(s).`);
    } else if (errors.length === 0) {
      importError.set("No questions found in the JSON.");
    } else {
      importError.set("No valid questions found in the JSON.");
    }
    showPasteModal = false;
  }
</script>


<div class="fixed inset-0 z-40 flex items-center justify-center p-6 text-black">
  <div class="bg-gray-100 shadow-black shadow-lg rounded-lg w-full max-w-3xl p-8 space-y-6">
    <h2 class="text-2xl font-bold text-center text-gray-900">Import Questions</h2>

    <div class="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 text-center">
      <div>
        <input
          type="file"
          accept=".json"
          id="json-input"
          onchange={handleFileImport}
          class="hidden"
        />
        <label
          for="json-input"
          class="inline-block bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-600 cursor-pointer transition"
        >
          Upload JSON File
        </label>
      </div>

      <button
        class="bg-white border border-slate-700 text-slate-700 px-6 py-2 rounded hover:bg-slate-100 transition"
        onclick={() => {
          clearMessages();
          showPasteModal = true;
        }}
      >
        Paste JSON
      </button>
    </div>

    <div class="space-y-4">
      {#if $importSuccess}
        <p class="text-gray-700 font-medium text-center">{$importSuccess}</p>
      {/if}

      {#if $importError}
        <p class="text-red-700 font-medium text-center">{$importError}</p>
      {/if}

      {#if $validationErrors.length > 0}
        <div class="bg-red-100 border border-red-400 p-4 rounded max-h-60 overflow-y-auto text-sm text-red-800">
          <strong class="block mb-2">Validation errors:</strong>
          <ul class="space-y-2 list-disc list-inside">
            {#each $validationErrors as err}
              <li>
                Question index <code class="bg-gray-200 px-1 rounded">{err.index}</code>:
                <ul class="list-decimal list-inside ml-4 mt-1 space-y-1">
                  {#each err.errors as msg}
                    <li>{msg}</li>
                  {/each}
                </ul>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>

    <div class="flex justify-center">
      <button
        class="text-sm text-slate-800 hover:underline px-4 py-2"
        onclick={() => toggleJSON()}
      >
        Done
      </button>
    </div>
  </div>
</div>

{#if showPasteModal}
  <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
    <div class="bg-white w-full max-w-3xl p-6 rounded-lg shadow-xl space-y-4">
      <h2 class="text-xl font-bold text-gray-800">Paste JSON</h2>

      <textarea
        bind:value={pastedJsonText}
        placeholder="Paste an array of questions here..."
        class="w-full h-64 p-4 border border-gray-300 rounded font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-slate-500"
      ></textarea>

      <div class="flex justify-end space-x-4">
        <button
          class="bg-slate-800 text-white px-5 py-2 rounded hover:bg-slate-700 transition"
          onclick={handlePasteImport}
        >
          Import
        </button>
        <button
          class="text-red-600 hover:underline px-5 py-2"
          onclick={() => {
            showPasteModal = false;
            pastedJsonText = "";
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
{/if}
