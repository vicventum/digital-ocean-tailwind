<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  href: {
    type: String,
    default: ''
  }
})

const variants = {
  default: 'is-default',
  cta: 'is-cta',
  outlined: 'is-outlined',
  secondary: 'is-secondary',
  link: 'is-link'
}

const variantClasses = computed(() => variants[props.variant])
</script>

<template>
  <a
    v-if="href"
    class="mb-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition focus:outline-dotted focus:outline-2"
    :class="variantClasses"
    :href="href"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="mb-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition focus:outline-dotted focus:outline-2"
    :class="variantClasses"
  >
    <slot />
  </button>
</template>

<style scoped>
.is-default {
  @apply bg-do-blue-light text-white hover:bg-do-blue-medium active:bg-do-blue-dark;
}
.is-cta {
  @apply bg-do-blue-light text-xl text-white transition-all hover:bg-white hover:text-do-blue-dark active:bg-white;
}
.is-outlined {
  @apply border border-slate-300 text-do-blue-dark hover:bg-slate-50 focus:bg-slate-50;
}
.is-secondary {
  @apply border-slate-300 bg-slate-50 text-do-blue-dark hover:bg-slate-100 focus:bg-slate-100;
}
.is-link {
  @apply font-cascadia text-lg font-bold text-do-blue-light hover:text-do-blue-medium;
}
</style>
