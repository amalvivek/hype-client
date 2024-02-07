<script setup lang="ts">
import TitleText from '@/components/TitleText.vue'
import SplineRenderer from '@/components/SplineRenderer.vue'
import { onMounted, ref } from 'vue'
import ChatBox from '@/components/ChatBox.vue'
import UsageGuidelines from '@/components/UsageGuidelines.vue'
import DragDropPointer from '@/components/DragDropPointer.vue'

const main = ref<HTMLElement>(null as never)
const scrollTop = ref<Number>(0)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})

const handleScroll = () => {
  scrollTop.value = main.value?.scrollTop
}
</script>

<template>
  <main ref="main" class="snap-y snap-mandatory h-[250vh] w-screen">
    <TitleText class="snap-start" :scroll-top="scrollTop" />
    <div class="snap-start grid grid-rows-10 grid-cols-2 h-full w-screen">
      <UsageGuidelines class="row-start-3 row-end-4 col-start-1 col-end-3" />
      <DragDropPointer class="row-start-5 row-end-6 col-start-2 col-end-3 snap-center" />
      <ChatBox class="col-start-1 col-end-2 p-4 row-start-7 row-end-11 z-10" />
      <SplineRenderer class="col-start-1 col-end-3 row-start-1 row-end-5 sticky top-0" />

      <div class="col-start-2 col-end-3 row-start-2 row-end-4 -z-10 mr-20">
        TODO: Drag and Drop zone
      </div>
      <div class="col-start-5 col-end-8" />
    </div>
  </main>
</template>

<style scoped></style>
