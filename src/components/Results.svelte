<script lang="ts">
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";
  import type { MockResult } from "../generated/prisma";
  import type { APIResponse } from "../types/response";
  import ErrorDialog from "./ErrorDialog.svelte";
  import MockResultsList from "./MockResultsList.svelte";

  let results: MockResult[] = [];
  let loading = false;
  let errorMsg: string | null = null;

  let searchQuery = "";
  let currentPage = 1;
  let pageSize = 6;
  let totalResults = 0;

  let searchTimeout: number | null = null;

  onMount(fetchResults);

  async function fetchResults() {
    loading = true;
    errorMsg = null;

    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set("mockID", searchQuery.trim());
      params.set("sampleSize", (pageSize * currentPage).toString());

      const res = await fetch(`/api/v1/results?${params.toString()}`);
      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      const body = (await res.json()) as APIResponse<MockResult[]>;
      if (!body.ok && body.error) throw new Error(body.error?.cause);

      results = body.d || [];
      totalResults = results.length;
    } catch (err) {
      console.error("Error fetching results:", err);
      errorMsg = "Failed to fetch results. Please try again later.";
    } finally {
      loading = false;
    }
  }

  function clearErrorMsg() {
    errorMsg = null;
  }

  function handleSearchInput(value: string) {
    searchQuery = value;
    currentPage = 1;

    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(fetchResults, 500);
  }

  function nextPage() {
    currentPage += 1;
    fetchResults();
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage -= 1;
      fetchResults();
    }
  }
</script>

<ErrorDialog {errorMsg} clearMsg={clearErrorMsg} />

<div class="min-h-screen bg-slate-100 py-8 px-4 transition-all duration-500 ease-out">
  <div class="max-w-6xl mx-auto">
    <div
      class="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      in:fade={{ duration: 300 }}
    >
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Your Mock Results</h1>
        <p class="text-slate-600">Browse the results of the mock tests you attempted</p>
      </div>

      <div class="flex items-center w-full md:w-auto" in:fade={{ duration: 400 }}>
        <input
          class="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-700 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400 w-full md:w-72"
          placeholder="Search by mock ID..."
          bind:value={searchQuery}
          on:input={(e) => handleSearchInput(e.currentTarget.value)}
        />
      </div>
    </div>

    {#if loading}
      <div class="flex justify-center py-24" in:fade>
        <svg
          class="animate-spin h-12 w-12 text-slate-700 drop-shadow-sm"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    {:else if results.length === 0}
      <div
        class="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center text-slate-700 transition-all duration-300"
        in:scale={{ duration: 250, start: 0.95 }}
      >
        <svg
          class="w-10 h-10 mx-auto mb-3 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 17v-2h6v2m3-8H6m6-3v9"
          />
        </svg>
        <p class="text-lg font-semibold">No results found</p>
        <p class="text-slate-500 text-sm mt-1">
          Try changing your search or attempt a mock test.
        </p>
      </div>
    {:else}
      <MockResultsList {results} {pageSize} {currentPage} />

      <div
        class="flex justify-center items-center gap-4 mt-10"
        in:fade={{ duration: 300 }}
      >
        <button
          on:click={prevPage}
          disabled={currentPage === 1}
          class="px-5 py-3 rounded-xl font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>

        <span class="text-slate-700 font-medium">
          Page {currentPage} / {Math.ceil(totalResults / pageSize) || 1}
        </span>

        <button
          on:click={nextPage}
          disabled={currentPage * pageSize >= totalResults}
          class="px-5 py-3 rounded-xl font-semibold bg-slate-800 text-white hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    {/if}
  </div>
</div>
