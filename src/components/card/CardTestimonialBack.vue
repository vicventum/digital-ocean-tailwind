<script setup>
import CardTestimonial from './CardTestimonial.vue'
import BaseDivider from '@/components/base/BaseDivider.vue'
import { utilSrc } from '@/utils/util-src.js'

defineProps({
  logo: String,
  alt: String,
  type: String,
  text: String,
  name: String
})
</script>

<template>
  <CardTestimonial class="flex flex-col justify-between">
    <header class="flex gap-x-4">
      <img class="w-20" :src="utilSrc(logo)" :alt="alt" />
      <BaseDivider vertical />
      <span class="text-slate-600">{{ type }}</span>
    </header>

    <p>
      {{ `"${text}"` }}
    </p>

    <footer class="text-sm font-medium text-slate-500">
      <p>{{ name }}</p>
    </footer>
  </CardTestimonial>
</template>
