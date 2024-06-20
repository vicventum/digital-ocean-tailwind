<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import ArticlesGallery from '@/components/gallery/ArticlesGallery.vue'
import CardItem from '@/components/card/CardItem.vue'

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
    <div class="container mb-20 space-y-16">
      <div class="mx-auto space-y-6 text-center md:w-1/2">
        <h2 class="text-4xl font-bold">
          Build alongside a robust and supportive community like you
        </h2>

        <p class="text-xl font-medium text-slate-600">
          Quickly learn new tech concepts, programming languages, and get answers to your questions
          from a vibrant developer community.
        </p>

        <BaseButton>Explore the community</BaseButton>
      </div>

      <div class="mx-auto grid w-9/12 flex-col gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardItem
          v-for="(data, index) of communityData"
          :key="data.value"
          :title="data.value"
          :text="data.text"
          class="text-center lg:text-left"
          class-title="text-do-blue-light"
          class-text="text-lg font-medium"
          :data-sal-delay="+`${index}00` / 1"
          data-sal="fade"
          data-sal-duration="1000"
        />
      </div>
    </div>

    <ArticlesGallery />
  </section>
</template>
