<script>
	import '../app.css';
	import Sidebarnav from '$com/nav/Sidebarnav.component.svelte';
</script>

<div class="flex h-screen max-h-screen">
	<Sidebarnav />

	<!-- main content -->
	<main class="flex w-[80vw] items-stretch">
		<slot />
	</main>

	<!-- logo and meta -->
	<div class="flex h-screen flex-col border p-2 pt-10">
		<h1>Glitxz</h1>
		<p>High impact art, fashion, and gaming.</p>
	</div>
</div>
