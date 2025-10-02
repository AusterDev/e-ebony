<script lang="ts">
  import { marked } from "marked";

  let { text = $bindable("") } = $props();

  let renderedHtml = $state("");
  let isEditing = $state(false);

  $effect(() => {
    (async () => {
      renderedHtml = await marked.parse(text);
    })();
  });

  function startEditing() {
    isEditing = true;
  }

  function stopEditing() {
    isEditing = false;
  }
</script>

{#if isEditing}
  <textarea
    bind:value={text}
    class="w-full h-full border rounded p-2 font-mono resize-y"
    on:blur={stopEditing}
    autofocus
  ></textarea>
{:else}
  <div
    class="prose prose-sm w-full h-full border border-gray-300 rounded p-2 cursor-text"
    on:click={startEditing}
  >
    {@html renderedHtml || "<span class='text-gray-400'>Click to edit…</span>"}
  </div>
{/if}
