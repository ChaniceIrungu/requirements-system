<template>
    <div>
      <h2 class="text-xl font-semibold mb-2">Requirements List</h2>
      <div class="mb-4">
        <label class="mr-2">Filter by Status:</label>
        <select v-model="filterStatus" class="p-2 border rounded">
          <option :value="null">All</option>
          <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="mr-2">Sort by:</label>
        <select v-model="sortBy" class="p-2 border rounded">
          <option value="priority">Priority</option>
          <option value="date">Creation Date</option>
        </select>
      </div>
      <ul class="space-y-2">
        <RequirementItem
          v-for="requirement in sortedRequirements"
          :key="requirement.id"
          :requirement="requirement"
          @update-status="updateStatus"
          @delete-requirement="deleteRequirement"
        />
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useRequirementStore } from '@/stores/requirementStore';
  import { RequirementStatus } from '@/models/Requirement';
  import RequirementItem from './RequirementItem.vue';
  
  export default defineComponent({
    name: 'RequirementList',
    components: {
      RequirementItem
    },
    setup() {
      const store = useRequirementStore();
      const filterStatus = ref<RequirementStatus | null>(null);
      const sortBy = ref<'priority' | 'date'>('priority');
  
      const statuses = Object.values(RequirementStatus);
  
      const filteredRequirements = computed(() => store.filteredRequirements(filterStatus.value));
  
      const sortedRequirements = computed(() => {
        return sortBy.value === 'priority'
          ? store.sortedByPriority.filter(req => filterStatus.value ? req.status === filterStatus.value : true)
          : store.sortedByDate.filter(req => filterStatus.value ? req.status === filterStatus.value : true);
      });
  
      const updateStatus = (id: string, newStatus: RequirementStatus) => {
        store.updateRequirementStatus(id, newStatus);
      };
  
      const deleteRequirement = (id: string) => {
        store.deleteRequirement(id);
      };
  
      return {
        filterStatus,
        sortBy,
        statuses,
        sortedRequirements,
        updateStatus,
        deleteRequirement
      };
    }
  });
  </script>
  
  