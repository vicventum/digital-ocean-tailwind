<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'

defineProps({
	href: String
})
</script>

<template>
  <BaseButton :href="href" class="group space-x-1" variant="link">
    <slot />
    <Icon
      icon="carbon:chevron-right"
      class="inline transition-transform group-hover:translate-x-2 group-hover:transform"
    />
  </BaseButton>
</template>
