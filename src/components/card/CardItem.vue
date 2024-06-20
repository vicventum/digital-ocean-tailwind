<script setup lang="ts">
import { utilSrc } from '@/utils/util-src'

defineProps({
  img: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  classTitle: {
    type: String,
    default: ''
  },
  classText: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article class="flex items-center gap-x-2 text-pretty">
    <img v-if="img" :src="utilSrc(img)" :alt="alt" />
    <div>
      <h2 :class="`text-4xl font-bold text-do-blue-dark ${classTitle}`">{{ title }}</h2>
      <span :class="`text-lg- text-gray-500 ${classText}`">{{ text }}</span>
    </div>
  </article>
</template>
