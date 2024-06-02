<script lang="ts">
	import { page } from '$app/stores';

	export let activeColor = 'white';
	export let href = '/';
</script>

<div class="m-1 my-3 origin-top-right translate-y-10 rotate-45 p-3">
	<a {href} class:active={$page.url.pathname.includes(href)} class="">
		<slot />
	</a>
</div>

<style>
</style>
