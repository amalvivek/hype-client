<script setup lang="ts">
import { nextTick, ref } from 'vue'
import ChatFeed from '@/components/ChatFeed.vue'
import TextField from '@/components/TextField.vue'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()
const input = ref<string>('')
const key = ref<number>(0)
const disableChat = ref<boolean>(false)
const chatFeed = ref<InstanceType<typeof ChatFeed>>(null as never)

const scrollToBottom = () =>
  nextTick(() => {
    chatFeed.value.scrollToBottom()
  })

defineExpose({ chatFeed })
const sendMessage = () => {
  if (input.value) {
    disableChat.value = true
    store
      .makeRequest(
        import.meta.env.VITE_SERVER_BASE_URL + '/openai/',
        JSON.stringify({
          input: input.value
        }),
        chatFeed.value.scrollToBottom,
        {
          'Content-Type': 'application/json'
        },
        input.value
      )
      .finally(() => {
        disableChat.value = false
        key.value += 1
      })
    input.value = ''
  }
}
</script>

<template>
  <div class="my-1">
    <div
      class="chat-box flex flex-col h-full justify-end rounded-t-md border-outline border-2 bg-semitransparent backdrop-blur-xl p-2"
    >
      <ChatFeed ref="chatFeed" />
      <TextField
        v-model="input"
        :key="key"
        :disabled="disableChat"
        @submit="sendMessage"
        @resize="scrollToBottom"
      />
    </div>
  </div>
</template>

<style scoped>
.chat-box {
  transform: scaleY(0);
  animation: grow linear forwards;
  animation-timeline: view(block);
  animation-range: entry;
}
@keyframes grow {
  90% {
    transform: scaleY(0.8);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
