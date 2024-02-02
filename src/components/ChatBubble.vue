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
    return 'text-right right-0 bg-gray-700 self-end rounded-bl-xl'
  }
  return 'text-left bg-brain self-start rounded-br-xl'
})
</script>

<template>
  <div
    class="text-white rounded-t-xl px-4 py-1.5 w-fit max-w-[70%] min-h-fit text-wrap break-words"
    :class="computedClass"
  >
    <p class="cursor-text w-fit max-w-full">
      {{ props.message.content }}
    </p>
  </div>
</template>

<style scoped></style>
