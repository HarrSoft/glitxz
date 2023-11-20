<script>
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.component.svelte';
</script>

<div class="flex flex-col justify-stretch">
	
	<!-- main content -->
	<main class="h-[calc(100vh - var(--nav-height))] mb-[--nav-height]">
		<slot />
	</main>
	
	<Nav />

</div>
