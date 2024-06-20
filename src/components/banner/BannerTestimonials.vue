<script setup lang="ts">
import CardTestimonialFront from '@/components/card/CardTestimonialFront.vue'
import CardTestimonialBack from '@/components/card/CardTestimonialBack.vue'
import BaseInfinityCarousel from '@/components/base/BaseInfinityCarousel.vue'

const testimonialsData = [
  {
    logo: 'vidazoo-logo.svg',
    type: 'AdTech',
    text: 'Digital Ocean provides us the perfect set of tools to operate out SaaS business profitably.',
    name: 'Roman Svichar, CTO',
    alt: 'Vidazoo logo'
  },

  {
    logo: 'gitlab-logo.svg',
    alt: 'GitLab logo'
  },
  {
    logo: 'vidgyor-logo.svg',
    type: 'SaaS',
    text: 'We love the developer experience, we can accurately predict our costs, and can scale up or down as the traffic grows',
    name: 'Mahaboob Khan, Cofounder and CEO',
    alt: 'Vidgyor logo'
  },
  {
    logo: '3cx-logo.svg',
    alt: '3cx logo'
  },
  {
    logo: 'hashicorp-logo.svg',
    alt: 'HashiCorp logo'
  },
  {
    logo: 'whatfix-logo.svg',
    type: 'SaaS',
    text: 'What we really love about the Digital Ocean is the ease of use',
    name: 'Achyuth Krishna, Director of Engineering',
    alt: 'Whatfix logo'
  },
  {
    logo: 'parabol-logo.svg',
    alt: 'Parabol logo'
  },
  {
    logo: 'hackthebox-large-logo.svg',
    alt: 'HackTheBox logo'
  },
  {
    logo: 'bunnyshell-logo.svg',
    type: 'DevOps',
    text: 'Digital Ocean not only provides world-class infrastructure but they truly get developers, making our jobs much easier',
    name: 'Roxana Ciobanu, CTO',
    alt: 'BunnyShell logo'
  },
  {
    logo: 'centra-logo.svg',
    alt: 'Centra logo'
  },
  {
    logo: 'vidazoo-logo.svg',
    alt: 'Vidazoo logo'
  },
  {
    logo: 'intricately-logo.svg',
    type: 'SaaS',
    text: 'We require a developer-friendly infrastructure platform that keeps us focused on building software rather than managing infrastructure',
    name: 'Fima Leshinsky, CTO',
    alt: 'Intricately logo'
  },
  {
    logo: 'wpmudev-logo.svg',
    alt: 'WP Mudev logo'
  },
  {
    logo: 'hackthebox-logo.svg',
    type: 'SaaS',
    text: "I'e worked with Kubernetes before, hands-on, self-hosted, but the DigitalOcean integration and provision of Kubernetes has been the most seamless that I've experienced so far",
    name: 'James Hooker, CTO',
    alt: 'HackTheBox logo'
  },
  {
    logo: 'vuukle-large-logo.svg',
    alt: 'BunnyShell logo'
  },
  {
    logo: 'intricately-large-logo.svg',
    alt: 'Vuukle logo'
  }
]
</script>

<template>
  <section class="space-y-4 bg-slate-200 py-12">
    <BaseInfinityCarousel stop-on-hover>
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

    <BaseInfinityCarousel stop-on-hover reverse>
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
