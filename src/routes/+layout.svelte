<script>
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.component.svelte';
</script>

<div class="flex flex-col justify-stretch">
	
	<Nav />
	<!-- main content -->
	<main class="h-[calc(100vh - var(--nav-height))] mt-[--nav-height]">
		<slot />
	</main>
	

</div>
