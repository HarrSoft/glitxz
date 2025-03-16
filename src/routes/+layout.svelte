<script lang="ts">
	import Sidebar from '$lib/components/sidebar/Sidebar.component.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen bg-black pt-10 text-white">
	<Sidebar />
	<div class="flex flex-1 flex-col justify-stretch">
		<slot />
	</div>
</div>
