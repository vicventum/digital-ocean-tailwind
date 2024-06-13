<script setup>
import { utilSrc } from '@/utils/util-src'

const items = [
  {
    title: '598k',
    text: 'Customers worldwide.',
    img: 'stats-customers-graphic.svg',
    alt: 'World graphic'
  },
  {
    title: '185',
    text: 'Countries we serve.',
    img: 'stats-countries-graphic.svg',
    alt: 'Worl with a flag graphic'
  },
  {
    title: '99.99%',
    text: 'Uptime SLA for VMs & Block Storage.',
    img: 'stats-uptime-graphic.svg',
    alt: 'Velocimeter graphic'
  }
]
</script>

<template>
  <section class="py-16">
    <div class="container flex justify-between">
      <article v-for="item of items" :key="item.title" class="flex items-center gap-x-2">
        <img :src="utilSrc(item.img)" :alt="item.alt" />
        <div>
          <h2 class="text-4xl font-bold">{{ item.title }}</h2>
          <span class="text-gray-500">{{ item.text }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
