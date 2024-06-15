<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <section
    class="bg-[url(@/assets/img/new-cta-band-bg-image.jpg)] bg-cover bg-center bg-scroll container flex items-center justify-between gap-x-8 rounded-lg bg-do-blue-dark px-16 py-24 text-white"
  >
    <div class="space-y-4 w-1/2">
      <h2 class="text-4xl font-bold">Start building today</h2>
      <p class="text-lg font-medium text-pretty">
        Sign up now and you'll be up and running on DigitalOcean in just minutes.
      </p>
    </div>

    <BaseButton variant="cta" >Create your account</BaseButton>
  </section>
</template>
