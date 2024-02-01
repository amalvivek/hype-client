<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'
import ChatBox from '@/components/ChatBox.vue'

const splineCanvas = ref<HTMLCanvasElement>(null as never)
onMounted(() => {
  const splineApp = new Application(splineCanvas.value)
  splineApp.load('https://prod.spline.design/lDOBkYvHcnRaPUX1/scene.splinecode')
})
</script>

<template>
  <main class="overflow-hidden">
    <div class="h-screen grid grid-rows-1 grid-cols-2">
      <div class="h-screen col-start-1 col-end-2 p-4">
        <ChatBox />
      </div>

      <div class="h-screen col-start-1 col-end-3">
        <canvas ref="splineCanvas" />
      </div>
    </div>
  </main>
</template>
