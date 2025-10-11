<script lang="ts">
    import { onDestroy } from "svelte";

    let { errorMsg, clearMsg } = $props();

    let pos = $state({ x: 0, y: 0 });
    let dragging = $state(false);
    let dragStart = $state({ x: 0, y: 0 });
    let modalStart = $state({ x: 0, y: 0 });

    let modalEl: HTMLElement | null = $state(null);

    function onMouseDown(event: MouseEvent) {
        dragging = true;
        dragStart = { x: event.clientX, y: event.clientY };
        modalStart = { x: pos.x, y: pos.y };

        event.preventDefault();
    }

    function onMouseMove(event: MouseEvent) {
        if (!dragging) return;
        const dx = event.clientX - dragStart.x;
        const dy = event.clientY - dragStart.y;
        pos = { x: modalStart.x + dx, y: modalStart.y + dy };
    }

    function onMouseUp() {
        dragging = false;
    }

    $effect(() => {
        if (modalEl) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);

            onDestroy(() => {
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
            });
        }
    });
</script>

{#if errorMsg !== null}
    <div
        class="fixed inset-0 flex items-center justify-center z-50 p-8"
        role="alert"
        aria-live="assertive"
    >
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div
            bind:this={modalEl}
            class="bg-red-700 text-white rounded-lg shadow-black shadow-xl max-w-sm w-full p-8 flex flex-col items-center space-y-6 cursor-move select-none"
            tabindex="-4"
            role="list"
            onmousedown={onMouseDown}
            style="transform: translate({pos.x}px, {pos.y}px);"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            <p class="text-center text-2xl font-extrabold leading-tight">
                {errorMsg}
            </p>
            <p class="text-center text-sm opacity-80">That is an error</p>

            <button
                onclick={clearMsg}
                class="bg-white text-red-700 font-semibold rounded-md px-6 py-2 shadow-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
                aria-label="Dismiss error message"
            >
                Alright
            </button>
        </div>
    </div>
{/if}
