<script setup>
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
</script>

<template>
  <LayoutHeader />

  <RouterView />

  <LayoutFooter />
</template>

<style scoped></style>
