<script lang="ts">
	import Sidebar from '$lib/components/sidebar/Sidebar.component.svelte';
	import { page } from '$app/stores';
	import '../app.css';

	// Current active page
	$: activePage = $page.url.pathname.split('/')[1] || 'home';

	// Dynamic indicator color based on active page
	$: indicatorColor =
		{
			home: 'white',
			art: 'red-500',
			gaming: 'green-500',
			fashion: 'blue-500',
			'e-shop': 'white'
		}[activePage] || 'white';
</script>

<div class="flex min-h-screen flex-col bg-black text-white md:flex-row">
	<Sidebar />

	<div class="relative flex flex-1 flex-col justify-stretch">
		<div class="absolute right-0 top-0 z-10 flex justify-end p-4">
			<div class="flex flex-col items-end">
				<div class="mb-2 text-xl">STASOZ</div>
				<div class="h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						class="h-full w-full"
					>
						<polygon points="12 2 22 20 2 20" />
					</svg>
				</div>
			</div>
		</div>

		<div class={`flex-1 ${activePage === 'home' ? '' : 'pt-12'}`}>
			<slot />
		</div>
	</div>
</div>
