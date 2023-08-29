import {
	PUBLIC_SHOPIFY_API_ENDPOINT,
	PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
} from '$env/static/public';
import {
	cartMutationResponseZ,
	isProductFilterOption,
	isProductQueryOption,
	productListResponseZ,
	productResponseZ
} from '$z';
import type {
	CartMutationResponseZ,
	ProductFilterZ,
	ProductsFilterFormattedZ,
	ProductListResponseZ,
	ProductQueryZ,
	ProductQueryRawZ,
	ProductPromiseZ
} from '$z';

export const stringifyShopifyQuery = function (queryRaw: ProductQueryRawZ): ProductQueryZ {
	let query = '';
	Object.keys(queryRaw).forEach((key: string) => {
		if (isProductQueryOption(key)) {
			if (typeof queryRaw[key] === 'object') {
				query += `${key}:'${JSON.stringify(queryRaw[key])}' `;
			} else {
				query += `${key}:'${queryRaw[key]}' `;
			}
		}
	});
	return query;
};

export const formatShopifyFilter = function (filter: ProductFilterZ): ProductsFilterFormattedZ {
	let filterString = '';
	Object.keys(filter).forEach((key: string) => {
		if (isProductFilterOption(key)) {
			const valueStringified = key === 'query' ? `"${filter[key]}"` : `${filter[key]}`;
			filterString += `${key}:${valueStringified} `;
		}
	});
	return filterString;
};

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
			Accept: 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:5173',
			'Content-Type': 'application/json',
			'X-Shopify-Storefront-Access-Token': PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
		},
		body: JSON.stringify({ query, variables })
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			return res;
		});

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

export const getProducts = async (
	formattedFilter: ProductsFilterFormattedZ = 'sortKey: TITLE, first: 100'
): Promise<ProductListResponseZ> => {
	try {
		const shopifyResponse = await postToShopify({
			query: `{
        products(${formattedFilter}) {
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
                    image {
                      id
                      url
                      altText
                    }
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
                    id
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
		const res = productListResponseZ.parse(shopifyResponse);
		return res;
	} catch (err) {
		console.error(err);
		return {
			products: {
				edges: []
			}
		};
	}
};

export const getProductDetails = async (productHandle: string): ProductPromiseZ => {
	try {
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
                  image {
                    altText
                    id
                    url
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
                  altText
                  id
                  url
                }
              }
            }
          }
        }
      `,
			variables: { handle: productHandle }
		});
		const res = productResponseZ.parse(shopifyResponse);
		return res;
	} catch (err) {
		console.error(err);
		return {
			product: {
				title: '',
				id: '',
				description: '',
				images: {}
			}
		};
	}
};
