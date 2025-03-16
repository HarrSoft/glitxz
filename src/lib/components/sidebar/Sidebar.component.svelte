<script lang="ts">
	import close_img1 from '$lib/assets/close1.png';
</script>

<aside class="flex w-1/6 flex-col p-6">
	<nav class="flex flex-grow flex-col space-y-4">
		<a href="/" class="flex items-center text-center align-middle text-4xl font-bold text-white">
			HOME
			<img src={close_img1} alt="close" class="pl-4" />
		</a>
		<a href="/" class="text-4xl font-bold text-red-500">ART</a>
		<a href="/" class="text-4xl font-bold text-green-500">GAMING</a>
		<a href="/" class="text-4xl font-bold text-blue-500">FASHION</a>
		<a href="/" class="text-4xl font-bold text-white">E-SHOP</a>
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
