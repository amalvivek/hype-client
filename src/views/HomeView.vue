<script setup lang="ts">
import { ref } from 'vue'

const chat = ref<Array<String>>([])
const input = ref<String>('')

const sendMessage = () => {
  if (input.value) {
    chat.value.push(input.value)
    makeRequest(input.value)
    input.value = ''
  }
}

const makeRequest = async (input: String) => {
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
    while (true) {
      const readResult = await reader?.read()
      if (!readResult) {
        break
      }
      const { value, done } = readResult
      if (done) break
      x += 1
      console.log('[LOGGING]', value)
      result += value
      chat.value[chat.value.length - 1] = result
    }
    console.log('DONE With ', x, 'chunks')
  })
}
</script>

<template>
  <main>
    <div>
      <form @submit.prevent>
        <input type="text" v-model="input" />
        <button type="submit" @click="sendMessage">Send</button>
      </form>
      <ul>
        <li v-for="c in chat">
          {{ c }}
        </li>
      </ul>
    </div>
  </main>
</template>
