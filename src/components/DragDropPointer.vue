<script setup lang="ts"></script>

<template>
  <div class="flex flex-row justify-end m-10">
    <div
      class="flex flex-col gap-y-4 items-center justify-evenly scroll-in-out opacity-0 translate-y-32"
    >
      <div class="font-kalam font-light text-white text-3xl text-wrap w-24 text-center">
        Drag 'n' Drop on me!
      </div>
      <div class="h-24 w-24">
        <img src="@/assets/icons/here.svg" alt="here icon" class="brightness-0 invert" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-out {
  20% {
    opacity: 0;
    transform: translateY(0);
  }
  45% {
    opacity: 1;
  }
  60% {
    opacity: 0.1;
    transform: translateY(-8rem);
  }
  65% {
    opacity: 0;
    transform: translateY(-8rem);
  }
}

.scroll-in-out {
  animation: fade-in-out linear forwards;
  animation-timeline: view(block);
  animation-range: cover;
}
</style>
