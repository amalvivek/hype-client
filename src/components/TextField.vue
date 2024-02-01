<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'submit'])

const model = defineModel({ default: '' })
const placeholder = 'Interview me...'

watch(model, (newValue) => {
  emit('update:modelValue', newValue)
  nextTick(() => {
    resize()
  })
})

const textarea = ref<HTMLTextAreaElement>(null as never)
let maxHeight: number
onMounted(() => {
  maxHeight = textarea.value.scrollHeight * 3
  textarea.value.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      /* empty */
    } else if (e.key === 'Enter') {
      e.preventDefault()
      submit()
    }
  })
})

const resize = () => {
  textarea.value!.style.height = '1px'
  textarea.value!.style.height = `${Math.min(textarea.value.scrollHeight, maxHeight)}px`
}

const submit = () => {
  emit('submit')
}
</script>

<template>
  <div class="relative border-b-2 border-white px-2 pb-2 mx-2 mt-2 border-opacity-40" />
  <div
    class="relative border-b-2 border-white flex items-center justify-between px-2 pb-2 gap-x-2 mx-2 mt-2"
  >
    <textarea
      v-model="model"
      class="resize-none min-h-7 w-full max-w-full text-xl bg-transparent font-bold text-white placeholder-gray-500 min-w-0 flex-shrink focus:outline-none"
      :placeholder="placeholder"
      autofocus
      rows="1"
      ref="textarea"
      style="scrollbar-color: rgb(249, 122, 112, 0.5) transparent"
    />
    <img
      src="@/assets/icons/send.svg"
      class="send-icon w-6 h-full hover:scale-110"
      alt="Send Icon"
      @click="submit"
    />
  </div>
</template>

<style scoped>
.send-icon {
  filter: brightness(0) invert(1);
}
</style>
