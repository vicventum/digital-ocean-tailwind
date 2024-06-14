<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import BannerStats from '@/components/banner/BannerStats.vue'
import BannerTestimonials from '@/components/banner/BannerTestimonials.vue'
import CloudSection from '@/components/sections/CloudSection.vue'
import ScaleSection from '@/components/sections/ScaleSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <BannerStats />
    <BannerTestimonials class="mb-20" />
    <CloudSection class="mb-20" />
    <ScaleSection class="mx-10" />
  </div>
</template>
