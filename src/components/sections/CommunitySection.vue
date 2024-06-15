<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

const communityData = [
  {
    value: '3K+',
    text: 'In-depth technical tutorials for developers'
  },
  {
    value: '3.5M',
    text: 'Visits per month to our community site'
  },
  {
    value: '170K',
    text: 'Participants in our 2020 hackathon'
  },
  {
    value: '30K',
    text: 'Questions answered in our community'
  }
]
</script>

<template>
  <section class="">
    <div class="container space-y-16">
      <div class="mx-auto w-1/2 space-y-6 text-center">
        <h2 class="text-4xl font-bold">
          Build alongside a robust and supportive community like you
        </h2>

        <p class="text-xl font-medium text-slate-600">
          Quickly learn new tech concepts, programming languages, and get answers to your questions
          from a vibrant developer community.
        </p>

        <BaseButton>Explore the community</BaseButton>
      </div>

      <div class="flex gap-6 w-9/12 mx-auto">
        <article class="space-y-1" v-for="{ value, text } in communityData" :key="text">
          <h3 class="text-center text-4xl font-bold text-do-blue-light lg:text-left">
            {{ value }}
          </h3>
          <p class="text-lg font-medium text-slate-500">
            {{ text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
