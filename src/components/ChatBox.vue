<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import { ref } from 'vue'
import ChatFeed from '@/components/ChatFeed.vue'

const chat = ref<Array<string>>([])
const input = ref<string>('')
let key = 1

const sendMessage = () => {
  if (input.value) {
    chat.value.push(input.value)
    makeRequest(input.value)
    key += 1
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
  }).then(async (response) => {
    const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader()
    let x = 0
    let result = ''
    chat.value.push(result)
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const readResult = await reader?.read()
      if (!readResult) {
        break
      }
      const { value, done } = readResult
      if (done) break
      x += 1
      result += value
      chat.value[chat.value.length - 1] = result
    }
    console.log('DONE With ', x, 'chunks')
  })
}
</script>

<template>
  <div class="flex flex-col h-full justify-end">
    <ChatFeed :messages="chat" />
    <TextField v-model="input" :key="key" @submit="sendMessage" />
  </div>
</template>

<style scoped></style>
