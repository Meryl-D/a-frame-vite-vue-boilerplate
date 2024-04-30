<script setup>
import { ref } from 'vue';
import TheCameraRig from './TheCameraRig.vue';
import TheButtons from './TheButtons.vue';
const allAssetsLoaded = ref(false);

</script>

<template>
  <a-scene background="color: gray;" :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `">

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="saint-francois-model" src="/assets/st_francois_small.glb"></a-asset-item>
      <img id="sky" src="/assets/AdobeStock_365284108.jpeg">
    </a-assets>

    <TheCameraRig />

    <template v-if="allAssetsLoaded">
      <!-- Sky -->
      <a-sky src="#sky"></a-sky>

      <!-- Model -->
      <a-gltf-model src="#saint-francois-model" position="111 -17 0" rotation="0 -90 0" scale="4 4 4">
      </a-gltf-model>

      <!-- Navmesh -->
      <!-- Substract -->
      <!-- <a-plane class="navmesh-sub" color="blue" rotation="-90 -135 122" position="48 0 -25" height="450"
        width="650"></a-plane>
      <a-plane class="navmesh-hole" color="red" rotation="-90 78 0" position="-159 0.001 -99" height="200" width="300"</a-plane> -->
    </template>

    <!-- Add -->
    <a-plane class="navmesh-add" color="green" rotation="-90 -11 0" position="-28 0 -5" height="400"
        width="100" visible="false"></a-plane>

  </a-scene>
</template>