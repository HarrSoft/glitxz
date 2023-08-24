import { z } from 'zod';

// By ggoodman
export const literalZ = z.union([z.string(), z.number(), z.boolean(), z.null()]);
export type LiteralZ = z.infer<typeof literalZ>;
export type JsonZ = LiteralZ | { [key: string]: JsonZ } | JsonZ[];
export const jsonZ: z.ZodType<JsonZ> = z.lazy(() =>
	z.union([literalZ, z.array(jsonZ), z.record(jsonZ)])
);

export const displayableErrorZ = z.object({
	field: z.array(z.string()),
	message: z.string()
});

export const shopifyNodeZ = z.object({
	id: z.string()
});
export type ShopifyNodeZ = z.infer<typeof shopifyNodeZ>;

export const onlineStorePublishableZ = z.object({
	onlineStoreUrl: z.string().url().nullable()
});
export type OnlineStorePublishableZ = z.infer<typeof onlineStorePublishableZ>;

export const trackableZ = z.object({
	trackingParameters: z.string().optional()
});
export type TrackableZ = z.infer<typeof trackableZ>;

export const shopifyAttributeZ = z.object({
	key: z.string(),
	value: z.string().optional()
});
export type ShopifyAttributeZ = z.infer<typeof shopifyAttributeZ>;

export const shopifyEdgeZ = function <T extends z.ZodTypeAny>(typeDefinition: T) {
	return z.object({
		cursor: z.string(),
		node: typeDefinition
	});
};
export type ShopifyEdgeZ = ReturnType<typeof shopifyEdgeZ>;

export const shopifyFilterTypeZ = z.nativeEnum(ShopifyFilterType);
export const shopifyFilterValueZ = shopifyNodeZ.extend({
	count: z.number().int(),
	input: jsonZ,
	label: z.string()
});

export const shopifyFilterZ = shopifyNodeZ.extend({
	label: z.string(),
	type: shopifyFilterTypeZ,
	values: z.array(shopifyFilterValueZ)
});
export const shopifyPageInfoZ = z.object({
	endCursor: z.string().optional(),
	hasNextPage: z.boolean(),
	hasPreviousPage: z.boolean(),
	startCursor: z.string().optional()
});

// This is a generator for a type definition! Not a type definition
export const shopifyConnectionZ = function <T extends z.ZodTypeAny>(typeDefinition: T) {
	return z.object({
		edges: z.array(shopifyEdgeZ<T>(typeDefinition)).optional(),
		nodes: z.array(typeDefinition).optional(),
		pageInfo: shopifyPageInfoZ.optional(),
		filters: z.array(shopifyFilterZ).optional(),
		totalCount: z.number().int().min(0).optional()
	});
};
export type ShopifyConnectionZ<T extends z.ZodTypeAny> = ReturnType<typeof shopifyConnectionZ<T>>;

export const metafieldReferenceZ = z.lazy(() => z.union([productZ, productVariantZ])); // can also add: Collection | GenericFile | MediaImage | Metaobject | Page | Video
export type MetafieldReferenceZ = z.infer<typeof metafieldReferenceZ>;

export const metafieldReferenceConnectionZ = shopifyConnectionZ(metafieldReferenceZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type MetafieldReferenceConnectionZ = z.infer<typeof metafieldReferenceConnectionZ>;

export const metafieldZ: z.ZodSchema = shopifyNodeZ.extend({
	createdAt: z.date(),
	description: z.string().optional(),
	key: z.string(),
	namespace: z.string(),
	parentResource: z.lazy(() =>
		z.union([cartZ, customerZ, shopifyLocationZ, productZ, productVariantZ])
	), // not included yet, but could be in future: article, blog, collection, market, order, page, shop
	reference: metafieldReferenceZ.optional(),
	references: metafieldReferenceConnectionZ,
	type: z.string(), // https://shopify.dev/docs/apps/custom-data/metafields/types
	updatedAt: z.date(),
	value: z.string()
});
export type MetafieldZ = z.infer<typeof metafieldZ>;

export const metafieldConnectionZ = shopifyConnectionZ(metafieldZ);
export type MetafieldConnectionZ = z.infer<typeof metafieldConnectionZ>;

export const hasMetafieldsZ = z.object({
	metafield: metafieldZ.optional(),
	metafields: metafieldConnectionZ
});
export type HasMetafieldsZ = z.infer<typeof hasMetafieldsZ>;

export const shopifyImageZ = shopifyNodeZ.extend({
	altText: z.string().optional(),
	height: z.number().int().optional(),
	width: z.number().int().optional(),
	url: z.string()
});
export type ShopifyImageZ = z.infer<typeof shopifyImageZ>;

export const imageConnectionZ = shopifyConnectionZ(shopifyImageZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type ImageConnectionZ = z.infer<typeof imageConnectionZ>;

export const countryCodeZ = z.nativeEnum(CountryCode);
export const currencyCodeZ = z.nativeEnum(CurrencyCode);
export const unitPriceMeasurementMeasuredTypeZ = z.nativeEnum(UnitPriceMeasurementMeasuredType);
export const unitPriceMeasurementMeasuredUnit = z.nativeEnum(UnitPriceMeasurementMeasuredUnit);
export const weightUnitZ = z.nativeEnum(WeightUnit);

export const moneyZ = z.object({
	amount: z.number(),
	currencyCode: currencyCodeZ
});
export type MoneyZ = z.infer<typeof moneyZ>;

export const unitPriceMeasurementZ = z.object({
	measuredType: unitPriceMeasurementMeasuredTypeZ,
	quantityUnit: unitPriceMeasurementMeasuredUnit,
	quantityValue: z.number().int(),
	referenceUnit: unitPriceMeasurementMeasuredUnit,
	referenceValue: z.number().int()
});
export type UnitPriceMeasurementZ = z.infer<typeof unitPriceMeasurementZ>;

export const addressZ = z.object({
	address1: z.string().optional(),
	address2: z.string().optional(),
	city: z.string().optional(),
	country: z.string().optional(),
	formatted: z.array(z.string()),
	latitude: z.number().optional(),
	longitutde: z.number().optional(),
	phone: z.string().optional(),
	province: z.string().optional(),
	provinceCode: z.string().optional(),
	zip: z.string().optional()
});

export const mailingAddressZ = shopifyNodeZ.merge(addressZ).extend({
	company: z.string().optional(),
	countryCodeV2: countryCodeZ.optional(),
	firstName: z.string().optional(),
	formattedArea: z.string().optional(),
	lastName: z.string().optional(),
	name: z.string().optional()
});
export type MailingAddressZ = z.infer<typeof mailingAddressZ>;

export const mailingAddressConnectionZ = shopifyConnectionZ(mailingAddressZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type MailingAddressConnectionZ = z.infer<typeof mailingAddressConnectionZ>;

export const inventoryAddressZ = addressZ.extend({
	countryCode: countryCodeZ.optional()
});

export const sellingPlanAllocationPriceAdjustmentZ = z.object({
	compareAtPrice: moneyZ,
	perDeliveryPrice: moneyZ,
	price: moneyZ,
	unitPrice: moneyZ.nullable()
});
export const sellingPlanCheckoutChargeTypeZ = z.nativeEnum(SellingPlanCheckoutChargeType);
export const sellingPlanCheckoutChargeValueZ = z.union([
	z.object({
		percentage: z.number()
	}),
	moneyZ
]);
// type SellingPlanAllocationPriceAdjustmentZ = z.infer<typeof sellingPlanAllocationPriceAdjustmentZ>;
export const sellingPlanCheckoutChargeZ = z.object({
	type: sellingPlanCheckoutChargeTypeZ,
	value: sellingPlanCheckoutChargeValueZ
});

export const sellingPlanPriceAdjustmentValueZ = z.union([
	z.object({ adjustmentAmount: moneyZ }),
	z.object({ price: moneyZ }),
	z.object({ adjustmentPercentage: z.number().int() })
]);

export const sellingPlanPriceAdjustmentZ = z.object({
	adjustmentValue: sellingPlanPriceAdjustmentValueZ,
	orderCount: z.number().int().nullable()
});

export const sellingPlanZ = shopifyNodeZ.extend({
	checkoutCharge: sellingPlanCheckoutChargeZ,
	description: z.string().optional(),
	name: z.string(),
	options: z.array(
		z.object({
			name: z.string().optional(),
			value: z.string().optional()
		})
	),
	priceAdjustments: z.array(sellingPlanPriceAdjustmentZ),
	recurringDeliveries: z.boolean()
});

export const sellingPlanConnectionZ = shopifyConnectionZ(sellingPlanZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type SellingPlanConnectionZ = z.infer<typeof sellingPlanConnectionZ>;

export const sellingPlanAllocationZ = z.object({
	checkoutChargeAmount: moneyZ,
	priceAdjustments: z.array(sellingPlanAllocationPriceAdjustmentZ),
	remainingBalanceChargeAmount: moneyZ,
	sellingPlan: z.lazy(() => sellingPlanZ)
});
export type SellingPlanAllocationZ = z.infer<typeof sellingPlanAllocationZ>;

export const sellingPlanAllocationConnectionZ = shopifyConnectionZ(sellingPlanAllocationZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type SellingPlanAllocationConnectionZ = z.infer<typeof sellingPlanAllocationConnectionZ>;

export const sellingPlanGroupOptionZ = z.object({
	name: z.string(),
	values: z.array(z.string())
});
export type SellingPlanGroupOptionZ = z.infer<typeof sellingPlanGroupOptionZ>;

export const sellingPlanGroupZ = z.object({
	appName: z.string().optional(),
	name: z.string(),
	options: z.array(sellingPlanGroupOptionZ),
	sellingPlans: sellingPlanConnectionZ
});
export type SellingPlanGroupZ = z.infer<typeof sellingPlanGroupZ>;

export const sellingPlanGroupConnectionZ = shopifyConnectionZ(sellingPlanGroupZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type SellingPlanGroupConnectionZ = z.infer<typeof sellingPlanGroupConnectionZ>;

export const shopifyLocationZ = shopifyNodeZ.merge(hasMetafieldsZ).extend({
	address: inventoryAddressZ,
	name: z.string()
});
export type ShopifyLocationZ = z.infer<typeof shopifyLocationZ>;

export const locationConnectionZ = shopifyConnectionZ(shopifyLocationZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type LocationConnectionZ = ShopifyConnectionZ<typeof shopifyLocationZ>;

export const storeAvailabilityZ = z.object({
	available: z.boolean(),
	location: shopifyLocationZ,
	pickUpTime: z.string(),
	quantityAvailable: z.number().int()
});
export type StoreAvailabilityZ = z.infer<typeof storeAvailabilityZ>;

export const storeAvailabilityConnectionZ = shopifyConnectionZ(storeAvailabilityZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type StoreAvailabilityConnectionZ = z.infer<typeof storeAvailabilityConnectionZ>;

export type ProductVariantZ = ShopifyNodeZ &
	HasMetafieldsZ & {
		availableForSale: boolean;
		barcode?: string;
		compareAtPrice?: MoneyZ;
		currentlyNotInStock: boolean;
		image: ShopifyImageZ;
		price: MoneyZ;
		product?: ProductZ;
		quantityAvailable: number;
		title: string;
		requiresShipping: boolean;
		selectedOptions: {
			name: string;
			value: string;
		};
		sellingPlanAllocations: SellingPlanAllocationConnectionZ;
		sku?: string;
		storeAvailability: StoreAvailabilityConnectionZ;
		unitPrice?: MoneyZ;
		unitPriceMeasurement?: UnitPriceMeasurementZ;
		weight?: number;
		weightUnit: WeightUnit;
	};
export const productVariantZ: z.ZodSchema<ProductVariantZ> = z
	.object({
		availableForSale: z.boolean(),
		barcode: z.string().optional(),
		compareAtPrice: moneyZ.optional(),
		currentlyNotInStock: z.boolean(),
		image: shopifyImageZ,
		price: moneyZ,
		product: z.lazy(() => productZ),
		quantityAvailable: z.number(),
		requiresShipping: z.boolean(),
		title: z.string(),
		selectedOptions: z.object({
			name: z.string(),
			value: z.string()
		}),
		sellingPlanAllocations: sellingPlanAllocationConnectionZ,
		sku: z.string().optional(),
		storeAvailability: storeAvailabilityConnectionZ,
		unitPrice: moneyZ.optional(),
		unitPriceMeasurement: unitPriceMeasurementZ,
		weight: z.number().optional(),
		weightUnit: weightUnitZ
	})
	.merge(shopifyNodeZ)
	.merge(hasMetafieldsZ);

export const productVariantConnectionZ = shopifyConnectionZ(productVariantZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type ProductVariantConnectionZ = z.infer<typeof productVariantConnectionZ>;

const priceRangeZ = z.object({
	maxVariantPrice: moneyZ,
	minVariantPrice: moneyZ
});

export const shopifySeoZ = z.object({
	description: z.string().optional(),
	title: z.string().optional()
});
export type ShopifySeoZ = z.infer<typeof shopifySeoZ>;

export const mediaContentTypeZ = z.nativeEnum(MediaContentType);
export const mediaPresentationZ = shopifyNodeZ.extend({
	asJson: jsonZ
});

export const media = shopifyNodeZ.extend({
	alt: z.string().optional(),
	mediaContentType: mediaContentTypeZ,
	presentation: mediaPresentationZ.optional(),
	previewImage: shopifyImageZ.optional()
});

export const mediaConnectionZ = shopifyConnectionZ(media).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type MediaConnectionZ = z.infer<typeof mediaConnectionZ>;

export const productZ = z
	.object({
		availableForSale: z.boolean(),
		compareAtPriceRange: priceRangeZ,
		collections: z.lazy(() => collectionConnectionZ),
		createdAt: z.date(),
		description: z.string(),
		descriptionHtml: z.string(), //todo: HTML parsing
		featuredImage: shopifyImageZ.optional(),
		handle: z.string(),
		isGiftCard: z.boolean(),
		images: imageConnectionZ,
		media: mediaConnectionZ,
		options: z.array(
			shopifyNodeZ.extend({
				name: z.string(),
				values: z.array(z.string())
			})
		),
		priceRange: priceRangeZ,
		productType: z.string(),
		publishedAt: z.date(),
		requiresSellingPlan: z.boolean(),
		sellingPlanGroups: sellingPlanGroupConnectionZ,
		seo: shopifySeoZ,
		tags: z.array(z.string()),
		title: z.string(),
		totalInventory: z.number().int().optional(),
		updatedAt: z.date(),
		variantBySelectedOptions: productVariantZ.optional(),
		variants: productVariantConnectionZ,
		vendor: z.string()
	})
	.merge(hasMetafieldsZ)
	.merge(shopifyNodeZ)
	.merge(onlineStorePublishableZ)
	.merge(trackableZ);
export type ProductZ = z.infer<typeof productZ>;

export const productConnectionZ = shopifyConnectionZ(productZ).pick({
	edges: true,
	filters: true,
	nodes: true,
	pageInfo: true
});
export type ProductConnectionZ = z.infer<typeof productConnectionZ>;

export type ShopifyCollectionZ = ShopifyNodeZ &
	HasMetafieldsZ &
	OnlineStorePublishableZ &
	TrackableZ & {
		description: string;
		descriptionHtml: string;
		handle: string;
		image?: ShopifyImageZ;
		products: ProductConnectionZ;
		seo: ShopifySeoZ;
		title: string;
		updatedAt: Date;
	};

export const shopifyCollectionZ: z.ZodSchema<ShopifyCollectionZ> = z
	.object({
		description: z.string(),
		descriptionHtml: z.string(), //todo: HTML parsing
		handle: z.string(),
		image: shopifyImageZ.optional(),
		products: productConnectionZ,
		seo: shopifySeoZ,
		title: z.string(),
		updatedAt: z.date()
	})
	.merge(hasMetafieldsZ)
	.merge(shopifyNodeZ)
	.merge(onlineStorePublishableZ)
	.merge(trackableZ);

export const collectionConnectionZ = shopifyConnectionZ(shopifyCollectionZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true,
	totalCount: true
});
export type CollectionConnectionZ = z.infer<typeof collectionConnectionZ>;

export const orderCancelReasonZ = z.nativeEnum(OrderCancelReason);
export const orderFulfillmentStatusZ = z.nativeEnum(OrderFulfillmentStatus);
export const orderFinancialStatusZ = z.nativeEnum(OrderFinancialStatus);

export const discountApplicationAllocationMethodZ = z.nativeEnum(
	DiscountApplicationAllocationMethod
);
export const discountApplicationTargetSelectionZ = z.nativeEnum(DiscountApplicationTargetSelection);
export const discountApplicationTargetTypeZ = z.nativeEnum(DiscountApplicationTargetType);

export const pricingValueZ = z.union([
	moneyZ,
	z.object({
		percentage: z.number()
	})
]);
export type PricingValueZ = z.infer<typeof pricingValueZ>;

export const discountApplicationZ = z.object({
	applicationMethod: discountApplicationAllocationMethodZ,
	targetSelection: discountApplicationTargetSelectionZ,
	targetType: discountApplicationTargetTypeZ,
	value: pricingValueZ
});
export type DiscountApplicationZ = z.infer<typeof discountApplicationZ>;

export const discountApplicationConnectionZ = shopifyConnectionZ(discountApplicationZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type DiscountApplicationConnectionZ = z.infer<typeof discountApplicationConnectionZ>;

export const discountAllocationZ = z.object({
	allocatedAmount: moneyZ,
	discountApplication: discountApplicationZ
});
export type DiscountAllocationZ = z.infer<typeof discountAllocationZ>;

export const orderLineItemZ = z.object({
	currentQuantity: z.number().int(),
	customAttributes: z.array(shopifyAttributeZ),
	discountAllocations: z.array(discountAllocationZ),
	discountedTotalPrice: moneyZ,
	originalTotalPrice: moneyZ,
	quantity: z.number().int(),
	title: z.string(),
	variant: productVariantZ.optional()
});
export type OrderLineItemZ = z.infer<typeof orderLineItemZ>;

export const orderLineItemConnectionZ = shopifyConnectionZ(orderLineItemZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type OrderLineItemConnectionZ = z.infer<typeof orderLineItemConnectionZ>;

export const fulfillmentLineItemZ = z.object({
	lineItem: orderLineItemZ,
	quantity: z.number().int()
});

export const fulfillmentLineItemConnectionZ = shopifyConnectionZ(fulfillmentLineItemZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type FulfillmentLineItemConnectionZ = z.infer<typeof fulfillmentLineItemConnectionZ>;

export const orderFulfillmentZ = z.object({
	fulfillmentLineItems: fulfillmentLineItemConnectionZ,
	trackingCompany: z.string().optional(),
	trackingInfo: z.array(
		z.object({
			number: z.string().optional(),
			url: z.string().url().optional()
		})
	)
});
export type OrderFulfillmentZ = z.infer<typeof orderFulfillmentZ>;

export const shopifyOrderZ = shopifyNodeZ.merge(hasMetafieldsZ).extend({
	billingAddress: mailingAddressZ.optional(),
	cancelReason: orderCancelReasonZ.optional(),
	canceledAt: z.date().optional(),
	currencyCode: currencyCodeZ,
	currentSubtotalPrice: moneyZ,
	currentTotalDuties: moneyZ.optional(),
	currentTotalPrice: moneyZ,
	currentTotalTax: moneyZ,
	customAttributes: z.array(shopifyAttributeZ),
	customerLocale: z.string().optional(),
	customerUrl: z.string().url().optional(),
	discountApplications: discountApplicationConnectionZ,
	edited: z.boolean(),
	email: z.string().email().optional(),
	financialStatus: orderFinancialStatusZ.optional(),
	fulfillmentStatus: orderFulfillmentStatusZ,
	lineItems: orderLineItemConnectionZ,
	name: z.string(),
	orderNumber: z.number().int(),
	originalTotalDuties: moneyZ.optional(),
	originalTotalPrice: moneyZ,
	phone: z.string().optional(),
	processedAt: z.date(),
	shippingAddress: mailingAddressZ.optional(),
	shippingDiscountAllocations: z.array(discountAllocationZ),
	statusUrl: z.string().url(),
	subtotalPrice: moneyZ.optional(),
	successfulFulfillments: orderFulfillmentZ.optional(),
	totalPrice: moneyZ,
	totalRefunded: moneyZ,
	totalShippingPrice: moneyZ,
	totalTax: moneyZ.optional()
});
export type shopifyOrderZ = z.infer<typeof shopifyOrderZ>;

export const orderConnectionZ = shopifyConnectionZ(shopifyOrderZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true,
	totalCount: true
});
export type OrderConnectionZ = z.infer<typeof orderConnectionZ>;

export const checkoutLineItemZ = shopifyNodeZ.extend({
	customAttributes: z.array(shopifyAttributeZ),
	discountAllocations: z.array(discountAllocationZ),
	quantity: z.number().int(),
	title: z.string(),
	unitPrice: moneyZ.optional(),
	variant: productVariantZ.optional()
});
export type CheckoutLineItemZ = z.infer<typeof checkoutLineItemZ>;

export const checkoutLineItemConnectionZ = shopifyConnectionZ(checkoutLineItemZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type CheckoutLineItemConnectionZ = z.infer<typeof checkoutLineItemConnectionZ>;

export const appliedGiftCardZ = shopifyNodeZ.extend({
	amountUsed: moneyZ,
	balance: moneyZ,
	lastCharacters: z.string(),
	presentmentAmountUsed: moneyZ
});
export type AppliedGiftCardZ = z.infer<typeof appliedGiftCardZ>;

export const shippingRateZ = z.object({
	handle: z.string(),
	price: moneyZ,
	title: z.string()
});
export type ShippingRateZ = z.infer<typeof shippingRateZ>;

export const shopifyCheckoutZ = shopifyNodeZ.extend({
	appliedGiftCards: z.array(appliedGiftCardZ),
	availableShippingRates: z
		.object({
			ready: z.boolean(),
			shippingRates: z.array(shippingRateZ)
		})
		.optional(),
	buyerIdentity: z.object({ countryCode: countryCodeZ }),
	completedAt: z.date().optional(),
	createdAt: z.date(),
	currencyCode: currencyCodeZ,
	customAttributes: z.array(shopifyAttributeZ),
	discountApplications: discountApplicationConnectionZ,
	email: z.string().email().optional(),
	lineItems: checkoutLineItemConnectionZ,
	lineItemsSubtotalPrice: moneyZ,
	note: z.string().optional(),
	order: shopifyOrderZ,
	orderStatusUrl: z.string().url().optional(),
	paymentDue: moneyZ,
	ready: z.boolean(),
	requiresShipping: z.boolean(),
	shippingAddress: mailingAddressZ.optional(),
	shippingDiscountAllocations: z.array(discountAllocationZ),
	shippingLine: shippingRateZ.optional(),
	subtotalPrice: moneyZ,
	taxExempt: z.boolean(),
	taxesIncluded: z.boolean(),
	totalDuties: moneyZ.optional(),
	totalPrice: moneyZ,
	totalTax: moneyZ,
	updatedAt: z.date(),
	webUrl: z.string().url()
});
export type ShopifyCheckoutZ = z.infer<typeof shopifyCheckoutZ>;

export const customerZ = shopifyNodeZ.merge(hasMetafieldsZ).extend({
	acceptsMarketing: z.boolean(),
	addresses: mailingAddressConnectionZ,
	createdAt: z.date(),
	defaultAddress: mailingAddressZ.optional(),
	discountApplications: discountApplicationConnectionZ,
	displayName: z.string(),
	email: z.string().email().optional(),
	firstName: z.string().optional(),
	lastIncompleteCheckout: shopifyCheckoutZ.optional(),
	lastName: z.string().optional(),
	numberOfOrders: z.number().int().min(0),
	orders: orderConnectionZ,
	phone: z.string().optional(),
	tags: z.array(z.string()),
	updatedAt: z.date()
});
export type CustomerZ = z.infer<typeof customerZ>;

export const cartBuyerIdentityZ = z.object({
	countryCode: countryCodeZ.optional(),
	customer: customerZ.optional(),
	deliveryAddressPreferences: z.array(mailingAddressZ),
	email: z.string().optional(),
	phone: z.string().optional(),
	walletPreferences: z.array(z.string())
});

// export const checkoutZ = shopifyNodeZ.extend({
//   completedAt: z.date(),
// });

export const cartLineCostZ = z.object({
	amountPerQuantity: moneyZ,
	compareAtAmountPerQuantity: moneyZ.optional(),
	subtotalAmount: moneyZ,
	totalAmount: moneyZ
});
export type CartLineCostZ = z.infer<typeof cartLineCostZ>;

export const cartDiscountAllocationZ = z.object({
	discountedAmount: moneyZ
});
export type CartDiscountAllocationZ = z.infer<typeof cartDiscountAllocationZ>;

export const cartDiscountCodeZ = z.object({
	applicable: z.boolean(),
	code: z.string()
});

export const baseCartLineZ = shopifyNodeZ.extend({
	attribute: shopifyAttributeZ.optional(),
	attributes: z.array(shopifyAttributeZ),
	cost: cartLineCostZ,
	discountAllocations: z.array(cartDiscountAllocationZ),
	merchandise: productVariantZ,
	quantity: z.number().int(),
	sellingPlanAllocation: sellingPlanAllocationZ.optional()
});
export type BaseCartLineZ = z.infer<typeof baseCartLineZ>;

export const baseCartLineConnectionZ = shopifyConnectionZ(baseCartLineZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type BaseCartLineConnectionZ = z.infer<typeof baseCartLineConnectionZ>;

export const cartCostZ = z.object({
	checkoutChargeAmount: moneyZ,
	subtotalAmount: moneyZ,
	subtotalAmountEstimated: z.boolean(),
	totalAmount: moneyZ,
	totalAmountEstimated: z.boolean(),
	totalDutyAmount: moneyZ.optional(),
	totalDutyAmountEstimated: z.boolean(),
	totalTaxAmount: moneyZ.optional(),
	totalTaxAmountEstimated: z.boolean()
});
export type CartCostZ = z.infer<typeof cartCostZ>;

export const deliveryMethodTypeZ = z.nativeEnum(DeliveryMethodType);

export const cartDeliveryOptionZ = z.object({
	code: z.string().optional(),
	deliveryMethodType: deliveryMethodTypeZ,
	description: z.string().optional(),
	estimatedCost: moneyZ,
	handle: z.string(),
	title: z.string().optional()
});
export type CartDeliveryOptionZ = z.infer<typeof cartDeliveryOptionZ>;

export const cartDeliveryGroupZ = shopifyNodeZ.extend({
	cartLines: baseCartLineConnectionZ,
	deliveryAddress: mailingAddressZ,
	deliveryOptions: z.array(cartDeliveryOptionZ),
	selectedDeliveryOption: cartDeliveryOptionZ.optional()
});
export type CartDeliveryGroup = z.infer<typeof cartDeliveryGroupConnectionZ>;

export const cartDeliveryGroupConnectionZ = shopifyConnectionZ(cartDeliveryGroupZ).pick({
	edges: true,
	nodes: true,
	pageInfo: true
});
export type CartDeliveryGroupConnectionZ = z.infer<typeof cartDeliveryGroupConnectionZ>;

export const cartZ = shopifyNodeZ
	.extend({
		attribute: shopifyAttributeZ.optional(),
		attributes: z.array(shopifyAttributeZ),
		buyerIdentity: cartBuyerIdentityZ,
		checkoutUrl: z.string().url(),
		cost: cartCostZ,
		createdAt: z.date(),
		deliveryGroups: cartDeliveryGroupConnectionZ,
		discountAllocations: z.array(cartDiscountAllocationZ),
		discountCodes: z.array(cartDiscountCodeZ),
		lines: baseCartLineConnectionZ,
		note: z.string().optional(),
		totalQuantity: z.number().int(),
		updatedAt: z.date()
	})
	.merge(hasMetafieldsZ);
export type CartZ = z.infer<typeof cartZ>;

export const cartErrorCodeZ = z.nativeEnum(CartErrorCode);

export const cartMutationResponseZ = z.promise(
	z.object({
		cart: cartZ.partial(),
		userErrors: z.array(
			displayableErrorZ.extend({
				code: cartErrorCodeZ.optional()
			})
		)
	})
);
export type CartMutationResponseZ = z.infer<typeof cartMutationResponseZ>;

export const productResponseZ = z.promise(
	z.object({
		product: productZ.partial()
	})
);
export type ProductResponseZ = z.infer<typeof productResponseZ>;

export const productListResponseZ = z.promise(
	z.object({
		products: productConnectionZ.partial()
	})
);
export type ProductListResponseZ = z.infer<typeof productListResponseZ>;
