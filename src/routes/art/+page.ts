import type { BlogZ } from '$z/shopify';
import { getBlogByHandle } from '$q/shopify/blog';

export const load = async () => {
	const res: BlogZ = await getBlogByHandle('news');

	return {
		articles: res?.articles?.edges ? res.articles.edges.map((node) => node.node) : []
	};
};
