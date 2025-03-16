<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let subtitle: string = '';
	export let image: string;
	export let aspectRatio: string = 'aspect-square';

	// Current active page to determine color scheme
	$: activePage = $page.url.pathname.split('/')[1] || 'home';

	// Dynamic color based on active page
	$: colorClass =
		{
			art: 'bg-red-500/80',
			gaming: 'bg-green-500/80',
			fashion: 'bg-blue-500/80',
			'e-shop': 'bg-white/10'
		}[activePage] || 'bg-white/10';
</script>

<div class="relative {aspectRatio} w-full overflow-hidden">
	<img src={image} alt={title} class="h-full w-full object-cover" />
	<div class="absolute bottom-0 left-0 right-0 p-4 {colorClass}">
		<h3 class="text-2xl font-bold text-white">{title}</h3>
		{#if subtitle}
			<p class="text-lg text-white">{subtitle}</p>
		{/if}
	</div>
</div>
