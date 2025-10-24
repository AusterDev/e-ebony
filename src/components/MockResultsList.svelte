<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { MockResult } from "../generated/prisma";

  export let results: MockResult[] = [];
  export let pageSize: number;
  export let currentPage: number;

  function formatTime(secs: number) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  }
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500"
  in:fade={{ duration: 200 }}
>
  {#each results.slice((currentPage - 1) * pageSize, currentPage * pageSize) as result (result.id)}
    <div
      class="bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col justify-between"
      in:fly={{ y: 30, duration: 250 }}
      out:fade={{ duration: 200 }}
    >
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
            <svg
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900">Mock ID: {result.mockID}</h2>
            <p class="text-sm text-slate-500">Result ID: {result.id}</p>
          </div>
        </div>

        <div class="text-slate-700 text-sm mb-4 line-clamp-3">
          <p>Total Marks: <span class="font-semibold">{result.totalMarks}</span></p>
          <p>Time Taken: <span class="font-semibold">{formatTime(result.timeTakenSecs)}</span></p>
        </div>
      </div>

      <div class="flex justify-between items-center text-sm text-slate-600 border-t border-slate-100 pt-3 mt-3">
        <div>Created At: {new Date(result.createdAt).toLocaleString()}</div>
        <a
          href={`/mock/test/result/${result.id}`}
          class="text-slate-800 font-semibold hover:underline"
        >
          View → 
        </a>
      </div>
    </div>
  {/each}
</div>
