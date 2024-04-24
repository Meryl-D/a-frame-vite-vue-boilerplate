<script setup>
</script>

<template>
<a-box width=".2" height=".3" depth=".01" position="0 2 0" metalness=".8" src="#metal-texture">
    <a-cylinder v-for="i in 3" radius=".03" height=".02" color="red" rotation="90 0 0" :position="`0 ${i - 1} -.01`"></a-cylinder>
</a-box>
</template>

<style scoped>
</style>