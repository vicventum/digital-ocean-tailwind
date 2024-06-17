<script setup>
import LayoutHeaderSecondary from '@/components/layout/LayoutHeaderSecondary.vue'
import LayoutHeaderPrincipal from '@/components/layout/LayoutHeaderPrincipal.vue'
</script>

<template>
  <section class="fixed z-10 w-full bg-do-blue-lighter">
    <LayoutHeaderSecondary class="hidden md:block" />
    <LayoutHeaderPrincipal />
  </section>
</template>

<style lang="scss" scoped></style>
