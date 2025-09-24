<script lang="ts">
    import { marked } from "marked";

    let { text = $bindable() } = $props();

    let rawText = $state(text);          
    let renderedHtml = $state("");       
    let isEditing = $state(false);      

    $effect(() => {
        (async () => {
            renderedHtml = await marked.parse(rawText);
        })();
    });

    function handleFocus() {
        isEditing = true;
    }

    function handleBlur() {
        isEditing = false;
    }
</script>

{#if isEditing}
    <textarea
        class="w-full h-full border rounded p-2 font-mono box-border resize-none"
        bind:value={rawText}
        onfocus={handleFocus}
        onblur={handleBlur}
        autofocus
    ></textarea>
{:else}
    <div
        class="prose prose-sm w-full h-full border border-gray-300 rounded p-2 cursor-text overflow-auto"
        onclick={handleFocus}
    >
        {@html renderedHtml}
    </div>
{/if}
