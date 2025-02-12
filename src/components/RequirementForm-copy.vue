<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4">{{ isEditing ? 'Edit Requirement' : 'Create New Requirement' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
        <input v-model="form.title" id="title" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
        <textarea v-model="form.description" id="description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
      </div>
      <div class="mb-4">
        <label for="priority" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
        <select v-model="form.priority" id="priority" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
        <select v-model="form.status" id="status" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="Draft">Draft</option>
          <option value="Review">Review</option>
          <option value="Approved">Approved</option>
          <option value="Implemented">Implemented</option>
        </select>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
          {{ isEditing ? 'Update' : 'Create' }} Requirement
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRequirementStore } from '../stores/requirementStore-copy';

const props = defineProps({
  requirement: {
    type: Object,
    default: null
  }
});

const store = useRequirementStore();

const isEditing = computed(() => !!props.requirement);

const form = ref({
  title: props.requirement?.title || '',
  description: props.requirement?.description || '',
  priority: props.requirement?.priority || 2,
  status: props.requirement?.status || 'Draft'
});

const handleSubmit = () => {
  if (isEditing.value) {
    store.updateRequirement({ ...props.requirement, ...form.value });
  } else {
    store.createRequirement(form.value);
  }
  // Reset form or close modal
  form.value = { title: '', description: '', priority: 2, status: 'Draft' };
};
</script>

