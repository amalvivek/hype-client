<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue'
import SplineRenderer from '@/components/SplineRenderer.vue'
import TitleText from '@/components/TitleText.vue'
import LoadingView from '@/views/LoadingView.vue'
</script>

<template>
  <Suspense>
    <main class="h-screen w-screen overflow-y-hidden">
      <TitleText />
      <div class="h-screen grid grid-rows-4 grid-cols-2">
        <div class="h-screen col-start-1 col-end-2 p-4 z-10 row-start-1 row-end-5">
          <ChatBox />
        </div>

        <div class="h-screen col-start-1 col-end-3 row-start-1 row-end-5">
          <SplineRenderer />
        </div>

        <div class="col-start-2 col-end-3 row-start-2 row-end-4 -z-10 mr-20">
          TODO: Drag and Drop zone
        </div>
      </div>
    </main>
    <template #fallback>
      <LoadingView />
    </template>
  </Suspense>
</template>

<style scoped></style>
