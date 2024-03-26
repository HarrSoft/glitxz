<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { Instance, InstancedMesh, useTexture } from '@threlte/extras';
	import { Color, DoubleSide, Vector3 } from 'three';
	import type { Star } from './3DTypes';

	let STARS_COUNT = 350;
	let colors = ['#fcaa67', '#C75D59', '#ffffc7', '#8CC5C6', '#A5898C'];
	let stars = [] as Star[];

	const map = useTexture('/LogoBlack.png');
	function r(min: number, max: number) {
		let diff = Math.random() * (max - min);
		return min + diff;
	}

	function resetStar(star: any) {
		if (r(0, 1) > 0.8) {
			star.pos = new Vector3(r(-10, -30), r(-5, 5), r(6, -6));
			star.len = r(1.5, 15);
		} else {
			star.pos = new Vector3(r(-15, -45), r(-10.5, 1.5), r(30, -45));
			star.len = r(2.5, 20);
		}
		star.speed = r(19.5, 42);
		star.rad = r(0.04, 0.07);
		star.color = new Color(colors[Math.floor(Math.random() * colors.length)])
			.convertSRGBToLinear()
			.multiplyScalar(1.3);
		return star;
	}
	for (let i = 0; i < STARS_COUNT; i++) {
		let star = {
			pos: null,
			len: null,
			speed: null,
			color: null
		};
		stars.push(resetStar(star));
	}
	useFrame((_, delta) => {
		stars.forEach((star) => {
			star.pos.x += star.speed * delta;
			if (star.pos.x > 40) resetStar(star);
		});
		stars = stars;
	});
</script>

{#await map then value}
	<InstancedMesh
		limit={STARS_COUNT}
		range={STARS_COUNT}
		rotation={[0.8, 0.53, -0.12]}
		position={[-3490, 70000, 9000]}
		scale={100000}
	>
		<T.PlaneGeometry args={[1, 0.05]} />
		<T.MeshStandardMaterial
			side={DoubleSide}
			alphaMap={value}
			visible
			emissive={stars.color}
			emissiveIntensity={50}
			transparent
		/>
		<T.MeshBasicMaterial side={DoubleSide} alphaMap={value} transparent />
		{#each stars as star}
			<Instance
				position={[star.pos.x, star.pos.y, star.pos.z]}
				scale={[star.len, 1, 1]}
				color={star.color}
			/>
		{/each}
	</InstancedMesh>
{/await}
