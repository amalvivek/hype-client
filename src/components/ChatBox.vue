<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import { nextTick, ref } from 'vue'
import ChatFeed from '@/components/ChatFeed.vue'
import { From, type Message } from '@/shared.types'

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
    .finally(() => {
      disableChat.value = false
      key.value += 1
    })
}
</script>

<template>
  <div
    class="flex flex-col h-full justify-end bg-inherit rounded-t-md border border-outline before:backdrop-blur-sm p-2 overflow-hidden"
  >
    <ChatFeed ref="chatFeed" :messages="chat" />
    <TextField v-model="input" :key="key" :disabled="disableChat" @submit="sendMessage" />
  </div>
</template>

<style scoped></style>
