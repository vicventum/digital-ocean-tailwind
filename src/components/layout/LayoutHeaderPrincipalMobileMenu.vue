<script setup>
import { ref, watch } from 'vue'
import { headerLinks } from '@/data/header-links'
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/base/BaseButton.vue'
import MenuProducts from '@/components/menu/MenuProducts.vue'

const props = defineProps({
  isOpenMenu: {
    type: Boolean,
    default: false
  }
})

const activeMenu = ref('')
function handleMenu(menu) {
  activeMenu.value = menu
}
const menus = {
  MenuProducts
}
watch(
  () => props.isOpenMenu,
  (isOpenModal) => {
    if (!isOpenModal) activeMenu.value = ''
  }
)

function handleClose() {
  activeMenu.value = ''
}
</script>

<template>
  <section class="bg-white- relative space-y-5 pb-8 pt-4 shadow">
    <!-- LINKS -->
    <div class="container">
      <nav class="">
        <ul class="flex flex-col divide-y">
          <li v-for="link in headerLinks" :key="link.title" class="" @mouseleave="handleLeave">
            <a v-if="link.href" :href="link.href" class="flex justify-between py-3 font-medium">
              {{ link.title }}
            </a>
            <button
              v-else
              class="flex w-full justify-between py-3 font-medium"
              @click="handleMenu(link.menu)"
            >
              {{ link.title }}
              <Icon v-if="!link.href" icon="carbon:chevron-down" class="inline size-4" />
            </button>
          </li>
        </ul>
      </nav>
      <div class="space-y-5">
        <div class="flex gap-x-4">
          <BaseButton variant="default" class="w-full">Sign Up</BaseButton>
          <BaseButton variant="outlined" class="w-full">Sign Up</BaseButton>
        </div>
        <div class="space-y-4">
          <BaseButton variant="outlined" class="w-full">We're Hiring</BaseButton>
          <BaseButton variant="outlined" class="w-full">Blog</BaseButton>
          <BaseButton variant="outlined" class="w-full">Docs</BaseButton>
          <BaseButton variant="outlined" class="w-full">Get Support</BaseButton>
        </div>
      </div>
    </div>

    <Teleport to="#app">
      <Transition enter-active-class="animate-fade" leave-active-class="animate-fade-reverse">
        <Component
          :is="menus[activeMenu]"
          class="fixed bottom-0 top-[73px] z-20 w-full overflow-y-auto overflow-x-hidden md:top-[113px]"
          @close="handleClose"
        />
      </Transition>
    </Teleport>
  </section>
</template>
