<script setup lang="ts">
import { onMounted, ref } from 'vue'

const container = ref<HTMLDivElement>(null as never)

const splineCanvas = ref<HTMLCanvasElement>(document.createElement('canvas'))
splineCanvas.value.style.width = '100%'
splineCanvas.value.style.height = '100%'

// const splineApp = new Application(splineCanvas.value)
// await splineApp.load('https://draft.spline.design/NZ189O6qI8Fj05Mj/scene.splinecode')
// splineApp.load('https://prod.spline.design/lDOBkYvHcnRaPUX1/scene.splinecode')

await new Promise((resolve, reject) => {
  resolve(null)
})

onMounted(() => {
  container.value.appendChild(splineCanvas.value)
})
</script>

<template>
  <div ref="container" class="h-full w-full"></div>
</template>

<style scoped></style>
