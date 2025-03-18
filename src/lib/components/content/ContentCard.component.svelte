<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let subtitle: string = '';
	export let image: string;
	export let tags: string[] = [];
	export let aspectRatio: string = 'aspect-auto';

	// Current active page to determine color scheme
	$: activePage = $page.url.pathname.split('/')[1] || 'home';

	// Dynamic gradient based on active page
	$: gradientClass =
		{
			art: 'from-red-600 from-red-600',
			gaming: 'from-green-600 to-transparent',
			fashion: 'from-blue-600 to-transparent',
			'e-shop': 'from-gray-800 to-transparent'
		}[activePage] || 'from-gray-800 to-transparent';
</script>

<div class="relative {aspectRatio} h-full w-full overflow-hidden">
	<img src={image} alt={title} class="h-full w-full object-cover" />

	<!-- Full overlay gradient -->
	<div class="absolute inset-0 bg-gradient-to-t {gradientClass} opacity-100" />

	<!-- Bottom text area with stronger gradient -->
	<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t p-4 {gradientClass}">
		<h3 class="text-2xl font-bold text-white">{title}</h3>
		{#if subtitle}
			<p class="text-lg text-white">{subtitle}</p>
		{/if}
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-2">
				{#each tags as tag}
					<span class="text-white">{tag}</span>
					{#if tag !== tags[tags.length - 1]}
						<span class="mx-1 text-white">•</span>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
