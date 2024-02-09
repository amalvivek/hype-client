<script setup lang="ts">
import { nextTick, ref } from 'vue'
import ChatBubble from '@/components/ChatBubble.vue'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()

const container = ref<HTMLDivElement>(null as never)
const scrollToBottom = () => {
  nextTick(() => {
    container.value.style.scrollBehavior = 'smooth'
    container.value.scrollTop = container.value.scrollHeight
    container.value.style.scrollBehavior = 'auto'
  })
}

defineExpose({ scrollToBottom })
</script>

<template>
  <div
    ref="container"
    class="flex flex-col gap-y-5 h-full overflow-y-auto pb-2"
    style="
      scrollbar-color: rgb(249, 122, 112, 0.5) transparent;
      direction: rtl;
      scrollbar-width: thin;
    "
  >
    <ChatBubble
      v-for="(message, i) in store.chat"
      :message="message"
      :key="`${i}-${message.content}`"
      class="first:mt-auto bubble"
      style="direction: ltr"
    />
  </div>
</template>

<style scoped>
@keyframes animate-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.bubble {
  animation:
    animate-in linear forwards,
    animate-out linear forwards;
  animation-timeline: view(block);
  animation-range: exit -50px;
}
</style>
