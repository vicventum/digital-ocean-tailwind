<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
import LinkCta from '@/components/shared/LinkCta.vue'

const statsData = [
  {
    number: '598k',
    text: 'Customers building on DigitalOcean.'
  },
  {
    number: '185',
    text: 'Countries our customers are based in.'
  },
  {
    number: '14',
    text: 'Globally distributed data centers.'
  },
  {
    number: '99.99%',
    text: 'Uptime SLA for Droplets and Block Storage.'
  }
]
</script>

<template>
  <section class="">
    <div class="rounded-lg bg-slate-200 px-8 pb-20 pt-14 md:px-16">
      <div class="mb-16 items-center md:mb-12 md:grid md:grid-cols-2">
        <div class="space-y-5">
          <h2 class="text-4xl font-bold">Scale up with confidence</h2>
          <p class="text-lg font-medium text-slate-600">
            Keep costs in check even when you scale your apps with affordable, predictable pricing.
          </p>
          <p class="text-lg font-medium text-slate-600">
            Expand your business using our 14 globally distributed data centers and a 99.99% uptime
            SLA.
          </p>
          <LinkCta href="#" class="mt-2 inline-block">View pricing</LinkCta>
        </div>
        <img class="" src="@/assets/img/chart-up-cutted.svg" alt="Chart up" />
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div v-for="data in statsData" :key="data.number">
          <h3 class="text-4xl font-bold">{{ data.number }}</h3>
          <p class="mt-3 text-xl text-slate-600">{{ data.text }}</p>
        </div>
      </div>
    </div>

    <div class="mx-4 -mt-12 flex items-end gap-x-5 md:mx-0 md:w-2/3">
      <BaseCard padding="p-3 md:p-5">
        <img class="w-44 md:w-auto" src="@/assets/img/vidgyor-logo.svg" alt="Vidgyor logo" />
      </BaseCard>

      <BaseCard class="text-pretty">
        <blockquote class="mb-5">
          “We love the developer experience, we can accurately predict our costs, and can scale up
          or down as the traffic grows.”
        </blockquote>
        <span class="text-slate-500">— Mahaboob Khan, Cofounder and CEO, Vidgyor</span>
      </BaseCard>
    </div>
  </section>
</template>
