<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-w-screen min-h-screen">
    <RouterView />
  </div>
</template>

<style>
body {
  background: black;
  overflow: auto;
}
</style>
