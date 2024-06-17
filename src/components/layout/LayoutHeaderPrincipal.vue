<script setup>
import LayoutHeaderPrincipalMobile from '@/components/layout/LayoutHeaderPrincipalMobile.vue'
import LayoutHeaderPrincipalDesktop from '@/components/layout/LayoutHeaderPrincipalDesktop.vue'
</script>

<template>
  <LayoutHeaderPrincipalMobile class="lg:hidden" />
  <LayoutHeaderPrincipalDesktop class="hidden lg:block" />
</template>
