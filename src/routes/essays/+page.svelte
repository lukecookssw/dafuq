<script>
    /** @type {import('./$types').PageData} */
    export let data;

</script>

<svelte:head>
	<title>Essays</title>
	<meta name="description" content="dafuq you wanna listen to me" />
</svelte:head>

<h1 class="text-3xl text-emerald-600 my-3">Rants and Revelations</h1>
<!-- {#each data.records as essay}
    <div>
        <a href={`/essays/${essay.id}`}>{essay.title}</a>
    </div>
{/each} -->