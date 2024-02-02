<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import ChatBubble from '@/components/ChatBubble.vue'
import type { Message } from '@/shared.types'

const props = defineProps({
  messages: {
    type: Array as PropType<Message[]>,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-y-1 justify-end h-full overflow-y-scroll">
    <ChatBubble v-for="message in props.messages" :message="message" :key="message.content" />
  </div>
</template>

<style scoped></style>
