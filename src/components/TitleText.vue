<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen grid grid-rows-1 grid-cols-1 overflow-hidden">
    <img
      src="@/assets/bg.jpg"
      class="row-start-1 col-start-1 row-span-1 col-span-1 h-[150%] w-full object-cover object-center"
      alt="Image for parallax effect"
    />
    <div class="bg-black opacity-30 h-full w-full row-start-1 col-start-1 row-span-1 col-span-1" />
    <div class="z-10 h-full w-full row-start-1 col-start-1 row-span-1 col-span-1">
      <div class="p-28">
        <h1
          class="animate-fade-out text-start text-7xl font-bold text-white w-[60%] leading-[1.15]"
        >
          INSTANT INSIGHT
        </h1>
        <br />
        <span class="inline-block w-[60%] pt-10">
          <span class="animate-fade-out text-5xl font-bold text-white leading-[1.50]"
            >Chat with my
          </span>
          <span class="animate-fade-out text-5xl font-bold italic text-white leading-[1.50]"
            >AI Career Ally</span
          >
          <span class="animate-fade-out text-5xl font-bold text-white leading-[1.50]">
            for a simplified screening experience!
          </span>
        </span>
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
  animation:
    fade-in linear forwards,
    fade-out linear forwards;
  animation-timeline: view(block);
  animation-range: exit -50px;
}
</style>
