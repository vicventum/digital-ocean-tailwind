<script setup lang="ts">
import { ref } from 'vue'
import LayoutHeaderSecondary from '@/components/layout/LayoutHeaderSecondary.vue'
import LayoutHeaderPrincipal from '@/components/layout/LayoutHeaderPrincipal.vue'
import MenuProducts from '@/components/menu/MenuProducts.vue'

const menuData = ref([])
const isOpenMenuLink = ref(false)

function handleEnter(links) {
  if (!links.length) return null
  menuData.value = links
  isOpenMenuLink.value = true
}
function handleLeave() {
  console.log('🚀 ~ handleLeave ~ isOpenMenuLink.value:', isOpenMenuLink.value)
  isOpenMenuLink.value = false
}
</script>

<template>
  <section class="fixed z-10 w-full bg-do-blue-lighter">
    <LayoutHeaderSecondary />
    <LayoutHeaderPrincipal @link-enter="handleEnter" @link-leave="handleLeave" />
    <MenuProducts
      v-show="isOpenMenuLink"
      @mouseenter="isOpenMenuLink = true"
      @mouseleave="handleLeave"
    />
  </section>
</template>

<style lang="scss" scoped></style>
