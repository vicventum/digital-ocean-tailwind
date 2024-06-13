<script setup lang="ts">
import CardTestimonialFront from '@/components/card/CardTestimonialFront.vue'
import CardTestimonialBack from '@/components/card/CardTestimonialBack.vue'
import BaseInfinityCarousel from '@/components/base/BaseInfinityCarousel.vue'

const testimonialsData = [
  {
    logo: 'digital-ocean-logo.svg',
    type: 'SaaS',
    text: 'What we really love about the Digital Ocean is the ease of use',
    name: 'Victor Alvarez, Director of Engineering',
    alt: 'Digital Ocean logo'
  },
  {
    logo: 'digital-ocean-logo.svg',
    alt: 'Digital Ocean logo'
  },
  {
    logo: 'digital-ocean-logo.svg',
    type: 'SaaS',
    text: 'What we really love about the Digital Ocean is the ease of use',
    name: 'Victor Alvarez, Director of Engineering',
    alt: 'Digital Ocean logo'
  },
  {
  logo: 'digital-ocean-logo.svg',
    alt: 'Digital Ocean logo'
  },
  {
  logo: 'digital-ocean-logo.svg',
    alt: 'Digital Ocean logo'
  },
  {
    logo: 'digital-ocean-logo.svg',
    type: 'SaaS',
    text: 'What we really love about the Digital Ocean is the ease of use',
    name: 'Victor Alvarez, Director of Engineering',
    alt: 'Digital Ocean logo'
  },
]
</script>

<template>
  <section class="space-y-4 bg-slate-200 py-12">
    <BaseInfinityCarousel>
      <template v-for="item in testimonialsData" :key="item">
        <CardTestimonialFront v-if="!item.text" :logo="item.logo" :alt="item.alt" />
        <CardTestimonialBack
          v-else
          :logo="item.logo"
          :alt="item.alt"
          :type="item.type"
          :text="item.text"
          :name="item.name"
        />
      </template>
    </BaseInfinityCarousel>

    <BaseInfinityCarousel reverse>
      <template v-for="item in testimonialsData" :key="item">
        <CardTestimonialFront v-if="!item.text" :logo="item.logo" :alt="item.alt" />
        <CardTestimonialBack
          v-else
          :logo="item.logo"
          :alt="item.alt"
          :type="item.type"
          :text="item.text"
          :name="item.name"
        />
      </template>
    </BaseInfinityCarousel>
  </section>
</template>

<style lang="scss" scoped></style>
