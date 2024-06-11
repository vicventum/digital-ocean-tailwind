<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <header class="shadow">
    <div class="container flex items-center justify-between py-5">
      <img src="@/assets/img/digital-ocean-logo.svg" alt="Digital Ocean logo" />
      <nav>
        <ul class="flex gap-x-6">
          <li>
            <a href="#" class="font-medium">
              Products
              <Icon icon="carbon:chevron-down" class="inline size-4" />
            </a>
          </li>
          <li>
            <a href="#" class="font-medium">
              Solutions
              <Icon icon="carbon:chevron-down" class="inline size-4" />
            </a>
          </li>
          <li>
            <a href="#" class="font-medium">
              Marketplace
              <Icon icon="carbon:chevron-down" class="inline size-4" />
            </a>
          </li>
          <li>
            <a href="#" class="font-medium">
              Community
              <Icon icon="carbon:chevron-down" class="inline size-4" />
            </a>
          </li>
          <li>
            <a href="#" class="font-medium">
              Pricing
              <Icon icon="carbon:chevron-down" class="inline size-4" />
            </a>
          </li>
        </ul>
      </nav>
      <div class="space-x-3">
        <BaseButton variant="secondary" href="#">Log in</BaseButton>
        <BaseButton href="#">Sign up</BaseButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
