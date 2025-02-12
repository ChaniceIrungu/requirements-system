<template>
  <header class="bg-white shadow-md p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center" :style="{ width: isSearchOpen ? '100%' : 'auto' }">
        <h2 v-if="!isSearchOpen" class="text-xl font-semibold mr-4">Dashboard</h2>
        <div class="relative" :style="{ width: isSearchOpen ? '100%' : 'auto' }">
          <input
            type="text"
            placeholder="Search..."
            :class="['pl-10 py-2 pr-4 rounded-md border border-gray-300', isSearchOpen ? 'w-full' : 'w-48']"
            @focus="isSearchOpen = true"
            @blur="isSearchOpen = false"
          />
          <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div class="px-4">
          <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"  @click="emitNewRequirement" >
        New Requirement
      </button>
        </div>
       
      </div>
      <div class="flex items-center space-x-4">
        <button class="relative">
          <BellIcon class="w-6 h-6" />
          <span class="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        <Menu as="div" class="relative">
          <MenuButton>
            <img
              class="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </MenuButton>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                  Sign out
                </a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </header>
</template>









<!-- <template>
  <header class="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Requirements Dashboard</h1>
    <div class="flex items-center space-x-4">
      <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
        <svg v-if="isDarkMode" class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg v-else class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </button>
      <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"  @click="emitNewRequirement" >
        New Requirement
      </button>
      <div class="flex items-center space-x-2">
        <img :src="user.photoURL" alt="User avatar" class="w-8 h-8 rounded-full">
        <span class="text-sm font-medium">{{ user.displayName }}</span>
      </div>
      <button @click="$emit('logout')" class="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
        Logout
      </button>
    </div>
  </header>
</template> -->

<script setup>
import { ref } from 'vue';
import { defineEmits, defineProps } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const isSearchOpen = ref(false)

const emit = defineEmits(["logout", "new-requirement"]);

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
};

const emitNewRequirement = () => {
  emit("new-requirement"); // Emitting the event to the parent
};
</script>

