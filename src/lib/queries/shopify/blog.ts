import { postToShopify } from '$q/shopify/utils';
import { blogZ } from '$z/shopify';
import type { BlogZ } from '$z/shopify';

export const getBlogByHandle = async (blogHandle = 'news'): Promise<BlogZ> => {
	try {
		const shopifyResponse = blogZ.parse(
			(
				await postToShopify({
					query: `
        query getBlog($blogHandle: String!) {
          blog(handle: $blogHandle) {
            handle
            id
            title
            articles(first: 5) {
              edges {
                node {
                  authorV2 {
                    firstName
                    name
                  }
                  excerpt
                  handle
                  id
                  image {
                    altText
                    id
                    url
                  }
                  publishedAt
                  tags
                  title
                }
              }
            }
            
          }
        }
      `,
					variables: {
						blogHandle
					}
				})
			).blog
		);

		shopifyResponse.articles?.edges?.forEach((edge) => {
			edge.node.publishedAt = new Date(edge.node.publishedAt);
		});
		const res = blogZ.parse(shopifyResponse);
		return res;
	} catch (err) {
		console.error(err);
		return {
			id: 'none',
			articles: {
				edges: []
			},
			handle: 'news',
			title: 'News'
		};
	}
};
