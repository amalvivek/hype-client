<script setup lang="ts"></script>

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
      class="bg-black hide-overflow opacity-40 h-[150%] w-full row-start-1 col-start-1 row-span-1 col-span-1"
    />
    <div
      class="z-10 h-full w-full row-start-1 col-start-1 row-span-1 col-span-1 flex flex-col justify-center items-center pb-20"
    >
      <div class="animate-fade-out p-10 sm:p-28">
        <h1
          class="text-center italic sm:text-9xl font-bold text-white w-full leading-[1.15] text-xl"
        >
          SWIFT SCREEN
        </h1>
        <br />
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
  animation-range: exit -20vh;
}

.hide-overflow {
  clip-path: inset(0 0 50vh 0);
}

.parallax {
  opacity: 1;
  object-position: 50% 0;
  animation: slideUp linear;
  animation-timeline: view(block);
  animation-range: exit-crossing;
}

.pointer {
  opacity: 1;
  object-position: 50% 0;
  animation: slideUp linear;
  animation-timeline: view(block);
  animation-range: exit-crossing -80vh;
}

@keyframes slideUp {
  20% {
    opacity: 0.5;
  }
  60% {
    opacity: 0.1;
  }
  to {
    object-position: 50% -75vh;
    opacity: 0;
  }
}
</style>
