<script setup>
import CardArticle from '@/components/card/CardArticle.vue'
const articles = [
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  },
  {
    image: 'how-to-deploy-a-react-app-tutorial-image.jpg',
    type: 'tutorial',
    title: 'How To Deploy a React Application to DigitalOcean App Platform',
    date: 'December 18, 2020',
    views: '22.8k'
  }
]
</script>

<template>
  <section class="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
