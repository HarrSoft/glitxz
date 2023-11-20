<script lang="ts">
	import type { BlogHandleZ } from '$z/shopifyPrimitives';
	import type { ArticleZ } from '$z/shopify';
	import ArticlePreview from '$com/shopify/ArticlePreview.svelte';
	import { getContext } from 'svelte';


	export let articles: Array<ArticleZ> = [];
	export let handle: BlogHandleZ;
	
	let speedX: number = 30;
	let move: number = 0;
	let position: number = 0;
	let duration:number = 350;
	let slideW:number;
	let windowW:number;
	let lefMove: boolean = true;
	let interval: ReturnType<typeof setTimeout>;
	let isScroll: boolean = false;
	
	$: setScroll = (isHovered:boolean) => {
		clearInterval(interval)
		isScroll = isHovered;
		interval = setInterval(() => {			
			if(isScroll){
				move += speedX
				console.log(slideW)
				if (move >= slideW*articles.length - (slideW*(windowW > 768 ? 2 : 1)) - 8 || move <= 0) {
					speedX = speedX * -1;
					lefMove = !lefMove;
					clearInterval(interval)
				}
			}
		}, 50)
		 
	}

	$: onresize = () => {
		position = 0;
		lefMove = true;
		speedX = Math.abs(speedX);
	}
		
	
</script>

<svelte:window on:resize={onresize} bind:innerWidth={windowW}></svelte:window>
{#if lefMove}
	<div 
		on:focus
		on:mouseover={() => {setScroll(true)}} 
		on:mouseleave={() => {setScroll(false)}}
		class=" select-none cursor-pointer z-10 fixed top-[45vh] right-5 text-white p-5 rounded-full border-2 border-white"
	>
	&#x2192; 
	</div>
{/if}
{#if !lefMove}
	<div
		on:focus
		on:mouseover={() => {setScroll(true)}} 
		on:mouseleave={() => {setScroll(false)}}
		class=" cursor-pointer z-10 fixed top-[45vh] left-5 text-white p-5 rounded-full border-2 border-white"
	> 
		&#8592; 
	</div>
{/if}
<div class="w-screen no-scrollbar scroll-smooth overflow-hidden">
	<div class="flex w-max"
		style:transform="translateX({`${-move}`}px)"
		style:transition="transform {duration}ms"
	>
			{#each articles as article (article.id)}
				<ArticlePreview  blogHandle={handle} {article} bind:slideWidth={slideW} />
			{:else}
				<p>No articles!</p>
			{/each}
	</div>
</div>
