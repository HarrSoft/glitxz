<script lang="ts">
	export let title: string;
	export let price: number;
	export let image: string;
	export let type: string = 'Jacket';
</script>

<div class="flex flex-col">
	<div class="aspect-square w-full overflow-hidden bg-teal-100">
		<img src={image} alt={title} class="h-full w-full object-cover" />
	</div>
	<div class="mt-2">
		<div class="text-2xl font-bold">${price}</div>
		<div class="text-lg">{title}</div>
		<div class="text-sm text-gray-300">{type}</div>
		<button class="mt-2 border border-white px-4 py-2 text-white hover:bg-white hover:text-black">
			Add To Cart
		</button>
	</div>
</div>
