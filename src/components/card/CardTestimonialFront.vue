<script setup>
import CardTestimonial from './CardTestimonial.vue'
import { utilSrc } from '@/utils/util-src.js'

defineProps({
  logo: String,
  alt: String
})
</script>

<template>
  <CardTestimonial class="flex place-content-center">
    <img class="w-52" :src="utilSrc(logo)" :alt="alt" />
  </CardTestimonial>
</template>
