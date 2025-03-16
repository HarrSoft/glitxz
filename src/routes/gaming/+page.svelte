<script lang="ts">
	import ContentCard from '$lib/components/content/ContentCard.component.svelte';

	import img1 from '$lib/assets/Mask Group 1.png';
	import img2 from '$lib/assets/Mask Group 2.png';
	import img3 from '$lib/assets/Mask Group 3.png';
	import img4 from '$lib/assets/Mask Group 4.png';
	const featuredGaming = [
		{
			title: 'Jaden and Naru Team Up',
			image: img1,
			subtitle: 'Runway'
		},
		{
			title: "Lami's Paintings",
			image: img2,
			subtitle: 'Painting'
		},
		{
			title: 'Artist as Exhibition',
			image: img3,
			subtitle: 'Painting • Apparel'
		},
		{
			title: "Jack Nick's Debut",
			image: img4,
			subtitle: 'Music'
		}
	];
</script>

<div class="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
	{#each featuredGaming as item, i}
		<ContentCard
			title={item.title}
			image={item.image}
			subtitle={item.subtitle}
			aspectRatio={i === 0 ? 'aspect-[3/2]' : 'aspect-square'}
		/>
	{/each}
</div>
