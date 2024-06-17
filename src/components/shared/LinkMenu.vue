<script setup>
defineProps({
  hasIcon: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <a :href="href" class="font-medium">
    <slot/>
    <Icon v-if="hasIcon" icon="carbon:chevron-down" class="inline size-4" />
  </a>
</template>
