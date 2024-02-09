<script setup lang="ts">
const props = defineProps({
  uploading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <Transition name="modal">
      <div
        v-if="props.uploading"
        class="animate-pulse flex bg-slate-300 text-slate-900 font-bold rounded-[1rem] w-[16rem] h-[2.5rem] fixed z-30 bottom-5 left-1/2 -translate-x-1/2 shadow-black shadow-2xl items-center justify-around"
      >
        Processing
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.modal-enter-active {
  transition: all 300ms ease;
}
.modal-leave-active {
  transition: all 200ms ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(-50%) translateY(150%);
  opacity: 0;
}
</style>
