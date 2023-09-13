<script lang="ts">
	import type { BlogHandleZ } from '$z/shopifyPrimitives';
	import type { ArticleZ } from '$z/shopify';
	import ArticlePreview from '$com/shopify/ArticlePreview.svelte';

	export let articles: Array<ArticleZ> = [];
	export let handle: BlogHandleZ;
</script>

<main>
	<h1>
		{handle
			? handle.charAt(0) + handle.slice(1)
			: "There should be a blog title here. But there isn't."}
	</h1>

	<div>
		{#each articles as article (article.id)}
			<ArticlePreview blogHandle={handle} {article} />
		{:else}
			<p>No articles!</p>
		{/each}
	</div>
</main>
