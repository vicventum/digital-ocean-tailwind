<script setup>
import { Icon } from '@iconify/vue'
import LinkCta from '@/components/shared/LinkCta.vue'
import BaseCard from '@/components/base/BaseCard.vue'

const vmData = [
  {
    feature: 'CPU',
    value: '1'
  },
  {
    feature: 'Memory',
    value: '1 GB'
  },
  {
    feature: 'Storage',
    value: '25 GB'
  },
  {
    feature: 'Transfer',
    value: '1 TB'
  }
]

const serviceData = [
  {
    icon: 'devicon:digitalocean',
    name: 'Digital Ocean',
    cost: '$20/mo',
    bar: {
      size: 'w-4',
      color: 'bg-do-blue-light'
    }
  },
  {
    icon: 'devicon:googlecloud',
    name: 'GCP',
    cost: '$29/mo',
    bar: {
      size: 'w-8',
      color: 'bg-do-blue-dark'
    }
  },
  {
    icon: 'devicon:amazonwebservices-wordmark',
    name: 'AWS',
    cost: '$30.46/mo',
    bar: {
      size: 'w-8',
      color: 'bg-do-blue-dark'
    }
  },
  {
    icon: 'devicon:azure',
    name: 'Azure',
    cost: '$30.37',
    bar: {
      size: 'w-8',
      color: 'bg-do-blue-dark'
    }
  }
]
</script>

<template>
  <section class="mt-20 bg-slate-100 py-20">
    <div class="container grid items-center gap-y-8 text-pretty lg:grid-cols-[1fr_36%_1fr]">
      <article class="space-y-4 text-center md:pr-9 md:text-left">
        <h2 class="text-4xl font-bold text-do-blue-dark">See what you can save</h2>
        <p class="text-xl font-medium tracking-tight text-slate-500">
          DigitalOcean consistently outperforms other cloud providers on price, while delivering the
          same performance you need tosucceed.
        </p>
        <LinkCta>Calculate your savings</LinkCta>
      </article>

      <!-- SECOND CARD -->
      <BaseCard
        color="bg-do-blue-dark"
        padding="p-6"
        data-sal="slide-right"
        data-sal-duration="1000"
      >
        <h2 class="mb-5 text-4xl font-bold text-white">Basic VMs</h2>
        <p class="mb-10 text-slate-300">
          Easy, fast, and flexible compute built for a range of needs.
        </p>

        <div class="divide-y divide-slate-700 text-slate-300">
          <div
            v-for="{ feature, value } in vmData"
            :key="feature"
            class="flex justify-between py-4"
          >
            <div>{{ feature }}</div>
            <div>{{ value }}</div>
          </div>
        </div>

        <div class="space-x-5">
          <Icon icon="carbon:arrow-left" class="inline size-5" />
          <Icon icon="carbon:arrow-right" class="inline size-5" />
        </div>
      </BaseCard>

      <!-- THIRD CARD -->
      <BaseCard padding="p-6" data-sal-delay="100" data-sal="slide-right" data-sal-duration="1000">
        <h2 class="mb-5 text-4xl font-bold">Monthly cost</h2>
        <p class="mb-10">Estimated monthly spend.</p>

        <div class="divide-y divide-slate-300">
          <div
            v-for="service in serviceData"
            :key="service.name"
            class="grid grid-cols-[1fr_auto_1fr] py-3"
          >
            <div class="space-x-2">
              <Icon :icon="service.icon" class="inline size-6" />
              {{ service.name }}
            </div>

            <div class="ml-8 w-8">
              <div :class="`h-6 rounded-r-lg ${service.bar.size} ${service.bar.color}`" />
            </div>

            <div class="text-right">{{ service.cost }}</div>
          </div>
        </div>
      </BaseCard>
    </div>
  </section>
</template>
