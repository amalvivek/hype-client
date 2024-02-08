<script setup lang="ts">
import { ref } from 'vue'

const uploadedFiles = ref<File[]>([])
const dragging = ref(false)

const handleDrop = (event: DragEvent) => {
  console.log('in handleDrop')
  event.preventDefault()
  dragging.value = false
  const files = event.dataTransfer?.files
  if (files) {
    console.log('there is a file')
    for (let i = 0; i < files.length; i++) {
      uploadedFiles.value.push(files[i])
    }
  }
}

const uploadFiles = async () => {
  const formData = new FormData()
  uploadedFiles.value.forEach((file) => {
    formData.append('files', file)
  })

  try {
    const response = await fetch('http://localhost:3000/openai/upload', {
      method: 'POST',
      body: formData
    })
    // Handle response as needed
    console.log('Upload successful:', response)
  } catch (error) {
    console.error('Error uploading files:', error)
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-full w-full">
    <div
      class="border-2 border-gray-300 border-dashed h-full p-10"
      @dragover.prevent
      @drop="handleDrop"
      @dragenter="dragging = true"
      @dragleave="dragging = false"
      :class="{ 'border-blue-500': dragging }"
    >
      <div v-if="!uploadedFiles.length">
        <p class="text-lg text-gray-500">Drag & drop files here, or click to select files</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(file, index) in uploadedFiles" :key="index" class="text-blue-500">
            {{ file.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
