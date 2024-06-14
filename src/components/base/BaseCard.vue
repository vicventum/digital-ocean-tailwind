<script setup>
defineProps({
  color: {
    type: String,
    default: 'bg-white'
  },
  padding: {
    type: String,
    default: 'p-5'
  }
})
</script>

<template>
  <article class="rounded-lg shadow-md" :class="[color, padding]">
    <slot />
  </article>
</template>
