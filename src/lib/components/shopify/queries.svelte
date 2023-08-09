<script context="module" lang="ts">
	import {
		PUBLIC_SHOPIFY_API_ENDPOINT,
		PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
	} from '$env/static/public';

	// todo: use a proper graphql library. This is calling an unauthenticated API so it doesn't matter.
	export const postToShopify = async ({
		query,
		variables
	}: {
		query: string; //obviously this should be a graphql type rather than string
		variables?: { [key: string]: any };
	}) => {
		const result = await fetch(PUBLIC_SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
			},
			body: JSON.stringify({ query, variables })
		}).then((res) => res.json());

		if (result.errors) {
			console.log({ errors: result.errors });
		} else if (!result || !result.data) {
			console.log({ result });
			return 'No results found.';
		}
		return result.data;
	};

	export const addItemToCart = async (cartId: string, itemId: string, quantity: number) => {
		const shopifyResponse = postToShopify({
			query: `
        mutation addItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
              id
              lines(first: 10) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        priceV2 {
                          amount
                          currencyCode
                        }
                        product {
                          title
                          handle
                        }
                      }
                    }
                  }
                }
              }
              estimatedCost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
                totalDutyAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      `,
			variables: {
				cartId,
				lines: [
					{
						merchandiseId: itemId,
						quantity
					}
				]
			}
		});
		return shopifyResponse;
	};

	export const getProducts = async (): Promise<ProductEdges> => {
		const shopifyResponse = await postToShopify({
			query: `{
      products(sortKey: TITLE, first: 100) {
        edges {
          node {
            id
            handle
            description
            title
            totalInventory
            productType
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  price
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      }
    }
  `
		});
		products.set(shopifyResponse.products.edges);
		return shopifyResponse;
	};

	export const getProductDetails = async (productHandle: string) => {
		const shopifyResponse = await postToShopify({
			query: ` 
        query getProduct($handle: String!) {
          productByHandle(handle: $handle) {
            id
            handle
            description
            title
            totalInventory
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      `,
			variables: { handle: productHandle }
		});

		productDetails.set(shopifyResponse.productByHandle);
		return shopifyResponse.productByHandle;
	};
</script>
