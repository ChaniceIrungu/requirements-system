<template>
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Add New Requirement</h2>
      <form @submit.prevent="addRequirement" class="space-y-2">
        <input v-model="title" placeholder="Title" required class="w-full p-2 border rounded" />
        <textarea v-model="description" placeholder="Description" required class="w-full p-2 border rounded"></textarea>
        <select v-model="priority" required class="w-full p-2 border rounded">
          <option value="" disabled>Select Priority</option>
          <option v-for="priority in priorities" :key="priority" :value="priority">{{ priority }}</option>
        </select>
        <input v-model="stakeholder" placeholder="Stakeholder" required class="w-full p-2 border rounded" />
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add Requirement</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRequirementStore } from '@/stores/requirementStore';
  import { Requirement, RequirementPriority } from '@/models/Requirement';
  
  export default defineComponent({
    name: 'RequirementForm',
    setup() {
      const store = useRequirementStore();
      const title = ref('');
      const description = ref('');
      const priority = ref<RequirementPriority>(RequirementPriority.Medium);
      const stakeholder = ref('');
  
      const priorities = Object.values(RequirementPriority);
  
      const addRequirement = () => {
        const newRequirement = new Requirement(
          title.value,
          description.value,
          priority.value,
          stakeholder.value
        );
        if (newRequirement.validate()) {
          store.addRequirement(newRequirement);
          title.value = '';
          description.value = '';
          priority.value = RequirementPriority.Medium;
          stakeholder.value = '';
        }
      };
  
      return {
        title,
        description,
        priority,
        stakeholder,
        priorities,
        addRequirement
      };
    }
  });
  </script>
  
  