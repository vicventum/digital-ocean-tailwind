<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'

const emit = defineEmits(['link-enter', 'link-leave'])

function handleEnter(links) {
  emit('link-enter', links)
}
function handleLeave() {
  emit('link-leave')
}

const links = [
  {
    title: 'Products',
    href: '#',
    subLinks: [{}]
  },
  {
    title: 'Solutions',
    href: '#',
    subLinks: [{}]
  },
  {
    title: 'Marketplace',
    href: '#',
    subLinks: []
  },
  {
    title: 'Community',
    href: '#',
    subLinks: [{}]
  },
  {
    title: 'Pricing',
    href: '#',
    subLinks: []
  }
]
</script>

<template>
  <header class="shadow">
    <div class="container flex items-center justify-between">
      <img src="@/assets/img/digital-ocean-logo.svg" alt="Digital Ocean logo" />
      <nav>
        <ul class="flex gap-x-6">
          <li v-for="link in links" :key="link.title" class="py-5" @mouseleave="handleLeave">
            <a :href="link.href" class="font-medium" @mouseenter="handleEnter(link.subLinks)">
              {{ link.title }}
              <Icon v-if="link.subLinks.length" icon="carbon:chevron-down" class="inline size-4" />
            </a>
          </li>
        </ul>
      </nav>
      <div class="space-x-2">
        <BaseButton variant="outlined" href="#">Log in</BaseButton>
        <BaseButton href="#">Sign up</BaseButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
