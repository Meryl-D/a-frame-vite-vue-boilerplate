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
    </a-assets>

    <TheCameraRig />

    <!-- Olivier Ertz's tiles: not working, throws error "tile selected but not loaded" -->
    <!-- Similar issue opened: https://github.com/nytimes/three-loader-3dtiles/issues/91 -->
    <a-entity
        id="oe-tiles"
        loader-3dtiles="
         url: https://assets.ion.cesium.com/2534736/tileset.json; 
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNGY0Mjk4Ny1kYWMxLTQwZjMtOWM5YS0zZDY0Y2UyYTI5MTciLCJpZCI6MTk3MjAyLCJpYXQiOjE3MDg2MDY5MzN9.0zahHvP9QC7E_C0zRuIDDe_QTPEuUafXfgvRREVXAis;
         cameraEl: #camera;
        "
      ></a-entity>

    <!-- Montreal points cloud: only shows points cloud but no tile is visible -->
    <!-- Might take a few seconds to load -->
    <!-- <a-entity
        id="montreal-tiles"
        rotation="-90 180 0"
        position="-300 -200 500"
        loader-3dtiles="
         url: https://assets.ion.cesium.com/28945/tileset.json; 
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YTY0NWRmNy1lY2U4LTRhNWMtYjRiYy1jZTdkOGE3ZDQzYTYiLCJpZCI6MjAwMzM2LCJpYXQiOjE3MDk4MjU1MDR9.qs9k0C_BjJBxCbuYshURSlmGRqsP9JfhVtzn3dOwGE0;
         cameraEl: #camera;
        "
      ></a-entity> -->


      <!-- NY Times example: working -->
      <!-- <a-entity
        id="freeman-tiles"
        position="-1 10 0"
        rotation="-90 90 0"
        scale="2 2 2"
        loader-3dtiles="
         url: https://int.nyt.com/data/3dscenes/ONA360/TILESET/0731_FREEMAN_ALLEY_10M_A_36x8K__10K-PN_50P_DB/tileset_tileset.json; 
         maximumSSE: 48;
         cameraEl: #camera;
        "
      >
      </a-entity> -->
  </a-scene>
</template>