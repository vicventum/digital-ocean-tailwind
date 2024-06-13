<script setup>
import { defineProps } from 'vue'

defineProps({
  gap: {
    type: String,
    default: 'gap-6'
  },
  align: {
    type: String,
    default: 'center'
  },
  time: {
    type: String,
    default: '40'
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section
    class="animation relative flex h-full overflow-hidden"
    :class="[gap, { 'animation--reverse': reverse }]"
    :style="{ alignItems: align }"
  >
    <div
      v-for="n in 2"
      :key="n"
      class="animation__child flex items-center"
      :class="gap"
      :style="{ animationDuration: `${time}s` }"
    >
      <slot />
    </div>

    <div
      class="z-2 sm:w-50 absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-slate-50 to-transparent"
    />
    <div
      class="z-2 sm:w-50 absolute right-0 top-0 h-full w-5 rotate-180 transform bg-gradient-to-r from-slate-50 to-transparent"
    />
  </section>
</template>

<style scoped>
@keyframes carousel-animation {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animation .animation__child {
  animation: carousel-animation linear infinite;
}
.animation--reverse .animation__child {
  animation: carousel-animation linear infinite reverse;
}
.animation:hover .animation__child {
  animation-play-state: paused;
}
</style>
