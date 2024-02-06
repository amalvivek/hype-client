<script setup lang="ts">
import { From, type Message } from '@/shared.types'
import { computed, type PropType } from 'vue'

const props = defineProps({
  message: {
    type: Object as PropType<Message>,
    required: true
  }
})

const computedClass = computed(() => {
  if (props.message.origin === From.HUMAN) {
    return 'bg-gray-700 self-start rounded-bl-xl shadow-gray-700/70'
  }
  return 'bg-brain self-end rounded-br-xl shadow-pink-700/70'
})
</script>

<template>
  <div
    class="first:mt-auto mx-4 text-white rounded-t-xl px-4 py-1.5 w-fit max-w-[70%] min-h-fit text-wrap break-words shadow-[0_0_20px_5px]"
    :class="computedClass"
  >
    <p class="cursor-text w-fit max-w-full">
      {{ props.message.content }}
    </p>
  </div>
</template>

<style scoped></style>
