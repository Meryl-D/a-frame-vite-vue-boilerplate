<script setup>
import { ref } from 'vue';
import TheCameraRig from './TheCameraRig.vue';
import TheButtons from './TheButtons.vue';

const allAssetsLoaded = ref(false);

</script>

<template>
  <a-scene
      background="color: gray;"
      :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `">

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="elevator-model" src="/assets/elevator_-_low_poly_animated.glb"></a-asset-item>
      <img id="metal-texture" src="/assets/metal.jpg">
    </a-assets>

    <TheCameraRig />
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
      <template v-if="allAssetsLoaded">
        <a-gltf-model src="#elevator-model" rotation="0 180 0" scale="0.8 0.8 0.8">
          <TheButtons/>
        </a-gltf-model>
      </template>
  </a-scene>
</template>