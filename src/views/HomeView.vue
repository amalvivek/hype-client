<script setup lang="ts">
import TitleText from '@/components/TitleText.vue'
import SplineRenderer from '@/components/SplineRenderer.vue'
import ChatBox from '@/components/ChatBox.vue'
import UsageGuidelines from '@/components/UsageGuidelines.vue'
import DragDropPointer from '@/components/DragDropPointer.vue'
import DragDropArea from '@/components/DragDropArea.vue'
import { nextTick, ref } from 'vue'
import AlertBanner from '@/components/AlertBanner.vue'

const chat = ref<InstanceType<typeof ChatBox>>(null as never)
const uploading = ref<boolean>()

const scrollToBottom = () =>
  nextTick(() => {
    chat.value.chatFeed.scrollToBottom()
  })
</script>

<template>
  <main ref="main" class="h-[250vh] w-screen">
    <TitleText />
    <div class="grid grid-rows-10 grid-cols-10 h-full w-screen">
      <UsageGuidelines class="row-start-3 row-end-4 col-start-1 col-end-11" />
      <DragDropPointer class="row-start-5 row-end-6 col-start-6 col-end-11" />
      <ChatBox ref="chat" class="col-start-1 col-end-6 p-4 row-start-7 row-end-11 z-10" />
      <SplineRenderer class="col-start-1 col-end-11 row-start-1 row-end-5 sticky top-0" />
      <DragDropArea
        :scrollFunction="scrollToBottom"
        v-model:uploading="uploading"
        class="col-start-1 col-end-11 row-start-3 row-end-7 z-30 sticky top-0 opacity-0 animate-drop-area"
      />
    </div>
    <AlertBanner :uploading="uploading" />
  </main>
</template>

<style scoped>
@keyframes followHead {
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(60%) translateX(25vw);
  }
  40% {
    transform: scale(45%) translateX(55vw);
  }
  to {
    transform: scale(45%) translateX(55vw);
  }
}

.animate-drop-area {
  animation: followHead linear forwards;
  animation-timeline: view(block);
  animation-range: contain;
}
</style>
