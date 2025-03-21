<script lang="ts">
	// Cart count from store or prop
	const itemCount = 2;
</script>

<div class="bg-black px-4 py-2 text-white">
	<div class="flex overflow-hidden rounded-full border border-white">
		<div class="flex flex-1 items-center justify-center border-r border-white px-4 py-2">
			<span class="mr-1 text-sm font-bold">{itemCount}</span>
			<span class="text-xs uppercase">ITEMS IN CART</span>
			<svg
				class="ml-2 h-5 w-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M4 4h16l-2 10H6L4 4z" />
				<path d="M7 17a2 2 0 100 4 2 2 0 000-4z" />
				<path d="M17 17a2 2 0 100 4 2 2 0 000-4z" />
			</svg>
		</div>
		<div class="flex items-center justify-center bg-white px-6 py-2 text-sm font-bold text-black">
			CHECKOUT
		</div>
		<div class="flex items-center justify-center px-4 py-2">
			<span class="mr-2 text-xs font-medium">MENU</span>
			<div class="flex w-4 flex-col justify-center space-y-1">
				<div class="h-0.5 w-4 bg-white" />
				<div class="h-0.5 w-4 bg-white" />
				<div class="h-0.5 w-4 bg-white" />
			</div>
		</div>
	</div>
</div>
