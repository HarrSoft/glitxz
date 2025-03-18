<!-- /routes/gaming/+page.svelte -->
<script lang="ts">
	import ContentCard from '$lib/components/content/ContentCard.component.svelte';
	import GridLayout from '$lib/components/content/GridLayout.svelte';

	import img1 from '$lib/assets/Mask Group 1.png';
	import img2 from '$lib/assets/Mask Group 2.png';
	import img3 from '$lib/assets/Mask Group 3.png';
	import img4 from '$lib/assets/Mask Group 4.png';
	import img5 from '$lib/assets/Mask Group 5.png';

	const items = [
		{
			title: 'Jaden and Naru Team Up',
			image: img1,
			subtitle: 'Runway',
			area: 'left-top'
		},
		{
			title: "Jack Nick's Debut",
			image: img2,
			subtitle: 'Music',
			area: 'left-bottom'
		},
		{
			title: "Lami's Paintings",
			image: img3,
			subtitle: 'Painting',
			area: 'right-top'
		},
		{
			title: 'Artist as Exhibition',
			image: img4,
			subtitle: '',
			tags: ['Painting', 'Apparel'],
			area: 'right-middle'
		},
		{
			title: '',
			image: img5,
			subtitle: '',
			area: 'right-bottom'
		}
	];
</script>

<GridLayout {items}>
	<svelte:fragment slot="card" let:item>
		<ContentCard
			title={item.title}
			image={item.image}
			subtitle={item.subtitle || ''}
			tags={item.tags || []}
			aspectRatio="aspect-auto"
		/>
	</svelte:fragment>
</GridLayout>
