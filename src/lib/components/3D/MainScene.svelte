<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { loadSpline } from 'threlte-spline';
	import type { ObjectMap } from 'threlte-spline';
	import { Environment, OrbitControls } from '@threlte/extras';
	import type { GlbProperties } from '$lib/components/3D/3DTypes';
	import Logo from '$lib/components/3D/Logo.svelte';
	import Stars from './Stars.svelte';

	// window
	let canvasWidth: number;
	let canvasHeight: number;

	// spline
	let materials: any;
	let nodes: any;

	let scene: ObjectMap<GlbProperties>;
	loadSpline<GlbProperties>('https://prod.spline.design/PAVaGd0VKv7EVTEU/scene.splinecode').then(
		(_scene) => {
			scene = _scene;
			materials = scene.materials;
			nodes = scene.nodes;
		}
	);
</script>

<svelte:window bind:innerWidth={canvasWidth} bind:innerHeight={canvasHeight} />

{#if scene}
	<Canvas size={{ width: canvasWidth * 0.9914, height: canvasHeight }}>
		<T.Color attach="background" args={['white']} />
		<T.Scene name="Scene">
			<T.Group rotation={[Math.PI * 0.2, 0, 0]} scale={1.2} position={[1111, 200, -7000]}>
				<T.Mesh
					name="Sphere 9"
					geometry={nodes['Sphere 9'].geometry}
					material={materials.Structure}
					castShadow
					receiveShadow
					position={[6183.81, 5511.14, 50]}
					rotation={[0, 0, Math.PI]}
					scale={14.62}
				/>
				<T.Mesh
					name="Sphere 8"
					geometry={nodes['Sphere 8'].geometry}
					material={materials.Structure}
					castShadow
					receiveShadow
					position={[6183.81, 5511.14, 1383.19]}
					rotation={[0, 0, Math.PI]}
					scale={4.62}
				/>
				<T.Mesh
					name="Sphere 7"
					geometry={nodes['Sphere 7'].geometry}
					material={materials.Structure}
					castShadow
					receiveShadow
					position={[-7739.89, 5511.14, 1125.73]}
					rotation={[0, 0, Math.PI]}
					scale={8.58}
				/>
				<T.Mesh
					name="Sphere 6"
					geometry={nodes['Sphere 6'].geometry}
					material={materials.Structure}
					castShadow
					receiveShadow
					position={[-3638.18, 5511.14, 1125.73]}
					rotation={[0, 0, Math.PI]}
					scale={6.38}
				/>
				<T.Mesh
					name="Sphere 5"
					geometry={nodes['Sphere 5'].geometry}
					material={materials.Structure}
					castShadow
					receiveShadow
					position={[-3638.18, 8819.23, 1125.73]}
					rotation={[0, 0, Math.PI]}
					scale={50}
				/>
				<T.Mesh
					name="Sphere 4"
					geometry={nodes['Sphere 4'].geometry}
					material={materials['Sun 2']}
					castShadow
					receiveShadow
					position={[-6212.11, 8819.23, 1125.73]}
					rotation={[0, 0, Math.PI]}
					scale={20}
				/>
				<T.Mesh
					name="Sphere 3"
					geometry={nodes['Sphere 3'].geometry}
					material={materials['Sun 2']}
					castShadow
					receiveShadow
					position={[5915.93, 8819.23, 2497.17]}
					rotation={[0, 0, Math.PI]}
					scale={60}
				/>
				<T.Mesh
					name="Sphere 2"
					geometry={nodes['Sphere 2'].geometry}
					material={materials['Sun 2']}
					castShadow
					receiveShadow
					position={[5915.93, 1442.52, -188]}
					rotation={[0, 0, Math.PI]}
					scale={10}
				/>
				<T.Mesh
					name="Sphere"
					geometry={nodes.Sphere.geometry}
					material={materials['Sun 2']}
					castShadow
					receiveShadow
					position={[-4500.96, 1442.52, 3539.67]}
					rotation={[0, 0, Math.PI]}
					scale={3.37}
				/>
			</T.Group>
			<Logo />
			<T.DirectionalLight
				name="Directional Light"
				castShadow
				intensity={0.7}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-camera-near={-10000}
				shadow-camera-far={100000}
				shadow-camera-left={-1250}
				shadow-camera-right={1250}
				shadow-camera-top={1250}
				shadow-camera-bottom={-1250}
				position={[0, 3541.86, 0]}
			/>
			<T.PerspectiveCamera far={10000} near={-50000} makeDefault position={[2000, 60000, 3500]}>
				<T.DirectionalLight
					intensity={500.8}
					position={[2000, 60000, 3500]}
					castShadow
					shadow.bias={-0.0001}
				/>
				<OrbitControls
					target={[0, 0, 0]}
					enableZoom={false}
					enableDamping
					enablePan={false}
					maxPolarAngle={0.2}
					maxAzimuthAngle={0.6}
					minAzimuthAngle={0.21}
					minPolarAngle={0.1}
				/>
			</T.PerspectiveCamera>
			<T.HemisphereLight name="Default Ambient Light" intensity={1.23} color="#eaeaea" />
		</T.Scene>
		<Stars />
	</Canvas>
{/if}
