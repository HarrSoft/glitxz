import { z } from 'zod';

import type { PageLoad } from './$types';
import type { ProductZ } from '$z';
import { getProductDetails } from '$com/shopify/queries.svelte';

export async function load({ params }): PageLoad {
	const productHandle: string = params.productHandle;
	const product: ProductZ = z.parse(await getProductDetails(productHandle));
	const productImage = product.images.edges[0].node.src;
	const productVariants = product.variants.edges.map((v) => v.node);
	return { props: { product, productImage, productVariants } };
}
