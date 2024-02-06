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
  <div class="h-screen w-screen grid grid-rows-1 grid-cols-1 -z-10">
    <img
      src="@/assets/bg.jpg"
      class="image hide-overflow parallax row-start-1 col-start-1 row-span-1 col-span-1 h-[150%] w-full object-cover"
      alt="Image for parallax effect"
    />
    <div
      class="bg-black hide-overflow opacity-30 h-[150%] w-full row-start-1 col-start-1 row-span-1 col-span-1"
    />
    <div class="z-10 h-full w-full row-start-1 col-start-1 row-span-1 col-span-1">
      <div class="p-28">
        <h1
          class="animate-fade-out text-start text-7xl font-bold text-white w-[60%] leading-[1.15]"
        >
          INSTANT INSIGHT
        </h1>
        <br />
        <span class="animate-fade-out inline-block w-[60%] pt-10">
          <span class="text-5xl font-bold text-white leading-[1.50]">Chat with my </span>
          <span class="text-5xl font-bold italic text-white leading-[1.50]">AI Career Ally</span>
          <span class="text-5xl font-bold text-white leading-[1.50]">
            for a simplified screening experience!
          </span>
        </span>
      </div>
    </div>
    <div class="row-start-1 col-start-1 row-span-1 col-span-1 z-10">
      <div class="flex flex-col justify-end items-center h-full">
        <div class="h-16 w-16">
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
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-fade-out,
span,
h1 {
  animation: fade-in linear forwards;
  animation-timeline: view(block);
  animation-range: exit -10vh;
}

.image {
  display: block;
}

.hide-overflow {
  clip-path: inset(0 0 50vh 0);
}

.parallax {
  object-position: 50% -50vh;
  animation: slideUp linear;
  animation-timeline: view(block);
  animation-range: exit-crossing;
}

@keyframes translateUp {
  to {
    transform: translateY(2000px);
  }
}

@keyframes slideUp {
  to {
    object-position: 50% 150vh;
  }
}
</style>
