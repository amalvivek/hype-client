<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  messages: {
    type: Array as PropType<string[]>,
    required: true
  }
})
</script>

<template>
  <div>
    <div v-for="message in props.messages" :key="message" class="text-white">
      {{ message }}
    </div>
  </div>
</template>

<style scoped></style>
