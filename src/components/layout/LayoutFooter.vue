<script setup>
import BaseDivider from '@/components/base/BaseDivider.vue'
import LayoutFooterSecondary from '@/components/layout/LayoutFooterSecondary.vue'
import LayoutFooterPrincipal from '@/components/layout/LayoutFooterPrincipal.vue'
</script>

<template>
  <div class="bg-slate-100">
    <LayoutFooterSecondary />
    <BaseDivider class="container w-5/6" />
    <LayoutFooterPrincipal />
  </div>
</template>
