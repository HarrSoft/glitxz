<script lang="ts">
	const categories = ['Posters', 'Event Tickets', 'Stickers', 'Loose Media', 'Gaming Acc.'];
</script>

<div class="overflow-x-auto whitespace-nowrap border-b border-gray-700 pb-2">
	<div class="inline-flex space-x-4">
		{#each categories as category}
			<a
				href={`/e-shop/category/${category.toLowerCase().replace(' ', '-')}`}
				class="text-xs font-medium text-gray-300 hover:text-white"
			>
				{category}
			</a>
		{/each}
	</div>
</div>
