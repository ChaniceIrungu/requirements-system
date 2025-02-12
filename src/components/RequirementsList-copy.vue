<template>
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Requirements</h2>
    <div class="flex mb-4 space-x-4">
      <select v-model="statusFilter" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="">All Statuses</option>
        <option value="Draft">Draft</option>
        <option value="Review">Review</option>
        <option value="Approved">Approved</option>
        <option value="Implemented">Implemented</option>
      </select>
      <select v-model="sortBy" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="priority">Sort by Priority</option>
        <option value="createdAt">Sort by Creation Date</option>
      </select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RequirementItem
        v-for="requirement in filteredAndSortedRequirements"
        :key="requirement.id"
        :requirement="requirement"
        @update="updateRequirement"
        @delete="deleteRequirement"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRequirementStore } from '../stores/requirementStore-copy';
import RequirementItem from './RequirementItem-copy.vue';

const store = useRequirementStore();

const statusFilter = ref('');
const sortBy = ref('priority');

const filteredAndSortedRequirements = computed(() => {
  let requirements = store.requirements;
  
  if (statusFilter.value) {
    requirements = requirements.filter(req => req.status === statusFilter.value);
  }
  
  return requirements.sort((a, b) => {
    if (sortBy.value === 'priority') {
      return b.priority - a.priority;
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });
});

const updateRequirement = (updatedRequirement) => {
  store.updateRequirement(updatedRequirement);
};

const deleteRequirement = (id) => {
  store.deleteRequirement(id);
};
</script>

