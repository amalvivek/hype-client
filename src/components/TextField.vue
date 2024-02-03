<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { isElementInViewport } from '@/utils'

const emit = defineEmits(['update:modelValue', 'submit'])
const props = defineProps({
  disabled: {
    type: Boolean,
    required: true
  }
})

const model = defineModel({ default: '' })
const placeholder = computed(() => (props.disabled ? 'Thinking...' : 'Ask my anything...'))

watch(model, (newValue) => {
  emit('update:modelValue', newValue)
  nextTick(() => {
    resize()
  })
})

const textarea = ref<HTMLTextAreaElement>(null as never)
let maxHeight: number
onMounted(() => {
  if (isElementInViewport(textarea.value)) textarea.value.focus()
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

const computedClass = computed(() => {
  if (props.disabled) {
    return 'cursor-not-allowed bg-grey-500 opacity-50 placeholder:opacity-90'
  }
  return ''
})
const computedIconInversion = computed(() => (props.disabled ? 0.3 : 1))
</script>

<template>
  <div>
    <div class="relative border-b border-outline px-2 pb-2 mx-2 mt-2 border-opacity-20" />
    <div
      class="relative border-b-2 flex items-center justify-between px-2 pb-2 gap-x-2 mx-2 mt-2"
      :class="disabled ? 'border-opacity-50 border-gray-500' : 'border-white'"
    >
      <textarea
        v-model="model"
        class="resize-none min-h-7 w-full max-w-full text-2xl bg-transparent text-white placeholder-gray-500 min-w-0 flex-shrink focus:outline-none"
        :class="computedClass"
        :placeholder="placeholder"
        rows="1"
        ref="textarea"
        :disabled="disabled"
        style="scrollbar-color: rgb(249, 122, 112, 0.5) transparent"
      />
      <img
        src="@/assets/icons/send.svg"
        class="send-icon w-6 h-full hover:scale-110"
        alt="Send Icon"
        @click="submit"
      />
    </div>
  </div>
</template>

<style scoped>
.send-icon {
  filter: brightness(0) invert(v-bind(computedIconInversion));
}
</style>
