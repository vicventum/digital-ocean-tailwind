<script setup lang="ts"></script>

<template>
  <section class="relative z-10 bg-white shadow px-10">
    <div class="grid grid-cols-[40%_1fr_1fr_1fr]">
      <div class="flex flex-col bg-sky-50 py-10 pl-20">
        <h3 class="px-4 font-bold uppercase">Featured Products</h3>
        <a href="#" class="group mr-10 rounded px-4 py-5 hover:bg-sky-200">
          <h4 class="pb-2 text-xl font-medium group-hover:text-do-blue-light">Droplets</h4>
          <div class="text-gray-600">Scalable virtual machines</div>
        </a>
        <a href="#" class="group mr-10 rounded px-4 py-5 hover:bg-sky-200">
          <h4 class="pb-2 text-xl font-medium group-hover:text-do-blue-light">Kubernetes</h4>
          <div class="text-gray-600">Managed Kubernetes clusters</div>
        </a>
        <a href="#" class="group mr-10 rounded px-4 py-5 hover:bg-sky-200">
          <h4 class="pb-2 text-xl font-medium group-hover:text-do-blue-light">App Platform</h4>
          <div class="text-gray-600">Get apps to market faster</div>
        </a>
        <a href="#" class="group mr-10 rounded px-4 py-5 hover:bg-sky-200">
          <h4 class="pb-2 text-xl font-medium group-hover:text-do-blue-light">Databases</h4>
          <div class="text-gray-600">Worry-free setup & maintance</div>
        </a>
        <a href="#" class="group mr-10 rounded px-4 py-5 hover:bg-sky-200">
          <h4 class="pb-2 text-xl font-medium group-hover:text-do-blue-light">Spaces</h4>
          <div class="text-gray-600">Simple object storage</div>
        </a>
      </div>

      <div class="flex w-1/5 flex-col gap-y-10 px-10 2xl:w-1/5">
        <div>
          <h3 class="mb-5 mt-10 font-bold uppercase">Compute</h3>
          <ul class="flex flex-col gap-y-2 text-gray-600">
            <li><a href="#" class="hover:text-gray-900">Droplets</a></li>
            <li><a href="#" class="hover:text-gray-900">Kubernetes</a></li>
            <li><a href="#" class="hover:text-gray-900">App platform</a></li>
          </ul>
        </div>
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
      </div>
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
  </section>
</template>
