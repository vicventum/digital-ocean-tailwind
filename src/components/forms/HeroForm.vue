<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <form class="space-y-6">
    <div class="flex flex-col gap-4">
      <!-- ? Agrega clases de sombra personalizadas -->
      <input
        class="shadow-input transition hover:shadow-input-focus"
        type="text"
        placeholder="First name"
      />
      <input
        class="shadow-input transition hover:shadow-input-focus"
        type="email"
        placeholder="Email"
      />
      <input
        class="shadow-input transition hover:shadow-input-focus"
        type="password"
        placeholder="Password"
      />
    </div>

    <div class="flex flex-wrap justify-center gap-2 lg:flex-nowrap">
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
