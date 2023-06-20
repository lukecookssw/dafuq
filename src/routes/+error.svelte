<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>dafuq did you do?</title>
	<meta name="description" content="User. Pls. Why?" />
</svelte:head>

<section class="mt-5">
	<div class="flex flex-col items-center">
		<h1 class="text-3xl text-red-700 flex justify-center">You done messed up, a-a-ron</h1>
		<h1 class="text-2xl text-red-700 flex justify-center">
			{$page.status}: {$page.error?.message}
		</h1>
	</div>
</section>
