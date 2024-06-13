<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="py-20">
    <div class="container">
      <div class="grid-rows-auto mb-20 grid grid-cols-5 gap-4">
        <h2 class="col-span-2 text-4xl font-bold text-do-blue-dark">
          Cloud computing with simplicity at its core
        </h2>

        <div class="col-span-2 row-start-2">
          <p class="mb-2 text-lg font-medium text-gray-500">
            Build robust applications using a comprehensive portfolio of compute, storage, database
            and networking products.
          </p>
          <BaseButton class="group space-x-1" variant="link">
            <span>Explore our products</span>
            <Icon
              icon="carbon:chevron-right"
              class="inline transition-transform group-hover:translate-x-2 group-hover:transform"
            />
          </BaseButton>
        </div>

        <div class="col-span-2 row-start-2">
          <p class="mb-2 text-lg font-medium text-gray-500">
            Our simple UI, CLI, API, and docs enable you to spend time on your business while we
            focus on the infrastructure.
          </p>
          <BaseButton class="group space-x-1" variant="link">
            <span>Read the Docs</span>
            <Icon
              icon="carbon:chevron-right"
              class="inline transition-transform group-hover:translate-x-2 group-hover:transform"
            />
          </BaseButton>
        </div>
      </div>

      <video
        class="mb-10 rounded-lg"
        src="@/assets/video/control-panel-video.mp4"
        alt="Video about the dashboard of Digital Ocean"
        autoplay
        loop
      />

      <div class="grid grid-cols-2 grid-rows-2 items-start gap-8">
        <img
          class="row-span-2"
          src="@/assets/img/terminal-image.svg"
          alt="Digital Ocean terminal image"
        />
        <img
          class="shadow"
          src="@/assets/img/droplet-console-image.svg"
          alt="Digital Ocean droplet console image"
        />
        <div class="flex items-end gap-x-3">
          <BaseCard>
            <blockquote class="flex-1 text-sm text-slate-500">
              “We were able to scale our application by almost 250% while keeping costs the same as
              what we spent at the beginning.” 
							<span class="block">— Ravi Mittal, CEO, Vuukle</span>
            </blockquote>
          </BaseCard>

          <BaseCard>
            <img src="@/assets/img/vuukle-logo.svg" alt="Vuukle logo" />
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
