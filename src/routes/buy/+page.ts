/** @type {import('./$types').PageLoad} */

export async function load(ctx) {
	//switch to params usage
	const productType = ctx.page.query.get('type');
	const productsData = await getProducts();

	// console.log(pdata);
	if (productType) {
		products.update((items) => {
			const updated = items.filter((product) => product.node.productType === productType);

			return updated;
		});
	}

	return { props: { productsData } };
}
