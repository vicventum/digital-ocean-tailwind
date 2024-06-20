<script setup>
import CardItem from '@/components/card/CardItem.vue'

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
    <div class="container grid justify-between gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
      <CardItem
        v-for="(item, index) of items"
        :key="item.title"
        :img="item.img"
        :alt="item.alt"
        :title="item.title"
        :text="item.text"
        :data-sal-delay="+`${index}00` / 2"
        data-sal="fade"
        data-sal-duration="1000"
      />
    </div>
  </section>
</template>
