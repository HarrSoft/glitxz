<script lang="ts">
	import { T } from '@threlte/core';
	import { loadSpline } from 'threlte-spline';
	import type { GlbCurves, GlbProperties } from '$lib/components/3D/3DTypes';

	let nodes: GlbCurves;

	loadSpline<GlbProperties>('https://prod.spline.design/sGwarJNiAd8xrNOa/scene.splinecode').then(
		(_scene) => {
			nodes = _scene.nodes;
		}
	);
</script>

{#if nodes}
	<T.Group
		name="Logo3D"
		position={[2110, 332.48, -1310]}
		rotation={[0, (Math.PI / 180) * 30, 0]}
		scale={5000}
	>
		<T.Mesh
			name="Curve"
			geometry={nodes.Curve.geometry}
			material={nodes.Curve.material}
			castShadow
			receiveShadow
			position={[-1.87, 0, 0.53]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve001"
			geometry={nodes.Curve001.geometry}
			material={nodes.Curve001.material}
			castShadow
			receiveShadow
			position={[-0.93, 0, 0.58]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve002"
			geometry={nodes.Curve002.geometry}
			material={nodes.Curve002.material}
			castShadow
			receiveShadow
			position={[-0.22, 0, 0.49]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve003"
			geometry={nodes.Curve003.geometry}
			material={nodes.Curve003.material}
			castShadow
			receiveShadow
			position={[0.63, 0, 0.28]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve004"
			geometry={nodes.Curve004.geometry}
			material={nodes.Curve004.material}
			castShadow
			receiveShadow
			position={[1.64, 0, 0.58]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve005"
			geometry={nodes.Curve005.geometry}
			material={nodes.Curve005.material}
			castShadow
			receiveShadow
			position={[2.76, 0, 0.46]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve006"
			geometry={nodes.Curve006.geometry}
			material={nodes.Curve006.material}
			castShadow
			receiveShadow
			position={[-0.58, 0, 2.12]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve007"
			geometry={nodes.Curve007.geometry}
			material={nodes.Curve007.material}
			castShadow
			receiveShadow
			position={[2.46, 0, -0.96]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve008"
			geometry={nodes.Curve008.geometry}
			material={nodes.Curve008.material}
			castShadow
			receiveShadow
			position={[2.09, 0, -0.87]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve009"
			geometry={nodes.Curve009.geometry}
			material={nodes.Curve009.material}
			castShadow
			receiveShadow
			position={[2.72, 0, -0.83]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve010"
			geometry={nodes.Curve010.geometry}
			material={nodes.Curve010.material}
			castShadow
			receiveShadow
			position={[-2.74, 0, -1.25]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve011"
			geometry={nodes.Curve011.geometry}
			material={nodes.Curve011.material}
			castShadow
			receiveShadow
			position={[2.56, 0, 1.84]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve012"
			geometry={nodes.Curve012.geometry}
			material={nodes.Curve012.material}
			castShadow
			receiveShadow
			position={[1.87, 0, 1.9]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve013"
			geometry={nodes.Curve013.geometry}
			material={nodes.Curve013.material}
			castShadow
			receiveShadow
			position={[1.87, 0, 1.9]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve014"
			geometry={nodes.Curve014.geometry}
			material={nodes.Curve014.material}
			castShadow
			receiveShadow
			position={[-2.51, 0, 1.21]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve015"
			geometry={nodes.Curve015.geometry}
			material={nodes.Curve015.material}
			castShadow
			receiveShadow
			position={[-0.16, 0, -1.64]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve016"
			geometry={nodes.Curve016.geometry}
			material={nodes.Curve016.material}
			castShadow
			receiveShadow
			position={[1.27, 0, -2.09]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve017"
			geometry={nodes.Curve017.geometry}
			material={nodes.Curve017.material}
			castShadow
			receiveShadow
			position={[0.04, 0, -1.17]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve018"
			geometry={nodes.Curve018.geometry}
			material={nodes.Curve018.material}
			castShadow
			receiveShadow
			position={[0.24, 0, -2.55]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve019"
			geometry={nodes.Curve019.geometry}
			material={nodes.Curve019.material}
			castShadow
			receiveShadow
			position={[1.45, 0, -2.34]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve020"
			geometry={nodes.Curve020.geometry}
			material={nodes.Curve020.material}
			castShadow
			receiveShadow
			position={[3.9, 0, 0]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve021"
			geometry={nodes.Curve021.geometry}
			material={nodes.Curve021.material}
			castShadow
			receiveShadow
			position={[-1.87, 0, 0.53]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve022"
			geometry={nodes.Curve022.geometry}
			material={nodes.Curve022.material}
			castShadow
			receiveShadow
			position={[-0.93, 0, 0.58]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve023"
			geometry={nodes.Curve023.geometry}
			material={nodes.Curve023.material}
			castShadow
			receiveShadow
			position={[-0.22, 0, 0.49]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve024"
			geometry={nodes.Curve024.geometry}
			material={nodes.Curve024.material}
			castShadow
			receiveShadow
			position={[0.63, 0, 0.28]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve025"
			geometry={nodes.Curve025.geometry}
			material={nodes.Curve025.material}
			castShadow
			receiveShadow
			position={[1.64, 0, 0.58]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve026"
			geometry={nodes.Curve026.geometry}
			material={nodes.Curve026.material}
			castShadow
			receiveShadow
			position={[2.76, 0, 0.46]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve027"
			geometry={nodes.Curve027.geometry}
			material={nodes.Curve027.material}
			castShadow
			receiveShadow
			position={[-0.58, 0, 2.12]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve028"
			geometry={nodes.Curve028.geometry}
			material={nodes.Curve028.material}
			castShadow
			receiveShadow
			position={[2.46, 0, -0.96]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve029"
			geometry={nodes.Curve029.geometry}
			material={nodes.Curve029.material}
			castShadow
			receiveShadow
			position={[2.09, 0, -0.87]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve030"
			geometry={nodes.Curve030.geometry}
			material={nodes.Curve030.material}
			castShadow
			receiveShadow
			position={[2.72, 0, -0.83]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve031"
			geometry={nodes.Curve031.geometry}
			material={nodes.Curve031.material}
			castShadow
			receiveShadow
			position={[-2.74, 0, -1.25]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve032"
			geometry={nodes.Curve032.geometry}
			material={nodes.Curve032.material}
			castShadow
			receiveShadow
			position={[2.56, 0, 1.84]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve033"
			geometry={nodes.Curve033.geometry}
			material={nodes.Curve033.material}
			castShadow
			receiveShadow
			position={[1.87, 0, 1.9]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve034"
			geometry={nodes.Curve034.geometry}
			material={nodes.Curve034.material}
			castShadow
			receiveShadow
			position={[1.87, 0, 1.9]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve035"
			geometry={nodes.Curve035.geometry}
			material={nodes.Curve035.material}
			castShadow
			receiveShadow
			position={[-2.51, 0, 1.21]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve036"
			geometry={nodes.Curve036.geometry}
			material={nodes.Curve036.material}
			castShadow
			receiveShadow
			position={[-0.16, 0, -1.64]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve037"
			geometry={nodes.Curve037.geometry}
			material={nodes.Curve037.material}
			castShadow
			receiveShadow
			position={[1.27, 0, -2.09]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve038"
			geometry={nodes.Curve038.geometry}
			material={nodes.Curve038.material}
			castShadow
			receiveShadow
			position={[0.04, 0, -1.17]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve039"
			geometry={nodes.Curve039.geometry}
			material={nodes.Curve039.material}
			castShadow
			receiveShadow
			position={[0.24, 0, -2.55]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve040"
			geometry={nodes.Curve040.geometry}
			material={nodes.Curve040.material}
			castShadow
			receiveShadow
			position={[1.45, 0, -2.34]}
			scale={57.7}
		/>
		<T.Mesh
			name="Curve041"
			geometry={nodes.Curve041.geometry}
			material={nodes.Curve041.material}
			castShadow
			receiveShadow
			position={[3.9, 0, 0]}
			scale={57.7}
		/>
	</T.Group>
{/if}
