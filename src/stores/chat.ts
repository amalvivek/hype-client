import { defineStore } from 'pinia'
import { From, type Message } from '@/shared.types'
import { ref } from 'vue'

export const useChatStore = defineStore('chat', () => {
  const chat = ref<Array<Message>>([])

  function addMessage(origin: From, content: string) {
    chat.value.push({ origin, content })
  }
  async function makeRequest(
    url: string,
    body: string | FormData,
    scrollToBottom: Function,
    headers?: HeadersInit,
    input?: string
  ): Promise<void> {
    if (input) addMessage(From.HUMAN, input)
    scrollToBottom()
    return fetch(url, {
      method: 'POST',
      headers,
      body
    })
      .then(async (response) => {
        const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader()
        let x = 0
        addMessage(From.AI, '')
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
          scrollToBottom()
        }
        console.log('DONE With ', x, 'chunks')
      })
      .catch((e) => {
        console.log(e)
        //     todo: error handling add system message formatting e
      })
  }
  return { chat, addMessage, makeRequest }
})
