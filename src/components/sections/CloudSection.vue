<script setup>
import LinkCta from '@/components/shared/LinkCta.vue'
import BaseCard from '@/components/base/BaseCard.vue'
</script>

<template>
  <section>
    <div class="container">
      <div class="grid-rows-auto mb-20 grid gap-y-9 md:grid-cols-5 md:gap-4">
        <h2 class="text-4xl font-bold text-do-blue-dark md:col-span-2 text-balance">
          Cloud computing with simplicity at its core
        </h2>

        <div class="md:col-span-2 md:row-start-2">
          <p class="mb-2 text-lg font-medium text-gray-500">
            Build robust applications using a comprehensive portfolio of compute, storage, database
            and networking products.
          </p>
          <LinkCta href="#">
            <span>Explore our products</span>
          </LinkCta>
        </div>

        <div class="md:col-span-2 md:row-start-2">
          <p class="mb-2 text-lg font-medium text-gray-500">
            Our simple UI, CLI, API, and docs enable you to spend time on your business while we
            focus on the infrastructure.
          </p>
          <LinkCta href="#"> Read the Docs </LinkCta>
        </div>
      </div>

      <video
        class="mb-10 rounded-lg"
        src="@/assets/video/control-panel-video.mp4"
        alt="Video about the dashboard of Digital Ocean"
        autoplay
        loop
        muted
      />

      <div class="grid md:grid-cols-2 md:grid-rows-[auto_auto] items-start gap-y-7 md:gap-8">
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

          <BaseCard padding="p-3 md:p-5">
            <img class="w-28 md:w-12" src="@/assets/img/vuukle-logo.svg" alt="Vuukle logo" />
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
