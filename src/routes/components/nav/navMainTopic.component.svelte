<script lang="ts">
	import { page } from "$app/stores";

  export let activeColor:string = 'black';
  export let href:string = '/';
</script>

<div class="m-5 my-10">
  <a href={href} class:active="{$page.url.pathname.includes(href)}" class={`font-black text-2xl text-${activeColor}`}>
      <slot/>
  </a>
</div>

<style>

</style>