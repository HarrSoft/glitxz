<script lang="ts">
	import NavMainTopic from './NavMainTopic.component.svelte';
	let navHidden: Boolean = true;

	$: toggleHidden = () => {
		navHidden = !navHidden;
	}

</script>

<nav class="px-10 drop-shadow-md border fixed w-full top-0 bg-white flex items-center content-end h-[var(--nav-height)]">
	<div class=" p-2 pt-3">
		<img src="/LogoBlack.png" class=" max-h-12" alt="The Glitxz logo, the word glitxz with typographic alterations that exude sharpness and creativity" srcset="">
	</div>
	<div class="flex w-full">
		<div class="flex w-full justify-end" style="{navHidden ? "" : "visibility: hidden; pointer-events: none;"}">
			<NavMainTopic href="/" activeColor="black">Home</NavMainTopic>
			<NavMainTopic href="/art" activeColor="primaryRed">Art</NavMainTopic>
			<NavMainTopic href="/fashion" activeColor="primaryBlue">Fashion</NavMainTopic>
			<NavMainTopic href="/gaming" activeColor="primaryGreen">Gaming</NavMainTopic>
			<NavMainTopic href="/e-shop">E-Shop</NavMainTopic>
		</div>
	</div>
	<div class="fixed cursor-pointer h-full flex flex-col justify-center top-0 right-5" on:click={() => {toggleHidden()}} on:keypress={() => {toggleHidden()}}>
		<div class="  border-black border-2 p-2 flex flex-col justify-center rounded-md">
			<div class="h-[3px] w-[30px] rounded-sm bg-black my-[4px] duration-300 origin-center" style="{navHidden ? "":"transform: rotate(45deg) translate(10px, 30px);"}"></div>
			<div class="h-[3px] w-[30px] rounded-sm bg-black my-[4px] duration-300 opacity-100" style="{navHidden ? "":"opacity:0;"}"></div>
			<div class="h-[3px] w-[30px] rounded-sm bg-black my-[4px] duration-300 origin-center" style="{navHidden ? "":"transform: rotate(-45deg) translate(10px, -30px);"}"></div>
		</div>
		</div>
</nav>
