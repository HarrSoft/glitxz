<script lang="ts">
	import ProductCard from '$com/shopify/ProductCard.svelte';
	import Carousel from './Carousel.svelte';

	export let title: string;
	export let products: any[] = [];
</script>

<section class="mb-6">
	<h2 class="mb-4 text-2xl font-bold">{title}</h2>
	<Carousel>
		<div class="carousel-container grid grid-cols-4 gap-4">
			{#each products as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	</Carousel>
</section>
