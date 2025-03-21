<script lang="ts">
	import { onMount } from 'svelte';

	let currentPage = 0;
	let totalPages = 6; // For demonstration to match the image, adjust based on actual content

	function prev() {
		currentPage = Math.max(0, currentPage - 1);
	}

	function next() {
		currentPage = Math.min(totalPages - 1, currentPage + 1);
	}

	function goToPage(page: number) {
		currentPage = page;
	}
</script>

<div>
	<div class="overflow-hidden">
		<slot />
	</div>

	<div class="mb-6 mt-4 flex items-center justify-center">
		<button class="p-1 focus:outline-none" on:click={prev} aria-label="Previous page">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15 18L9 12L15 6"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>

		<div class="mx-4 flex space-x-2">
			{#each Array(totalPages) as _, i}
				<button
					class="h-2 w-2 rounded-full focus:outline-none {i === currentPage
						? 'bg-white'
						: 'bg-gray-600'}"
					on:click={() => goToPage(i)}
					aria-label="Go to page {i + 1}"
				/>
			{/each}
		</div>

		<button class="p-1 focus:outline-none" on:click={next} aria-label="Next page">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 18L15 12L9 6"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</div>
