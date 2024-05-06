<script setup>
import { ref } from 'vue';
import TheCameraRig from './TheCameraRig.vue';

const allAssetsLoaded = ref(false);

</script>

<template>
  <a-scene
      background="color: black;"
      :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `">

    <a-assets @loaded="allAssetsLoaded = true">
      <!-- <a-asset-item id="alp-terrain" src="/assets/alps.glb"></a-asset-item> -->
      <a-asset-item id="elevation" src="/assets/map.bin"></a-asset-item>
      <a-asset-item id="swiss-el" src="/assets/map2.bin"></a-asset-item>
      <img id="terrain" src="/assets/terrain.png">
    </a-assets>

    <TheCameraRig />
    <!-- <a-gltf-model src="#alp-terrain" position="0 -2000 0"></a-gltf-model> -->

    <a-entity rotation="0 180 0"
    scale="100 100 100"
    position="398 -1350 -130"
      terrain-model="dem: #elevation;
          map: /assets/terrain.png;
          planeWidth: 200;
          planeHeight: 200;
          segmentsWidth: 199;
          segmentsHeight: 199;
          zPosition: 20;
      	  wireframe: false">
    </a-entity>

    <!-- <a-entity
      terrain-model="dem: #swiss-el;
          planeWidth: 200;
          planeHeight: 200;
          segmentsWidth: 199;
          segmentsHeight: 199;
          zPosition: 20;
      	  wireframe: true">
    </a-entity> -->

    <!-- <a-entity
        terrain-model="map: url(data/noctis-3500-clip-textureRED-resized.jpg);
          dem: url(data/noctis-3500-clip-envi.bin);
          planeWidth: 346;
          planeHeight: 346;
          segmentsWidth: 199;
          segmentsHeight: 199;
          zPosition: 100"
      ></a-entity> -->

    <!-- Olivier Ertz's tiles: not working, throws error "tile selected but not loaded" -->
    <!-- Maybe the composite (cmpt) format is not supported ? -->
    <!-- <a-entity
        id="oe-tiles"
        loader-3dtiles="
         url: https://assets.ion.cesium.com/2534736/tileset.json; 
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNGY0Mjk4Ny1kYWMxLTQwZjMtOWM5YS0zZDY0Y2UyYTI5MTciLCJpZCI6MTk3MjAyLCJpYXQiOjE3MDg2MDY5MzN9.0zahHvP9QC7E_C0zRuIDDe_QTPEuUafXfgvRREVXAis;
        "
      ></a-entity> -->

    <!-- Cesium sandcastle asset example with CesiumJS default token (https://github.com/CesiumGS/cesium/blob/main/packages/engine/Source/Core/Ion.js#L6-L7) -->
    <!-- Works wit small assets (300-400 tiles)  -->
    <!-- <a-entity
        id="cesium-token-tiles"
        rotation="-90 0 0"
        position="2 10 9"
        loader-3dtiles="
         url: https://assets.ion.cesium.com/40866/tileset.json;
         showStats: true;
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYzAzYzE4NS0yZmJiLTQ5NzUtOWJlYS0zNjdkMzc2ODBmZDgiLCJpZCI6MjU5LCJpYXQiOjE3MTQ1NzE1MDN9.tIhlyfC7MHSWrQmoAqkvQdXMbg3igaC2HIbQp1HKCVM;
        "
      ></a-entity> -->

    <!-- Same asset as above but stored in personal Cesium Ion account (Meryl) + use of personal default token -->
    <!-- getting warning: "Cannot apply a model matrix to bounding volumes of type region. Tileset stays in original geo-coordinates."-->
    <!-- <a-entity
        id="personal-token-tiles"
        rotation="-90 0 0"
        loader-3dtiles="
         url: https://assets.ion.cesium.com/2562057/tileset.json;
         showStats: true;
         cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzM1YjhiMC0wZGI1LTRjZDctYjMxYi1mMTUyNDQwMDc3YzciLCJpZCI6MjEyNTgxLCJpYXQiOjE3MTQ2NDM3MjV9.TDBv19NG5ggTkGXKLWmqVcCuwodZLreeXiJdmFAqLCQ;
        "
      ></a-entity> -->

      <!-- 3D street lib example: working -->
      <!-- <a-entity
          id="cesium-ion-scan"
          position="-16.246 12.7 1.748"
          rotation="-90 0 -0.82"
          loader-3dtiles="url: https://assets.ion.cesium.com/1149944/tileset.json?v=3;
          showStats: true;
        cesiumIONToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YTYyYTIzNS0yODg0LTRhZWQtYjYxNS1iNWNhZGZhNmY3OTgiLCJpZCI6MTcwNjEsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE1OTcxNzZ9.R8mKo-NizcmOjCN_4dQyd5xO4X655CZZMXa9B5sECyU;"
          scale="1.33 1.33 1.33"
        ></a-entity> -->


      <!-- NY Times example, doesn't use Cesium: working -->
      <!-- <a-entity
        id="freeman-tiles"
        position="-1 10 0"
        rotation="-90 90 0"
        scale="2 2 2"
        loader-3dtiles="
         url: https://int.nyt.com/data/3dscenes/ONA360/TILESET/0731_FREEMAN_ALLEY_10M_A_36x8K__10K-PN_50P_DB/tileset_tileset.json; 
         maximumSSE: 48;
        "
      >
      </a-entity> -->
  </a-scene>
</template>