<script lang="ts">
	import type { BlogHandleZ } from '$z/shopifyPrimitives';
	import type { ArticleZ } from '$z/shopify';

	export let article: ArticleZ;
	export let blogHandle: BlogHandleZ | undefined;
</script>

<div>
	<h3>{article.title}</h3>
	<p>
		{article.excerpt
			? article.excerpt.length > 300
				? `${article.excerpt.slice(0, 300)}...`
				: article.excerpt
			: 'Excerptless'}
	</p>
	<a href={`/${blogHandle === 'art' ? 'art/commentary' : blogHandle}/${article.handle}`}>
		Full Article
	</a>
</div>
