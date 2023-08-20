<script>
	import { page } from "$app/stores";

  export let activeColor = 'black';
  /**
	 * @type {string}
	 */
   export let href;
</script>
<div class="m-5 my-10">
  <a href={href} class:active="{$page.url.pathname.includes(href)}" class={`font-black text-2xl font-navigo text-${activeColor}`}>
      <slot/>
  </a>
</div>

<style>

</style>