<script lang="ts">
	import type { PageData } from './$types';
	import ArticlePreview from '$com/shopify/ArticlePreview.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Shoperoni</title>
</svelte:head>

<main>
	<h1>Art</h1>

	<div>
		{#each data.articles as article (article.id)}
			<ArticlePreview {article} />
		{:else}
			<p>No articles!</p>
		{/each}
	</div>
</main>
