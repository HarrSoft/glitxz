<script lang="ts">
	import type { PageData } from './$types';
	import Blog from '$com/blog/Blog.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Gaming@Glitxz</title>
</svelte:head>

<Blog handle="gaming" articles={data.articles} />
