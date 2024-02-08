<script setup lang="ts">
import TitleText from '@/components/TitleText.vue'
import SplineRenderer from '@/components/SplineRenderer.vue'
import ChatBox from '@/components/ChatBox.vue'
import UsageGuidelines from '@/components/UsageGuidelines.vue'
import DragDropPointer from '@/components/DragDropPointer.vue'
import DragDropArea from '@/components/DragDropArea.vue'
</script>

<template>
  <main ref="main" class="h-[250vh] w-screen">
    <TitleText />
    <div class="grid grid-rows-10 grid-cols-10 h-full w-screen">
      <UsageGuidelines class="row-start-3 row-end-4 col-start-1 col-end-11" />
      <DragDropPointer class="row-start-5 row-end-6 col-start-6 col-end-11" />
      <ChatBox class="col-start-1 col-end-6 p-4 row-start-7 row-end-11 z-10" />
      <SplineRenderer class="col-start-1 col-end-11 row-start-1 row-end-5 sticky top-0" />
      <DragDropArea class="col-start-6 col-end-11 row-start-8 row-end-10 z-20 opacity-0" />
    </div>
  </main>
</template>

<style scoped></style>
