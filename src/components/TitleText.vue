<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  scrollTop: {
    type: Number,
    required: true
  }
})

const showDownChevron = computed(() => {
  return props.scrollTop < window.innerHeight / 3
})
</script>

<template>
  <div
    class="h-screen w-screen grid grid-rows-1 grid-cols-1 -z-10 bg-gradient-to-b from-white to-black"
  >
    <img
      src="@/assets/bg.jpg"
      class="block hide-overflow parallax row-start-1 col-start-1 row-span-1 col-span-1 h-[150%] w-full object-cover"
      alt="Image for parallax effect"
    />
    <div
      class="bg-black hide-overflow opacity-30 h-[150%] w-full row-start-1 col-start-1 row-span-1 col-span-1"
    />
    <div class="z-10 h-full w-full row-start-1 col-start-1 row-span-1 col-span-1">
      <div class="p-10 sm:p-28">
        <h1
          class="animate-fade-out text-start sm:text-7xl font-bold text-white w-[60%] leading-[1.15] text-xl"
        >
          INSTANT INSIGHT
        </h1>
        <br />
        <span class="animate-fade-out inline-block w-[60%] pt-10">
          <span class="sm:text-5xl font-bold text-white leading-[1.50] text-lg">Chat with my </span>
          <span class="sm:text-5xl font-bold italic text-white leading-[1.50] text-lg"
            >AI Career Ally</span
          >
          <span class="sm:text-5xl font-bold text-white leading-[1.50] text-lg">
            for a simplified screening experience!
          </span>
        </span>
      </div>
    </div>
    <div class="row-start-1 col-start-1 row-span-1 col-span-1 z-10">
      <div class="flex flex-col justify-end items-center h-full">
        <div class="h-16 w-16 pointer">
          <img
            ref="down"
            src="@/assets/icons/down.svg"
            alt="down icon for page toggle"
            class="icon z-30 hover:scale-[1.1]] animate-bounce"
            v-if="showDownChevron"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-fade-out {
  animation: fade-out linear forwards;
  animation-timeline: view(block);
  animation-range: exit -10vh;
}

.hide-overflow {
  clip-path: inset(0 0 50vh 0);
}

.parallax {
  opacity: 1;
  object-position: 50% 0vh;
  animation: slideUp linear;
  animation-timeline: view(block);
  animation-range: exit-crossing;
}

.pointer {
  opacity: 1;
  object-position: 50% 0vh;
  animation: slideUp linear;
  animation-timeline: view(block);
  animation-range: exit-crossing -80vh;
}

@keyframes slideUp {
  20% {
    opacity: 0.5;
  }
  60% {
    opacity: 0;
  }
  to {
    object-position: 50% -100vh;
    opacity: 0;
  }
}
</style>
