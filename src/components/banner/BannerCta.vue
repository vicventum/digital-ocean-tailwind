<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <section
    class="container flex flex-col items-center justify-between gap-8 rounded-lg bg-do-blue-dark bg-[url(@/assets/img/new-cta-band-bg-image.jpg)] bg-cover bg-scroll bg-center px-8 py-12 text-white lg:flex-row lg:px-16 lg:py-24"
  >
    <div class="lg:w-1/2 space-y-4 text-center lg:text-left">
      <h2 class="text-4xl font-bold">Start building today</h2>
      <p class="text-pretty text-lg font-medium">
        Sign up now and you'll be up and running on DigitalOcean in just minutes.
      </p>
    </div>

    <BaseButton variant="cta">Create your account</BaseButton>
  </section>
</template>
