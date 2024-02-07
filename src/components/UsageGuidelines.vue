<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col sm:flex-row px-4 sm:px-14 opacity-0 scroll-in-out items-center justify-around gap-4"
  >
    <div>
      <div class="flex justify-between items-center gap-4">
        <div class="border-4 rounded-full min-h-20 h-20 min-w-20 w-20 p-4">
          <img src="@/assets/icons/chat.svg" alt="chat icon" class="brightness-0 invert" />
        </div>
        <div>
          <div class="text-2xl text-white font-bold">Chat with my AI agent</div>
          <div class="text-2xl text-white">to find answers to all your screening questions</div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center gap-4">
      <div class="border-4 rounded-full min-h-20 h-20 min-w-20 w-20 p-4">
        <img src="@/assets/icons/dragdrop.svg" alt="chat icon" class="brightness-0 invert" />
      </div>
      <div>
        <div class="text-2xl text-white font-bold">Drag and drop job ads</div>
        <div class="text-2xl text-white">to get more meaningful answers for you</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-out {
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}

.scroll-in-out {
  animation: fade-in-out linear forwards;
  animation-timeline: view(block);
  animation-range: cover;
}
</style>
