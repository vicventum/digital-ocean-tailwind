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
    <nav class="container flex w-5/6 items-center justify-between gap-y-4 py-10">
      <div class="flex items-center gap-x-5">
        <Icon icon="devicon:digitalocean" class="size-10" />
        <div class="text-slate-500">© 2021 DigitalOcean, LLC. All rights reserved.</div>
      </div>

      <ul class="flex gap-x-2">
        <li class="" v-for="icon in icons" :key="icon.name">
          <a class="inline-block rounded bg-slate-200 p-2 transition hover:opacity-70" :href="icon.href">
            <Icon :icon="icon.name" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
