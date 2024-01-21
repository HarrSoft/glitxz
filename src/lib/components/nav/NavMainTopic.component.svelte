<script lang="ts">
	import { page } from '$app/stores';

	export let activeColor = 'black';
	export let href = '/';
</script>

<div class="m-5 my-10">
	<a
		{href}
		class:active={$page.url.pathname.includes(href)}
		class={`text-xl font-black text-${activeColor}`}
	>
		<slot />
	</a>
</div>

<style>
</style>
