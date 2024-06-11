<script setup lang="ts">
import HeroForm from '@/components/forms/HeroForm.vue'
</script>

<template>
  <main class="container grid grid-cols-2 gap-8 border">
    <div class="space-y-4">
      <h1 class="text-balance text-6xl font-bold tracking-tighter text-do-blue-dark">
        The cloud is complex. We make it simple.
      </h1>
      <p class="text-xl font-medium text-slate-500">
        The cloud computing services you need, with the predictable pricing, developer-friendly
        features, and scalability you’ll love.
      </p>
    </div>

    <div class="space-y-4 w-4/5">
      <p class="font-medium">Welcome to DigitalOcean. Sign up to get started</p>

      <HeroForm />

      <p>
        By signing up you agree to the
        <a href="#" class="font-light underline">Terms of Service</a>
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
