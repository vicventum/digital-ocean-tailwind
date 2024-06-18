<script setup lang="ts">
const sectionLinks = [
  {
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
  },
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
  },
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
  },

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
]
</script>

<template>
  <nav class="relative z-10 bg-white px-10 shadow">
    <div class="grid grid-cols-[40%_1fr_1fr_1fr] grid-rows-[auto_auto] items-start">
      <template v-for="section in sectionLinks" :key="section.title">
        <div v-if="section.featured" class="row-span-2 flex flex-col bg-sky-50 py-10 pl-20">
          <h3 class="px-4 font-bold uppercase">{{ section.title }}</h3>

          <a
            v-for="link in section.links"
            :key="link.name"
            :href="link.href"
            class="group mr-10 rounded px-4 py-5 transition hover:bg-sky-200"
          >
            <h4 class="pb-2 text-xl font-medium transition group-hover:text-do-blue-light">
              {{ link.name }}
            </h4>
            <div class="text-gray-600">{{ link.desc }}</div>
          </a>
        </div>

        <div class="space-y-5 p-8" v-else>
          <h3 class="font-bold uppercase">{{ section.title }}</h3>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.name" class="block text-gray-600">
              <a :href="link.href" class="hover:text-gray-900">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </template>

      <!-- <div class="flex w-1/5 flex-col gap-y-10 px-10 2xl:w-1/5">
        <div>
          <h3 class="mb-5 mt-10 font-bold uppercase">Storage</h3>
          <ul class="flex flex-col gap-y-2 text-gray-600">
            <li><a href="#" class="hover:text-gray-900">Spaces Object Storage</a></li>
            <li><a href="#" class="hover:text-gray-900">Volumes Block Storage</a></li>
          </ul>
        </div>
      </div>

      <div class="">
        <div>
          <h3 class="mb-5 mt-10 font-bold uppercase">Managed Databases</h3>
          <ul class="flex flex-col gap-y-2 text-gray-600">
            <li><a href="#" class="hover:text-gray-900">Mongo DB</a></li>
            <li><a href="#" class="hover:text-gray-900">MySQL</a></li>
            <li><a href="#" class="hover:text-gray-900">PostgreSQL</a></li>
            <li><a href="#" class="hover:text-gray-900">Redis™</a></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-5 mt-10 font-bold uppercase">Networking</h3>
          <ul class="flex flex-col gap-y-2 text-gray-600">
            <li><a href="#" class="hover:text-gray-900">Virtual Private Cloud (VPC)</a></li>
            <li><a href="#" class="hover:text-gray-900">Cloud Firewalls</a></li>
            <li><a href="#" class="hover:text-gray-900">Load Balancers</a></li>
            <li><a href="#" class="hover:text-gray-900">Floating IPs</a></li>
            <li><a href="#" class="hover:text-gray-900">DNS</a></li>
          </ul>
        </div>
      </div>

      <div class="">
        <div>
          <h3 class="mb-5 mt-10 font-bold uppercase">Developer Tools</h3>
          <ul class="flex flex-col gap-y-2 text-gray-600">
            <li><a href="#" class="hover:text-gray-900">API</a></li>
            <li><a href="#" class="hover:text-gray-900">CLI</a></li>
            <li><a href="#" class="hover:text-gray-900">Monitoring</a></li>
            <li><a href="#" class="hover:text-gray-900">Teams</a></li>
            <li><a href="#" class="hover:text-gray-900">Deploy to Digital Ocean button</a></li>
            <li><a href="#" class="hover:text-gray-900">Support</a></li>
          </ul>
        </div>
      </div> -->
    </div>
    <a
      href="#"
      class="group flex items-center justify-center border-t border-gray-300 py-2 text-gray-400 hover:text-gray-900"
    >
      See all products
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-2 h-4 w-4 group-hover:text-gray-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
  </nav>
</template>
