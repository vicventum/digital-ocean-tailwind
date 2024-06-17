<script setup>
import { headerLinks } from '@/data/header-links'
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'
function handleLeave() {}
</script>

<template>
  <section class="container space-y-5 bg-white- pb-8 pt-4 shadow">
    <!-- LINKS -->
    <nav class="">
      <ul class="flex flex-col divide-y">
        <li v-for="link in headerLinks" :key="link.title" class="" @mouseleave="handleLeave">
          <a
            :href="link.href"
            class="flex justify-between py-3 font-medium"
            @mouseenter="handleEnter(link.subLinks)"
          >
            {{ link.title }}
            <Icon v-if="link.subLinks.length" icon="carbon:chevron-down" class="inline size-4" />
          </a>
        </li>
      </ul>
    </nav>

    <div class="space-y-5">
      <div class="flex gap-x-4">
        <BaseButton variant="default" class="w-full">Sign Up</BaseButton>
        <BaseButton variant="outlined" class="w-full">Sign Up</BaseButton>
      </div>
      <div class="space-y-4">
        <BaseButton variant="outlined" class="w-full">We're Hiring</BaseButton>
        <BaseButton variant="outlined" class="w-full">Blog</BaseButton>
        <BaseButton variant="outlined" class="w-full">Docs</BaseButton>
        <BaseButton variant="outlined" class="w-full">Get Support</BaseButton>
      </div>
    </div>
  </section>
</template>
