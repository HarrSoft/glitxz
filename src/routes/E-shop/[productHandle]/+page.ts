// import type { PageLoad } from './$types';
// import { z } from 'zod';
// import { productResponseZ } from '$z';
import type { ProductResponseZ } from '$z';
import { getProductDetails } from '$com/shopify/queries';

export const load = async ({ params }) => {
	const productHandle: string = params.productHandle;

	const res: ProductResponseZ = await getProductDetails(productHandle);

	return {
		product: res.product,
		productImage: res.product.images?.edges ? res.product.images.edges[0].node.url : '',
		productVariants: res.product.variants?.edges
			? res.product.variants.edges.map((v) => v.node)
			: []
	};
};
