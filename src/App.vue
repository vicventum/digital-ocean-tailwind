<script setup>
import { RouterView } from 'vue-router'
import LayoutSubHeader from '@/components/layout/LayoutSubHeader.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <LayoutSubHeader />
  <LayoutHeader />

  <RouterView />
</template>

<style scoped></style>
