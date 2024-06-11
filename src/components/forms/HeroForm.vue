<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <form class="space-y-6">
    <div class="flex flex-col gap-4">
      <input class="rounded-lg border border-slate-250 px-4 py-3 shadow-md" type="text" />
      <input class="rounded-lg border border-slate-250 px-4 py-3 shadow-md" type="text" />
      <input class="rounded-lg border border-slate-250 px-4 py-3 shadow-md" type="password" />
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

<style lang="scss" scoped></style>
