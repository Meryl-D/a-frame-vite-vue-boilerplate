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
      <a-plane class="navmesh" color="blue" rotation="-90 -135 122" position="48 0 -25" height="450"
        width="650" visible="false"></a-plane>
      <a-plane class="navmesh-hole" color="red" rotation="-90 78 0" position="-159 0.001 -99" height="200" width="300" visible="false"</a-plane>
    </template>

    <!-- <a-entity
        id="freeman-tiles"
        rotation="-90 180 0"
        position="-300 -200 500"
        loader-3dtiles="
         url: https://assets.ion.cesium.com/28945/tileset.json; 
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YTY0NWRmNy1lY2U4LTRhNWMtYjRiYy1jZTdkOGE3ZDQzYTYiLCJpZCI6MjAwMzM2LCJpYXQiOjE3MDk4MjU1MDR9.qs9k0C_BjJBxCbuYshURSlmGRqsP9JfhVtzn3dOwGE0;
         cameraEl: #head;
        "
      ></a-entity> -->

  </a-scene>
</template>