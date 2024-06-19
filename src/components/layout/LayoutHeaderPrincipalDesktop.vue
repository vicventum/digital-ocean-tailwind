<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import LayoutHeaderPrincipalContainer from '@/components/layout/LayoutHeaderPrincipalContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import MenuProducts from '@/components/menu/MenuProducts.vue'
import { headerLinks } from '@/data/header-links'

const isOpenMenuLink = ref(false)

function handleEnter(isLink) {
  if (!isLink) return (isOpenMenuLink.value = true)
}
function handleLeave() {
  isOpenMenuLink.value = false
}
</script>

<template>
  <LayoutHeaderPrincipalContainer class="relative z-20" v-bind="$attrs">
    <nav class="hidden lg:block">
      <ul class="flex gap-x-6">
        <li v-for="link in headerLinks" :key="link.title" class="py-5" @mouseleave="handleLeave">
          <a
            :href="link.href"
            class="font-medium"
            :class="{ 'cursor-default': !link.href }"
            @mouseenter="handleEnter(link.href)"
          >
            {{ link.title }}
            <Icon v-if="!link.href" icon="carbon:chevron-down" class="inline size-4" />
          </a>
        </li>
      </ul>
    </nav>

    <div class="hidden space-x-2 lg:block">
      <BaseButton variant="outlined" href="#">Log in</BaseButton>
      <BaseButton href="#">Sign up</BaseButton>
    </div>
  </LayoutHeaderPrincipalContainer>

  <MenuProducts
    v-show="isOpenMenuLink"
    @mouseenter="isOpenMenuLink = true"
    @mouseleave="handleLeave"
  />
</template>

<style lang="scss" scoped></style>
