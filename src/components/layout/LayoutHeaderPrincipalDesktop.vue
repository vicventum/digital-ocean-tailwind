<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import LayoutHeaderPrincipalContainer from '@/components/layout/LayoutHeaderPrincipalContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import MenuProducts from '@/components/menu/MenuProducts.vue'
import { headerLinks } from '@/data/header-links'

const menuData = ref([])
const isOpenMenuLink = ref(false)

function handleEnter(links) {
  if (!links.length) return null
  menuData.value = links
  isOpenMenuLink.value = true
}
function handleLeave() {
  isOpenMenuLink.value = false
}
</script>

<template>
  <LayoutHeaderPrincipalContainer v-bind="$attrs">
    <nav class="hidden lg:block">
      <ul class="flex gap-x-6">
        <li v-for="link in headerLinks" :key="link.title" class="py-5" @mouseleave="handleLeave">
          <a :href="link.href" class="font-medium" @mouseenter="handleEnter(link.subLinks)">
            {{ link.title }}
            <Icon v-if="link.subLinks.length" icon="carbon:chevron-down" class="inline size-4" />
          </a>
        </li>
      </ul>
    </nav>

    <div class="hidden space-x-2 lg:block">
      <BaseButton variant="outlined" href="#">Log in</BaseButton>
      <BaseButton href="#">Sign up</BaseButton>
    </div>
  </LayoutHeaderPrincipalContainer>

  <!-- v-show="isOpenMenuLink" -->
  <MenuProducts
    @mouseenter="isOpenMenuLink = true"
    @mouseleave="handleLeave"
  />
</template>

<style lang="scss" scoped></style>
