<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
import type { PropType } from 'vue'

const props = defineProps({
  scrollFunction: {
    type: Function as PropType<() => void>,
    required: true
  }
})

const store = useChatStore()
const handleDragOver = (event: DragEvent) => {
  console.log('handle drag over')
  const allowedTypes = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
  const hasAllowedType = Array.from(event.dataTransfer?.items || []).some((item) => {
    console.log(item.type)
    allowedTypes.includes(item.type)
  })
  console.log(hasAllowedType)
  if (!hasAllowedType) {
    console.log('preventing')
    event.preventDefault()
  }
}

const handleDrop = (event: DragEvent) => {
  console.log('in handleDrop')
  event.preventDefault()
  const files = event.dataTransfer?.files
  if (files) {
    console.log('there is a file')
    uploadFiles(files)
  }
}

const uploadFiles = async (files: FileList) => {
  const formData = new FormData()
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i])
  }

  store
    .makeRequest('http://localhost:3000/openai/upload', formData, props.scrollFunction)
    .then(() => {
      console.log('upload successful')
    })
    .catch(() => {
      console.log('upload error')
    })
}
</script>

<template>
  <div @dragover="handleDragOver" @drop="handleDrop" class="h-full w-full" />
</template>

<style scoped></style>
