<template>
  <div
    :class="[
      'md:flex flex-col md:h-screen bg-indigo-900 text-white p-4 transition-all duration-300',
      isCollapsed ? 'w-20' : 'w-64'
    ]"
  >
    <div class="flex items-center justify-between mb-8">
      <h1 :class="['text-xl md:text-2xl font-bold transition-opacity duration-300', isCollapsed ? 'opacity-0' : 'opacity-100']">
        {{ isCollapsed ? 'PM' : 'ProjectMaster' }}
      </h1>
      <button @click="isCollapsed = !isCollapsed" class="p-2 ">
        <ChevronLeftIcon v-if="!isCollapsed" class="w-6 h-6" />
        <ChevronRightIcon v-else class="w-6 h-6" />
      </button>
    </div>
    <nav>
      <ul class="space-y-2">
        <li v-for="(item, index) in menuItems" :key="index">
          <a
            href="#"
            class="flex items-center p-2 rounded-lg hover:bg-gray-800 transition-colors"
            @mouseenter="scale = 1.05"
            @mouseleave="scale = 1"
            @mousedown="scale = 0.95"
            @mouseup="scale = 1.05"
          >
            <component :is="item.icon" class="w-6 h-6" />
            <span
              :class="[
                'ml-4 transition-all duration-300',
                isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
              ]"
            >
              {{ item.label }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HomeIcon, BriefcaseIcon, CalendarIcon, Cog6ToothIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const isCollapsed = ref(false)
const scale = ref(1)

const menuItems = [
  { icon: HomeIcon, label: "Dashboard" },
  { icon: BriefcaseIcon, label: "Projects" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: Cog6ToothIcon, label: "Settings" },
]
</script>

