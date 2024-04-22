<script setup>
  import { ref } from 'vue';
  import TheCameraRig from './TheCameraRig.vue';

  const allAssetsLoaded = ref(false);
  
</script>

<template>
  <a-scene
  environment="preset: default"
    background="color: gray;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `"
    >

    <a-assets @loaded="allAssetsLoaded = true">
    </a-assets>

    <TheCameraRig />
    <!-- <a-entity
        id="freeman-tiles"
        loader-3dtiles="
         url: https://assets.cesium.com/2534736/tileset.json; 
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNGY0Mjk4Ny1kYWMxLTQwZjMtOWM5YS0zZDY0Y2UyYTI5MTciLCJpZCI6MTk3MjAyLCJpYXQiOjE3MDg2MDY5MzN9.0zahHvP9QC7E_C0zRuIDDe_QTPEuUafXfgvRREVXAis;
         cameraEl: #camera;
        "
      ></a-entity> -->
      <!--a-entity
        id="freeman-tiles"
        loader-3dtiles="
         url: https://assets.cesium.com/2275207/tileset.json; 
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YTY0NWRmNy1lY2U4LTRhNWMtYjRiYy1jZTdkOGE3ZDQzYTYiLCJpZCI6MjAwMzM2LCJpYXQiOjE3MDk4MjU1MDR9.qs9k0C_BjJBxCbuYshURSlmGRqsP9JfhVtzn3dOwGE0;
         cameraEl: #head;
        "
      ></a-entity-->
       <a-entity
        id="freeman-tiles"
        position="10 10 .3"
        rotation="-90 180 0"
        scale="2 2 2"
        loader-3dtiles="
         url: https://int.nyt.com/data/3dscenes/ONA360/TILESET/0731_FREEMAN_ALLEY_10M_A_36x8K__10K-PN_50P_DB/tileset_tileset.json; 
         maximumSSE: 48;
         cameraEl: #camera;
        "
      >
      </a-entity>
  </a-scene>
</template>