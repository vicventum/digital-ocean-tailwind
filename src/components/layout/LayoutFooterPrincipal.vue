<script setup>
import { Icon } from '@iconify/vue'

const icons = [
  {
    name: 'ri:twitch-fill',
    href: '#'
  },
  {
    name: 'ri:twitter-x-fill',
    href: '#'
  },
  {
    name: 'ri:facebook-fill',
    href: '#'
  },
  {
    name: 'ri:instagram-fill',
    href: '#'
  },
  {
    name: 'ri:youtube-fill',
    href: '#'
  },
  {
    name: 'ri:linkedin-box-fill',
    href: '#'
  },
  {
    name: 'material-symbols:logo-dev',
    href: '#'
  },
  {
    name: 'carbon:logo-glassdoor',
    href: '#'
  }
]
</script>

<template>
  <footer class="bg-slate-100">
    <nav
      class="container flex flex-col items-center justify-between gap-y-8 py-10 lg:w-5/6 lg:flex-row lg:gap-y-4"
    >
      <div class="flex flex-col items-center gap-y-2 gap-x-5 text-center sm:flex-row">
        <Icon icon="devicon:digitalocean" class="inline size-10" />
        <div class="text-balance text-slate-500">
          © 2021 DigitalOcean, LLC. All rights reserved.
        </div>
      </div>

      <ul class="grid grid-cols-4 sm:flex gap-2">
        <li class="" v-for="icon in icons" :key="icon.name">
          <a
            class="inline-block rounded bg-slate-200 p-2 transition hover:opacity-70"
            :href="icon.href"
          >
            <Icon :icon="icon.name" class="size-5 sm:size-auto" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
