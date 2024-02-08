<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
body {
  background: black;
  overflow: auto;
  background: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 48px 48px; /* Adjust the size of the grid cells as needed */
  background-repeat: repeat;
  background-color: black;
}
</style>
