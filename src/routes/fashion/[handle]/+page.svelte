<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>
	{data.article.title}
</h1>

<div>{@html data.article.contentHtml}</div>
