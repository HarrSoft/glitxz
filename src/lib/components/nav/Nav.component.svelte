<script lang="ts">
	import NavMainTopic from './NavMainTopic.component.svelte';
	let navHidden: Boolean = true;

	$: toggleHidden = () => {
		navHidden = !navHidden;
	};
</script>

<nav
	class=" fixed right-0 top-0 z-50 flex translate-y-1/2 flex-col content-end items-center justify-center rounded-l-lg bg-white p-2 py-8 drop-shadow-md"
>
	<div class="flex w-full">
		<div
			class="flex w-full flex-col justify-end"
			style={navHidden ? '' : 'visibility: hidden; pointer-events: none;'}
		>
			<NavMainTopic href="/" activeColor="black">Home</NavMainTopic>
			<NavMainTopic href="/art" activeColor="primaryRed">Art</NavMainTopic>
			<NavMainTopic href="/fashion" activeColor="primaryBlue">Fashion</NavMainTopic>
			<NavMainTopic href="/gaming" activeColor="primaryGreen">Gaming</NavMainTopic>
			<NavMainTopic href="/e-shop">E-Shop</NavMainTopic>
		</div>
	</div>
</nav>
