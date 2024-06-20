<script setup>
import CardArticle from '@/components/card/CardArticle.vue'
const articles = [
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'January 18, 2024',
    views: '319k'
  },
  {
    image: 'how-to-install-mysql-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Install MySQL on Ubuntu 24.04',
    date: 'December 18, 2023',
    views: '22.8k'
  },
  {
    image: 'how-to-scale-your-saas-product-blog-image.jpg',
    type: 'blog',
    title: 'How to scale your SaaS product without breaking the bank',
    date: 'June 22, 2023',
    // views: '22.8k'
  },
  {
    image: 'how-to-install-nodejs-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Install Node.js on Ubuntu 20.04',
    date: 'February 9, 2024',
    views: '273.4k'
  },
  {
    image: 'how-to-code-in-python-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How to code in Python',
    date: 'August 23, 2022',
    views: '16.1m'
  },
  {
    image: 'contributing-to-open-source-blog-image.jpg',
    type: 'blog',
    title: 'Contributing to open source software: Kubernetes',
    date: 'March 11, 2024',
    // views: '22.8k'
  },
  {
    image: 'introducing-digitalocean-managed-mongodb-blog-image.jpg',
    type: 'blog',
    title: 'Introducing Digital Ocean Managed MongoDB - a fully managed, database as service for modern apps',
    date: 'July 31, 2023',
    // views: '16.1m'
  },
  {
    image: 'multi-cloud-vs-hybrid-cloud-blog-image.jpg',
    type: 'blog',
    title: 'Multi-cloud vs hybrid cloud: Everything your business needs to know',
    date: 'April 30, 2024',
    views: '22.8k'
  }
]
</script>

<template>
  <section class="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <CardArticle
      v-for="article in articles"
      :key="article.title"
      :image="article.image"
      :type="article.type"
      :title="article.title"
      :date="article.date"
      :views="article.views"
    />
  </section>
</template>
