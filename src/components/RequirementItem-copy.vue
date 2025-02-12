<!-- <template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105">
    <h3 class="text-lg font-semibold mb-2">{{ requirement.title }}</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ requirement.description }}</p>
    <div class="flex justify-between items-center">
      <span :class="statusClass">{{ requirement.status }}</span>
      <span :class="priorityClass">Priority: {{ requirement.priority }}</span>
    </div>
    <div class="mt-4 flex justify-end space-x-2">
      <button @click="$emit('update', requirement)" class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Edit</button>
      <button @click="$emit('delete', requirement.id)" class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300">Delete</button>
    </div>
  </div>
</template> -->


<template>
  <div class="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-gray-800">{{ requirement.title }}</h3>
      <span 
        :class="{
          'bg-yellow-100 text-yellow-800': requirement.status === 'draft',
          'bg-blue-100 text-blue-800': requirement.status === 'review',
          'bg-green-100 text-green-800': requirement.status === 'approved',
          'bg-purple-100 text-purple-800': requirement.status === 'implemented'
        }"
        class="px-3 py-1 rounded-full text-sm font-medium"
      >
        {{ requirement.status }}
      </span>
    </div>
    
    <p class="mt-2 text-gray-600">{{ requirement.description }}</p>
    
    <div class="mt-4 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <span 
          :class="{
            'bg-red-100 text-red-800': requirement.priority === 'critical',
            'bg-orange-100 text-orange-800': requirement.priority === 'high',
            'bg-blue-100 text-blue-800': requirement.priority === 'medium',
            'bg-gray-100 text-gray-800': requirement.priority === 'low'
          }"
          class="px-2 py-1 rounded text-sm"
        >
          {{ requirement.priority }}
        </span>
        <span class="text-sm text-gray-500">
          Created: {{ new Date(requirement.createdAt).toLocaleDateString() }}
        </span>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="$emit('update', requirement)" 
          class="text-gluecharm-600 hover:text-gluecharm-700 px-2 py-1 rounded"
        >
          Edit
        </button>
        <button 
          @click="$emit('delete',requirement.id)" 
          class="text-red-600 hover:text-red-700 px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  requirement: {
    type: Object,
    required: true
  }
});

const statusClass = computed(() => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-semibold';
  switch (props.requirement.status) {
    case 'Draft': return `${baseClasses} bg-gray-200 text-gray-800`;
    case 'Review': return `${baseClasses} bg-yellow-200 text-yellow-800`;
    case 'Approved': return `${baseClasses} bg-green-200 text-green-800`;
    case 'Implemented': return `${baseClasses} bg-blue-200 text-blue-800`;
    default: return baseClasses;
  }
});

const priorityClass = computed(() => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-semibold';
  switch (props.requirement.priority) {
    case 1: return `${baseClasses} bg-red-200 text-red-800`;
    case 2: return `${baseClasses} bg-orange-200 text-orange-800`;
    case 3: return `${baseClasses} bg-green-200 text-green-800`;
    default: return baseClasses;
  }
});
</script>

