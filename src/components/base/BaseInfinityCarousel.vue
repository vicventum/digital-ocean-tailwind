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
  },
  stopOnHover: {
    type: Boolean,
    default: false
  },
  borders: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section
    class="group relative flex h-full overflow-hidden"
    :class="[gap]"
    :style="{ alignItems: align }"
  >
    <div
      v-for="n in 2"
      :key="n"
      class="animate-move-left-linear flex items-center"
      :class="[
        gap,
        { 'animate-move-right-linear': reverse },
        { 'group-hover:[animation-play-state:paused]': stopOnHover }
      ]"
      :style="{ animationDuration: `${time}s` }"
    >
      <slot />
    </div>

    <template v-if="borders">
      <div
        class="z-2 sm:w-50 absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-slate-50 to-transparent"
      />
      <div
        class="z-2 sm:w-50 absolute right-0 top-0 h-full w-5 rotate-180 transform bg-gradient-to-r from-slate-50 to-transparent"
      />
    </template>
  </section>
</template>

<style scoped>
/* @keyframes carousel-animation {
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
.animation--stop:hover .animation__child {
  animation-play-state: paused;
} */
</style>
