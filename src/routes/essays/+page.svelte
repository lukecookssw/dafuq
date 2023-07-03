<script>
    /** @type {import('./$types').PageData} */
    export let data;

</script>

<h1 class="text-3xl text-emerald-600 my-3">Rants and Revelations</h1>
{#each data.records as essay}
    <div>
        <a href={`/essays/${essay.id}`}>{essay.title}</a>
    </div>
{/each}