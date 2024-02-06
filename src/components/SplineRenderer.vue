<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const container = ref<HTMLDivElement>(null as never)

const splineCanvas = ref<HTMLCanvasElement>(document.createElement('canvas'))
splineCanvas.value.style.width = '100%'
splineCanvas.value.style.height = '100%'

const splineApp = new Application(splineCanvas.value)
await splineApp.load('https://prod.spline.design/0CrcMR7vWF4saVJG/scene.splinecode')

// await new Promise((resolve, reject) => {
//   resolve(null)
// })

onMounted(() => {
  container.value.appendChild(splineCanvas.value)
})
</script>

<template>
  <div ref="container" class="h-full w-full"></div>
</template>

<style scoped></style>
