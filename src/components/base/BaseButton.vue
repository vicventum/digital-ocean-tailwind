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
  default: 'bg-do-blue-light text-white',
  secondary: 'bg-slate-50 border-slate-300 text-do-blue-dark border'
}

const variantClasses = computed(() => variants[props.variant])
</script>

<template>
  <a
    v-if="href"
    class="mb-2 me-2 rounded-lg px-6 py-2.5 text-sm font-semibold focus:outline-none focus:ring-4"
    :class="variantClasses"
    :href="href"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="mb-2 me-2 rounded-lg px-6 py-2.5 text-sm font-semibold focus:outline-none focus:ring-4"
    :class="variantClasses"
  >
    <slot />
  </button>
</template>
