<script lang="ts">
	import type { PageData } from './$types';
	import Blog from '$com/blog/Blog.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Fashion@Glitxz</title>
</svelte:head>

<Blog handle="fashion" articles={data.articles} />
