<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { utilSrc } from '@/utils/util-src'
import BaseCard from '@/components/base/BaseCard.vue'

defineProps({
  image: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  views: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <BaseCard class="overflow-hidden transition-shadow duration-300 hover:shadow-xl" padding="0">
    <img :src="utilSrc(image)" alt="Poster article" />

    <div class="space-y-5 p-6">
      <h3 class="uppercase tracking-widest text-sky-500">
        {{ type }}
      </h3>
      <h2 class="text-lg font-medium">
        {{ title }}
      </h2>
      <div class="flex text-sm text-slate-500">
        <time class="w-2/3 shrink-0">
          {{ date }}
        </time>
        <div v-if="views" class="flex items-center gap-x-1">
          <Icon icon="bi:eye" class="inline size-5" />
          <span>{{ views }}</span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
