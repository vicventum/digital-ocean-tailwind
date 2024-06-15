<script setup lang="ts">
import HeroForm from '@/components/forms/HeroForm.vue'
</script>

<template>
  <!-- ? Agrega imagen de fondo -->
  <main class="bg-[url(@/assets/img/hero-bg-animation.svg)] bg-cover bg-center bg-no-repeat">
    <!-- ? Agrega tamaño calculado -->
    <!-- <div class="container grid h-[calc(100vh-112px)] grid-cols-2 items-center gap-8"> -->
    <div class="container grid h-dvh grid-cols-2 items-center gap-8">
      <div class="space-y-4">
        <h1 class="text-balance text-6xl font-bold tracking-tighter text-do-blue-dark">
          The cloud is complex. We make it simple.
        </h1>
        <p class="text-pretty text-2xl font-medium tracking-tighter text-slate-500">
          The cloud computing services you need, with the predictable pricing, developer-friendly
          features, and scalability you’ll love.
        </p>
      </div>
      <div class="w-4/5 space-y-4">
        <p class="font-medium">Welcome to DigitalOcean. Sign up to get started</p>
        <HeroForm />
        <p>
          By signing up you agree to the
          <a href="#" class="font-light underline">Terms of Service</a>
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
