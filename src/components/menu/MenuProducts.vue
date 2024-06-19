<script setup lang="ts">
import { Icon } from '@iconify/vue'

const featuredSection = {
  featured: true,
  title: 'Featured Products',
  links: [
    {
      name: 'Droplets',
      desc: 'Scalable virtual machines',
      href: '#'
    },
    {
      name: 'Kubernetes',
      desc: 'Managed Kubernetes clusters',
      href: '#'
    },
    {
      name: 'App Platform',
      desc: 'Get apps to market faster',
      href: '#'
    },
    {
      name: 'Databases',
      desc: 'Worry-free setup & maintenance',
      href: '#'
    },
    {
      name: 'Spaces',
      desc: 'Simple object storage',
      href: '#'
    }
  ]
}

const regularSection = [
  [
    {
      featured: false,
      title: 'Managed Databases',
      links: [
        {
          name: 'Mongo DB',
          desc: 'Fully managed MongoDB',
          href: '#'
        },
        {
          name: 'MySQL',
          desc: 'Fully managed MySQL',
          href: '#'
        },
        {
          name: 'PostgreSQL',
          desc: 'Fully managed PostgreSQL',
          href: '#'
        },
        {
          name: 'Redis™',
          desc: 'Fully managed Redis',
          href: '#'
        }
      ]
    },
    {
      featured: false,
      title: 'Networking',
      links: [
        {
          name: 'Virtual Private Cloud (VPC)',
          desc: 'Isolated network environments',
          href: '#'
        },
        {
          name: 'Cloud Firewalls',
          desc: 'Secure your infrastructure',
          href: '#'
        },
        {
          name: 'Load Balancers',
          desc: 'Scale your applications',
          href: '#'
        },
        {
          name: 'Floating IPs',
          desc: 'Static IP addresses',
          href: '#'
        },
        {
          name: 'DNS',
          desc: 'Manage your DNS records',
          href: '#'
        }
      ]
    }
  ],
  [
    {
      featured: false,
      title: 'Compute',
      links: [
        {
          name: 'Droplets',
          desc: 'Scalable virtual machines',
          href: '#'
        },
        {
          name: 'Kubernetes',
          desc: 'Managed Kubernetes clusters',
          href: '#'
        },
        {
          name: 'App Platform',
          desc: 'Get apps to market faster',
          href: '#'
        }
      ]
    },
    {
      featured: false,
      title: 'Storage',
      links: [
        {
          name: 'Spaces Object Storage',
          desc: 'Simple object storage',
          href: '#'
        },
        {
          name: 'Volumes Block Storage',
          desc: 'Scalable block storage',
          href: '#'
        }
      ]
    }
  ],
  [
    {
      featured: false,
      title: 'Developer Tools',
      links: [
        {
          name: 'API',
          desc: 'Programmatic access to your resources',
          href: '#'
        },
        {
          name: 'CLI',
          desc: 'Command line interface for managing your resources',
          href: '#'
        },
        {
          name: 'Monitoring',
          desc: 'Monitor your infrastructure',
          href: '#'
        },
        {
          name: 'Teams',
          desc: 'Collaborate with your team',
          href: '#'
        },
        {
          name: 'Deploy to DigitalOcean button',
          desc: 'Easily deploy your apps',
          href: '#'
        },
        {
          name: 'Support',
          desc: 'Get help when you need it',
          href: '#'
        }
      ]
    }
  ]
]
// const featureSection = sectionLinks.find((section) => section.featured)
</script>

<template>
  <nav class="relative z-10 shadow">
    <div class="grid grid-cols-[40%_1fr] items-start">
      <article class="flex flex-col bg-sky-50 p-8 pl-24">
        <h3 class="px-4 font-bold uppercase">{{ featuredSection.title }}</h3>

        <a
          v-for="link in featuredSection.links"
          :key="link.name"
          :href="link.href"
          class="group rounded px-4 py-5 transition hover:bg-sky-200"
        >
          <h4 class="pb-2 text-xl font-medium transition group-hover:text-do-blue-light">
            {{ link.name }}
          </h4>
          <span class="text-slate-600">{{ link.desc }}</span>
        </a>
      </article>

      <div class="align-start bg-do-blue-lighter- grid grid-cols-3 gap-x-4 p-8 pr-24">
        <div v-for="(section, index) in regularSection" :key="index" class="space-y-8">
          <article v-for="block in section" :key="block.title" class="space-y-4">
            <h3 class="font-bold uppercase">{{ block.title }}</h3>
            <ul class="space-y-2">
              <li v-for="link in block.links" :key="link.name" class="block text-slate-600">
                <a :href="link.href" class="hover:text-slate-900">{{ link.name }}</a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>

    <a
      href="#"
      class="group flex items-center justify-center space-x-2 border-t border-slate-300 py-2 text-do-blue-light hover:text-do-blue-medium transition"
    >
      <span>See all products</span>
      <Icon icon="carbon:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  </nav>
</template>
