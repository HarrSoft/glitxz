<script context="module" lang="ts">
	import {
		PUBLIC_SHOPIFY_API_ENDPOINT,
		PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
	} from '$env/static/public';
	import { cartMutationResponseZ, productListResponseZ, productResponseZ } from '$z';
	import type { CartMutationResponseZ, ProductListResponseZ, ProductResponseZ } from '$z';

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
			return { errors: result.errors };
		} else if (!result || !result.data) {
			console.log({ result });
			return 'No results found.';
		}
		return result.data;
	};

	export const addItemToCart = async (
		cartId: string,
		itemId: string,
		quantity: number
	): CartMutationResponseZ => {
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
                        price {
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
              cost {
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
		return cartMutationResponseZ.parse(shopifyResponse);
	};

	export const getProducts = async (): ProductListResponseZ => {
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
                  url
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
		return productListResponseZ.parse(shopifyResponse);
	};

	export const getProductDetails = async (productHandle: string): ProductResponseZ => {
		const shopifyResponse = await postToShopify({
			query: ` 
        query getProduct($handle: String!) {
          product(handle: $handle) {  
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
                  price {
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
                  url
                  altText
                }
              }
            }
          }
        }
      `,
			variables: { handle: productHandle }
		});

		return productResponseZ.parse(shopifyResponse.productByHandle);
	};
</script>
