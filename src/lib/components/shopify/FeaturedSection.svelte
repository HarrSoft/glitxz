<script lang="ts">
	import ProductCard from '$com/shopify/ProductCard.svelte';
	import Carousel from './Carousel.svelte';
	export let title: string;
	export let products: any[] = [];
</script>

<section>
	<h2 class="mb-4 text-2xl font-bold">{title}</h2>
	<Carousel>
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</Carousel>
</section>
