<script lang="ts">
	import type { PageData } from './$types';
	import { products, productQueryRaw } from '$stores';
	import NavMenu from '$lib/components/shopify/NavMenu.svelte';
	import CartHeader from '$lib/components/shopify/CartHeader.svelte';
	import limitedImg from '$lib/assets/Mask Group 4.png';
	import newReleaseImg from '$lib/assets/Image 10.png';
	import ProductSection from '$lib/components/shopify/ProductSection.svelte';

	export let data: PageData;

	products.set(data.products?.edges?.map((edge) => edge.node) ?? []);
	productQueryRaw.set(data.query);

	// Mock data for demonstrations - replace with your actual data
	const limitedEditionsData = [
		{ id: '1', title: 'NFT Raid Jacket', price: '$650', imageSrc: limitedImg },
		{ id: '2', title: 'NFT Raid Jacket', price: '$650', imageSrc: limitedImg },
		{ id: '3', title: 'NFT Raid Jacket', price: '$650', imageSrc: limitedImg },
		{ id: '4', title: 'NFT Raid Jacket', price: '$650', imageSrc: limitedImg }
	];

	const newReleasesData = [
		{ id: '5', title: '8-bit Sync', price: '$25', type: 'Music CD', imageSrc: newReleaseImg },
		{ id: '6', title: '8-bit Sync', price: '$25', type: 'Music CD', imageSrc: newReleaseImg }
	];

	const collectiblesData = [
		{ id: '7', title: '8-bit Sync', price: '$25', type: 'Music CD', imageSrc: newReleaseImg },
		{ id: '8', title: '8-bit Sync', price: '$25', type: 'Music CD', imageSrc: newReleaseImg }
	];
</script>

<svelte:head>
	<title>E-Shop</title>
</svelte:head>

<div class="min-h-screen bg-black text-white">
	<CartHeader />

	<main class="container mx-auto px-4">
		<div class="mb-4">
			<h1 class="py-4 text-4xl font-bold">Featured</h1>
			<NavMenu />
		</div>

		<div class="space-y-8">
			<ProductSection title="Limited Editions" products={limitedEditionsData} />
			<ProductSection title="New Releases" products={newReleasesData} />
			<ProductSection title="Collectibles" products={collectiblesData} />
		</div>
	</main>
</div>
