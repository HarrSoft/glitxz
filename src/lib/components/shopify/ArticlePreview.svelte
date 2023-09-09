<script lang="ts">
	import type { ArticleZ } from '$z/shopify';

	export let article: ArticleZ;
	console.log('yo');
</script>

<div>
	<h3>{article.title}</h3>
</div>
