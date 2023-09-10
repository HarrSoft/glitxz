import { postToShopify } from '$q/shopify/utils';
import { blogZ } from '$z/shopify';
import type { BlogZ } from '$z/shopify';

export const getBlogByHandle = async (blogHandle = 'news'): Promise<BlogZ> => {
	try {
		const shopifyResponse = await postToShopify({
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
		});
		const blog = shopifyResponse.blog;
		blog.articles?.edges?.forEach((edge) => {
			edge.node.publishedAt = new Date(edge.node.publishedAt);
		});
		const parsedBlog = blogZ.parse(blog);
		return parsedBlog;
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
