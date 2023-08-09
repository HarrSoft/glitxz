import { z } from 'zod';

export const cartErrorCodeZ = z.enum([
	'INVALID',
	'INVALID_DELIVERY_GROUP',
	'INVALID_DELIVERY_OPTION',
	'INVALID_MERCHANDISE_LINE',
	'INVALID_METAFIELDS',
	'LESS_THAN',
	'MISSING_DISCOUNT_CODE',
	'MISSING_NOTE'
]);
export const currencyCodeZ = z.nativeEnum(CurrencyCode);

export const shopifyResponseZ = z.object({
	userErrors: z.array(
		z.object({
			code: cartErrorCodeZ,
			field: z.array(z.string()),
			message: z.string().optional()
		})
	)
});
export type ShopifyResponseZ = z.infer<typeof shopifyResponseZ>;

export const productVariantZ = z.object({
	id: z.string(),
	title: z.string(),
	quantityAvailable: z.number(),
	price: z.object({
		amount: z.number(),
		currencyCode: currencyCodeZ
	})
});
export type ProductVariantZ = z.infer<typeof productVariantZ>;

//test
const someMoney = 'AUD';
export type ProductVariant = z.infer<typeof productVariantZ>;
console.log(currencyCodeZ.parse(someMoney));

export const productZ = z.object({
	id: z.string(),
	handle: z.string(),
	description: z.string(),
	title: z.string(),
	totalInventory: z.number(),
	productType: z.string(),
	variants: z.array(
		z.object({
			edges: z.array(
				z.object({
					node: productVariantZ
				})
			)
		})
	),
	priceRange: z.object({
		maxVariantPrice: z.object({
			amount: z.number(),
			currencyCode: currencyCodeZ
		}),
		minVariantPrice: z.object({
			amount: z.number(),
			currencyCode: currencyCodeZ
		})
	}),
	images: z.array(
		z.object({
			edges: z.array(
				z.object({
					node: z.object({
						src: z.string(),
						altText: z.string()
					})
				})
			)
		})
	)
});
export type ProductZ = z.infer<typeof productZ>;

export const productEdgesZ = z.object({
	edges: z.array(
		z.object({
			node: z.array(productZ)
		})
	)
});
