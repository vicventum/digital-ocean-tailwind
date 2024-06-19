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

  <!-- <Transition name="fade"> -->
  <!-- <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0 animation"
    enter-active-class="transition duration-150"
    leave-active-class="transition duration-150"
    class="animation-"
  > -->
  <Transition enter-active-class="animate-fade" leave-active-class="animate-fade-reverse">
    <LayoutHeaderPrincipalMobileMenu v-show="isOpenMenu" :is-open-menu="isOpenMenu" />
  </Transition>
</template>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
