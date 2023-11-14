<script>
	import NavMainTopic from './NavMainTopic.component.svelte';
</script>

<nav class="px-10 border fixed w-full bottom-0 bg-white flex items-center content-end h-[var(--nav-height)]">
	<div class="self-start p-2 pt-3">
		<img src="/LogoBlack.png" class=" max-h-20" alt="" srcset="">
	</div>
	<div class="flex w-full justify-end">
		<NavMainTopic href="/" activeColor="black">Home</NavMainTopic>
		<NavMainTopic href="/art" activeColor="primaryRed">Art</NavMainTopic>
		<NavMainTopic href="/fashion" activeColor="primaryBlue">Fashion</NavMainTopic>
		<NavMainTopic href="/gaming" activeColor="primaryGreen">Gaming</NavMainTopic>
		<NavMainTopic href="/e-shop">E-Shop</NavMainTopic>
	</div>
</nav>
