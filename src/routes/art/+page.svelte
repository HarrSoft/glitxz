<script lang="ts">
	import type { PageData } from './$types';
	import Blog from '$com/blog/Blog.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Art@Glitxz</title>
</svelte:head>

<Blog handle="art" articles={data.articles} />
