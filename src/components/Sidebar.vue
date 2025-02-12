<template>
  <div :class="['bg-gray-800 text-white w-64 min-h-screen p-4 transition-all duration-300', { '-ml-64': !isOpen }]">
    <button @click="toggleSidebar" class="absolute top-4 right-4 md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <h2 class="text-2xl font-semibold mb-6">ReqMaster</h2>
    
    <nav>
      <ul class="space-y-2">
        <li>
          <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200">Requirements</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200">Analytics</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200">Settings</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import Header from './RequirementItem.vue';

const isOpen = ref(true);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

