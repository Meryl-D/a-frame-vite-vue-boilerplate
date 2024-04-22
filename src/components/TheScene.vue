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
    `"
    >

    <a-assets @loaded="allAssetsLoaded = true">
    </a-assets>

    <TheCameraRig />

  </a-scene>
</template>