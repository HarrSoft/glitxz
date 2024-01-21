<script lang="ts">
      import * as SC from 'svelte-cubed';
      import * as THREE from 'three';

      let canvasWidth: number;
      
      // three js 
      const sphere = new THREE.SphereGeometry(1, 32, 32);

      const material = new THREE.MeshPhysicalMaterial({ emissive: 0xffffdd });
        material.reflectivity = 0
        material.transmission = 1
        material.roughness = 0.2
        material.metalness = 0
        material.clearcoat = 0.3
        material.clearcoatRoughness = 0.25
        material.color = new THREE.Color(0xffffff)
        material.ior = 1.2
</script>

<svelte:window bind:outerWidth={canvasWidth}></svelte:window>
<div class="container">
  <SC.Canvas width={canvasWidth}  alpha={true} antialias>
    <SC.Mesh position={[0,0,0]} geometry={sphere} material={material}/>
    <SC.PerspectiveCamera/>
  </SC.Canvas>
</div>
<div class="p-10 bg-slate-200">
  <section class=" h-[80vh] flex flex-col justify-center items-center">
    <h1 class="z-10 font-black text-2xl my-10 max-w-3/5">Glitxz</h1>
    <p class="z-10 text-center">
      A collective of artists, gamers, fashion scholars, and creators from diverse backgrounds
      who have come together to explore the intersection between Art, Fashion, and Gaming.
    </p>
  </section>

  <section>
    <h1 class="font-black text-2xl mt-16 my-10">Why?</h1>
    <p>
      By exploring these interconnected yet separate concepts, we hope to improve the day to day experience <br/> 
      of all conscious beings. We will build experiences that make a world that people are genuinely thrilled <br/>
      to live in. <br/><br/>
  
      Our genuine belief is that we can use these ideas as tools. <br/><br/>
    </p>
    <ul class="list-none">
      <li>
        Tools that resolve conflict by deepening understanding
      </li>
      <li>
        Tools that gamify economic productivity
      </li>
      <li>
        Tools that reinvent society itself
      </li>
      <li>
        Tools with limitless untapped potential 
      </li> 
    </ul>
  </section>
  
  <section>
    <h1 class="font-black text-2xl my-16">What we mean when we say those words.</h1>
    <div class="flex md:flex-row flex-col w-full justify-between">
      <div>
        <h1 class="font-black text-2xl pt-5 md:pt-0">Art.</h1>
        <p>Art is a experience captured crystalized and shared</p>
      </div>
      <div>
        <h1 class="font-black text-2xl md:pt-0 pt-5">Fashion.</h1>
        <p>Fashion is how we share with the world how we experience ourselves</p>
      </div>
      <div>
        <h1 class="font-black text-2xl md:pt-0 pt-5">Gaming.</h1>
        <p>Games are curated structured  interactive experiences</p>
      </div>
    </div>
  </section>
</div>

<style>
	.container {
		position: absolute;
		background: rgb(58, 63, 126);
		width: 100%;
		height: 100%;
		top: 0;
	}

</style>
