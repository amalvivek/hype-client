<script setup lang="ts">
import TitleText from '@/components/TitleText.vue'
import LoadingView from '@/views/LoadingView.vue'
import SplineRenderer from '@/components/SplineRenderer.vue'
import { onMounted, ref } from 'vue'
import ChatBox from '@/components/ChatBox.vue'

const main = ref<HTMLElement>(null as never)
const scrollTop = ref<Number>(0)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})

const handleScroll = () => {
  scrollTop.value = main.value.scrollTop
}
</script>

<template>
  <Suspense>
    <main ref="main" class="snap-y snap-mandatory h-screen w-screen">
      <TitleText class="snap-start" :scroll-top="scrollTop" />
      <div class="snap-start grid grid-rows-4 grid-cols-2 h-screen w-screen">
        <div class="col-start-1 col-end-2 p-4 row-start-1 row-end-5">
          <ChatBox />
        </div>

        <div class="col-start-1 col-end-3 row-start-1 row-end-5">
          <SplineRenderer />
        </div>

        <div class="col-start-2 col-end-3 row-start-2 row-end-4 -z-10 mr-20">
          TODO: Drag and Drop zone
        </div>
      </div>
    </main>
    <template #fallback>
      <LoadingView />
    </template>
  </Suspense>
</template>

<style scoped></style>
