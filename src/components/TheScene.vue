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
    `"
    >

    <a-assets @loaded="allAssetsLoaded = true">
    </a-assets>

    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <TheCameraRig />

  </a-scene>
</template>