<script lang="ts">
	import { page } from '$app/stores';

	// Current active page
	$: activePage = $page.url.pathname.split('/')[1] || 'home';
</script>

<aside class="fixed flex h-full w-1/6 flex-col bg-black p-6 md:relative md:w-1/6">
	<nav class="flex flex-grow flex-col space-y-4">
		<a
			href="/"
			class="flex items-center text-center align-middle text-4xl font-bold text-white"
			class:active={activePage === 'home'}
		>
			HOME
			{#if activePage === 'home'}
				<span class="pl-4 text-white">✕</span>
			{/if}
		</a>
		<a href="/art" class="text-4xl font-bold text-red-500" class:active={activePage === 'art'}>
			ART
			{#if activePage === 'art'}
				<span class="pl-4 text-red-500">✕</span>
			{/if}
		</a>

		{#if activePage === 'art'}
			<div class="ml-6 flex flex-col space-y-2">
				<a href="/art/history" class="text-sm font-medium text-white">Art History</a>
				<a href="/art/activism" class="text-sm font-medium text-white">Art Activism</a>
				<a href="/art/artists" class="text-sm font-medium text-white">Artists</a>
				<a href="/art/new-media" class="text-sm font-medium text-white">New Media</a>
				<a href="/art/featured" class="text-sm font-medium text-white">Featured</a>
			</div>
		{/if}

		<a
			href="/gaming"
			class="text-4xl font-bold text-green-500"
			class:active={activePage === 'gaming'}
		>
			GAMING
			{#if activePage === 'gaming'}
				<span class="pl-4 text-green-500">✕</span>
			{/if}
		</a>

		{#if activePage === 'gaming'}
			<div class="ml-6 flex flex-col space-y-2">
				<a href="/gaming/why-we-love-gaming" class="text-sm font-medium text-white"
					>Why We Love Gaming</a
				>
				<a href="/gaming/our-games" class="text-sm font-medium text-white">Our Games</a>
				<a href="/gaming/tabletop" class="text-sm font-medium text-white">Tabletop</a>
				<a href="/gaming/events" class="text-sm font-medium text-white">Events</a>
				<a href="/gaming/lab" class="text-sm font-medium text-white">Lab</a>
			</div>
		{/if}

		<a
			href="/fashion"
			class="text-4xl font-bold text-blue-500"
			class:active={activePage === 'fashion'}
		>
			FASHION
			{#if activePage === 'fashion'}
				<span class="pl-4 text-blue-500">✕</span>
			{/if}
		</a>

		{#if activePage === 'fashion'}
			<div class="ml-6 flex flex-col space-y-2">
				<a href="/fashion/couture" class="text-sm font-medium text-white">Couture</a>
				<a href="/fashion/wearable-tech" class="text-sm font-medium text-white">Wearable Tech</a>
				<a href="/fashion/history" class="text-sm font-medium text-white">History</a>
				<a href="/fashion/collections" class="text-sm font-medium text-white">Collections</a>
				<a href="/fashion/statements" class="text-sm font-medium text-white">Statements</a>
			</div>
		{/if}

		<a href="/e-shop" class="text-4xl font-bold text-white" class:active={activePage === 'e-shop'}>
			E-SHOP
			{#if activePage === 'e-shop'}
				<span class="pl-4 text-white">✕</span>
			{/if}
		</a>

		{#if activePage === 'e-shop'}
			<div class="ml-6 flex flex-col space-y-2">
				<a href="/e-shop/featured" class="text-sm font-medium text-white">Featured</a>
				<a href="/e-shop/posters" class="text-sm font-medium text-white">Posters</a>
				<a href="/e-shop/event-tickets" class="text-sm font-medium text-white">Event Tickets</a>
				<a href="/e-shop/stickers" class="text-sm font-medium text-white">Stickers</a>
				<a href="/e-shop/new-media" class="text-sm font-medium text-white">New Media</a>
				<a href="/e-shop/gaming-accessories" class="text-sm font-medium text-white"
					>Gaming Accessories</a
				>
			</div>
		{/if}
	</nav>

	<div class="mt-auto pt-4">
		<div class="relative">
			<div class="absolute inset-y-0 left-0 flex items-center pl-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<input
				class="w-full border-b border-white bg-transparent pb-1 pl-10 focus:outline-none"
				type="search"
				placeholder=""
			/>
		</div>
	</div>
</aside>

<style>
	.active {
		font-weight: 700;
	}
</style>
