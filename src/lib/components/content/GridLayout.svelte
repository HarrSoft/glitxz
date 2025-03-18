<script lang="ts">
	export let items: Array<{
		title: string;
		subtitle?: string;
		image: string;
		area: string;
		tags?: string[];
	}>;
</script>

<div class="content-grid">
	{#each items as item}
		<div class="grid-item {item.area}">
			<slot name="card" {item} />
		</div>
	{/each}
</div>

<style>
	.content-grid {
		display: grid;
		grid-template-areas:
			'left-top right-top'
			'left-top right-middle'
			'left-bottom right-bottom';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 4px;
		height: 100vh;
		padding: 0;
		overflow: hidden;
	}

	.grid-item {
		position: relative;
		overflow: hidden;
	}

	.left-top {
		grid-area: left-top;
	}

	.left-bottom {
		grid-area: left-bottom;
	}

	.right-top {
		grid-area: right-top;
	}

	.right-middle {
		grid-area: right-middle;
	}

	.right-bottom {
		grid-area: right-bottom;
	}

	@media (max-width: 768px) {
		.content-grid {
			grid-template-areas:
				'left-top'
				'right-top'
				'right-middle'
				'left-bottom'
				'right-bottom';
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, auto);
		}
	}
</style>
