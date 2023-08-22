<script context="module">
	import { getProducts } from '$com/shopify/queries.svelte';
</script>

<script>
	import ProductList from '$com/shopify/ProductList.svelte';
	export let productsData;
</script>

<svelte:head>
	<title>Shoperoni</title>
</svelte:head>

<main>
	<ProductList products={productsData.products.edges} />
</main>
