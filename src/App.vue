<script setup>
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutPreFooter from '@/components/layout/LayoutPreFooter.vue'
import BaseDivider from '@/components/base/BaseDivider.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
</script>

<template>
  <LayoutHeader />

  <RouterView />

  <div class="bg-slate-100">
    <LayoutPreFooter />
    <BaseDivider class="container w-5/6" />
    <LayoutFooter />
  </div>
</template>

<style scoped></style>
