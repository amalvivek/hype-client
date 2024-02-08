<script setup lang="ts">
import { nextTick, ref } from 'vue'
import ChatFeed from '@/components/ChatFeed.vue'
import { From, type Message } from '@/shared.types'
import TextField from '@/components/TextField.vue'

const chat = ref<Array<Message>>([])
const input = ref<string>('')
const key = ref<number>(0)
const disableChat = ref<boolean>(false)
const chatFeed = ref<InstanceType<typeof ChatFeed>>(null as never)

const scrollToBottom = () =>
  nextTick(() => {
    chatFeed.value.scrollToBottom()
  })

const sendMessage = () => {
  if (input.value) {
    disableChat.value = true
    chat.value.push({
      origin: From.HUMAN,
      content: input.value
    })
    scrollToBottom()
    makeRequest(input.value)
    input.value = ''
  }
}

const makeRequest = async (input: string) => {
  fetch('http://localhost:3000/openai/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input
    })
  })
    .then(async (response) => {
      const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader()
      let x = 0
      chat.value.push({
        origin: From.AI,
        content: ''
      })
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const readResult = await reader?.read()
        if (!readResult) {
          break
        }
        const { value, done } = readResult
        if (done) break
        x += 1
        const message = chat.value[chat.value.length - 1]
        message.content += value
        scrollToBottom().then()
      }
      console.log('DONE With ', x, 'chunks')
    })
    .catch((e) => {
      console.log(e)
      //     todo: error handling add system message formatting e
    })
    .finally(() => {
      disableChat.value = false
      key.value += 1
    })
}
</script>

<template>
  <div class="my-1">
    <div
      class="chat-box flex flex-col h-full justify-end rounded-t-md border-outline border-2 bg-semitransparent backdrop-blur-xl p-2"
    >
      <ChatFeed ref="chatFeed" :messages="chat" />
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
