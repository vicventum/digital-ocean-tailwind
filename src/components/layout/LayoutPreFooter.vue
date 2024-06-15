<script setup lang="ts">
const linksSection = [
  {
    title: 'Company',
    links: [
      { title: 'About', href: '#' },
      { title: 'Leadership', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Partners', href: '#' },
      { title: 'Referral Program', href: '#' },
      { title: 'Press', href: '#' },
      { title: 'Legal', href: '#' },
      { title: 'Trust Platform', href: '#' },
      { title: 'Investor Relations', href: '#' }
    ]
  },
  {
    title: 'Products',
    links: [
      { title: 'Products Overview', href: '#' },
      { title: 'Droplets', href: '#' },
      { title: 'Kubernetes', href: '#' },
      { title: 'Managed Databases', href: '#' },
      { title: 'Spaces', href: '#' },
      { title: 'Marketplace', href: '#' },
      { title: 'Load Balancers', href: '#' },
      { title: 'Block Storage', href: '#' },
      { title: 'Tools & Integrations', href: '#' },
      { title: 'API', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Documentation', href: '#' },
      { title: 'Release Notes', href: '#' }
    ]
  },
  {
    title: 'Community',
    links: [
      { title: 'Tutorials', href: '#' },
      { title: 'Meetups', href: '#' },
      { title: 'Q&A', href: '#' },
      { title: 'Write for DOnations', href: '#' },
      { title: 'Droplets for Demos', href: '#' },
      { title: 'Hatch Startup Program', href: '#' },
      { title: 'Shop Swag', href: '#' },
      { title: 'Research Program', href: '#' },
      { title: 'Currents Research', href: '#' },
      { title: 'Open Source', href: '#' },
      { title: 'Code of Conduct', href: '#' },
      { title: 'Newsletter Signup', href: '#' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Web & Mobile Apps', href: '#' },
      { title: 'Website Hosting', href: '#' },
      { title: 'Game Development', href: '#' },
      { title: 'Streaming', href: '#' },
      { title: 'VPN', href: '#' },
      { title: 'Startups', href: '#' },
      { title: 'SaaS Solutions', href: '#' },
      { title: 'Agency & Web Dev Shops', href: '#' },
      { title: 'Managed Cloud Hosting Providers', href: '#' },
      { title: 'Big Data', href: '#' },
      { title: 'Business Solutions', href: '#' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { title: 'Support', href: '#' },
      { title: 'Sales', href: '#' },
      { title: 'Report Abuse', href: '#' },
      { title: 'System Status', href: '#' },
      { title: 'Share your ideas', href: '#' }
    ]
  }
]
</script>

<template>
  <div class="bg-slate-100">
    <nav class="container grid w-5/6 grid-cols-5 gap-x-2 gap-y-8 py-16">
      <div class="space-y-5" v-for="section in linksSection" :key="section.title">
        <h2 class="text-xl font-medium">{{ section.title }}</h2>
        <ul class="space-y-2">
          <li v-for="link in section.links" :key="link.title">
            <a :href="link.href" class="text-slate-600 hover:text-slate-900">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
