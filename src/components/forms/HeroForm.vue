<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <form class="space-y-6">
    <div class="flex flex-col gap-4">
      <!-- ? Agrega clases de sombra personalizadas -->
      <input
        class="border-slate-250 shadow-input hover:shadow-input-focus focus:shadow-input-focus rounded-lg border px-4 py-3 outline-none focus:border-slate-300"
        type="text"
        placeholder="First name"
      />
      <input
        class="border-slate-250 shadow-input hover:shadow-input-focus focus:shadow-input-focus rounded-lg border px-4 py-3 outline-none focus:border-slate-300"
        type="email"
        placeholder="Email"
      />
      <input
        class="border-slate-250 shadow-input hover:shadow-input-focus focus:shadow-input-focus rounded-lg border px-4 py-3 outline-none focus:border-slate-300"
        type="password"
        placeholder="Password"
      />
    </div>

    <div class="flex gap-x-2">
      <BaseButton class="w-full"> Deploy in seconds </BaseButton>

      <BaseButton variant="secondary">
        <Icon icon="devicon:google" class="inline size-6" />
      </BaseButton>
      <BaseButton variant="secondary">
        <Icon icon="devicon:github" class="inline size-6" />
      </BaseButton>
    </div>
  </form>
</template>
