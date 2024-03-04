<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
import { type PropType, ref } from 'vue'

const props = defineProps({
  scrollFunction: {
    type: Function as PropType<() => void>,
    required: true
  }
})

const uploading = defineModel('uploading', { default: false })

const store = useChatStore()
const handleDragOver = (event: DragEvent) => {
  updateCursor.value = true
  const allowedTypes = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
  const hasAllowedType = Array.from(event.dataTransfer?.items || []).some((item) => {
    allowedTypes.includes(item.type)
  })
  if (!hasAllowedType) {
    event.preventDefault()
  }
}

const handleDrop = (event: DragEvent) => {
  updateCursor.value = false
  event.preventDefault()
  const files = event.dataTransfer?.files
  if (files) {
    uploadFiles(files)
  }
}

const uploadFiles = async (files: FileList) => {
  uploading.value = true
  const formData = new FormData()
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i])
  }

  store
    .makeRequest(
      import.meta.env.VITE_SERVER_BASE_URL + '/openai/upload',
      formData,
      props.scrollFunction
    )
    .catch(() => {
      console.log('upload error')
    })
    .finally(() => (uploading.value = false))
}
const updateCursor = ref<boolean>(false)
</script>

<template>
  <div
    @dragover="handleDragOver"
    @drop="handleDrop"
    @dragleave="updateCursor = false"
    :class="updateCursor ? 'drag-area' : ''"
    class="h-full w-full cursor-grab"
  />
</template>

<style scoped>
.drag-area {
  cursor: grabbing;
}
</style>
