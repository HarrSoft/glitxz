<script lang="ts">
	export let product: {
		id: string;
		title: string;
		price: string;
		type?: string;
		imageSrc: string;
	};
</script>

<div class="product-card">
	<div class="mb-2">
		<img src={product.imageSrc} alt={product.title} class="aspect-square w-full object-cover" />
	</div>

	<div class="mb-1">
		<div class="text-xl font-bold">{product.price}</div>
	</div>

	<div class="mb-2">
		<div class="text-sm">{product.title}</div>
		{#if product.type}
			<div class="text-xs text-gray-400">{product.type}</div>
		{/if}
	</div>

	<button
		class="w-full border border-white bg-transparent py-1 text-xs text-white transition-colors hover:bg-white hover:text-black"
	>
		Add To Cart
	</button>
</div>
