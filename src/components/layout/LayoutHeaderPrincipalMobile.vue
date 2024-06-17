<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import LayoutHeaderPrincipalContainer from '@/components/layout/LayoutHeaderPrincipalContainer.vue'
import LayoutHeaderPrincipalMobileMenu from '@/components/layout/LayoutHeaderPrincipalMobileMenu.vue'

const isOpenMenu = ref(false)

function handleMenu() {
  isOpenMenu.value = !isOpenMenu.value
}

const iconName = computed(() =>
  isOpenMenu.value ? 'radix-icons:cross-2' : 'radix-icons:hamburger-menu'
)
</script>

<template>
  <LayoutHeaderPrincipalContainer v-bind="$attrs">
    <Icon :icon="iconName" class="size-8 cursor-pointer lg:hidden" @click="handleMenu" />
  </LayoutHeaderPrincipalContainer>

  <LayoutHeaderPrincipalMobileMenu v-if="isOpenMenu" />
</template>
