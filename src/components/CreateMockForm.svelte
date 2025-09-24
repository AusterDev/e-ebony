<script lang="ts">
    import CreateMockQuestionsUI from "./CreateMockQuestionsUI.svelte"
    </script>

<form
    class="flex flex-col items-center [&_label]:text-slate-900 [&_label]:text-xl [&_input]:p-4 [&_input]:border-1 [&_input]:border-black space-y-5 w-1/2"
>
    <div class="flex flex-col text-2xl w-2/3 relative">
        <label>Subject*</label>

        <input type="text" />
    </div>
    <div class="flex flex-col text-2xl w-2/3">
        <label>Instructions*</label>

        <div class="p-4 min-h-40 border-1" contenteditable>Calculators are allowed...?</div>
        <p class="text-base italic">Markdown is supported</p>
    </div>

    <div class="flex flex-col text-2xl w-2/3">
        <label>Questions</label>
        <CreateMockQuestionsUI />
    </div>
</form>

