<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import BannerStats from '@/components/banner/BannerStats.vue'
import BannerTestimonials from '@/components/banner/BannerTestimonials.vue'
import CloudSection from '@/components/sections/CloudSection.vue'
import ScaleSection from '@/components/sections/ScaleSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import CommunitySection from '@/components/sections/CommunitySection.vue'
import ArticlesSection from '@/components/sections/ArticlesSection.vue'
import BannerCta from '@/components/banner/BannerCta.vue'
</script>

<template>
  <div>
    <HeroSection />
    <BannerStats />
    <BannerTestimonials class="mb-20" />
    <CloudSection class="mb-20" />
    <ScaleSection class="mb-20 md:mx-10" />
    <FeaturesSection class="mb-20" />
    <CommunitySection class="mb-20" />
    <ArticlesSection class="mb-20" />
    <BannerCta class="mb-20" />
  </div>
</template>
