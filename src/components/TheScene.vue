<script setup>
import { ref } from 'vue';
import TheCameraRig from './TheCameraRig.vue';

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
      <a-asset-item id="elevator" src="/path/to/elevator.gltf"></a-asset-item>
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
      
  </a-scene>
</template>