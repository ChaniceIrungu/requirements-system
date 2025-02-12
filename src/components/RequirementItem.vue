<template>
    <li class="bg-white p-4 rounded shadow">
      <h3 class="text-lg font-semibold">{{ requirement.title }}</h3>
      <p>{{ requirement.description }}</p>
      <div class="mt-2">
        <span class="mr-2">Status: {{ requirement.status }}</span>
        <span class="mr-2">Priority: {{ requirement.priority }}</span>
        <span>Stakeholder: {{ requirement.stakeholder }}</span>
      </div>
      <div class="mt-2">
        <label class="mr-2">Update Status:</label>
        <select
          :value="requirement.status"
          @change="updateStatus"
          class="p-1 border rounded"
        >
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
        <button
          @click="$emit('delete-requirement', requirement.id)"
          class="ml-2 bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Requirement, RequirementStatus } from '../models/Requirement';
  
  export default defineComponent({
    name: 'RequirementItem',
    props: {
      requirement: {
        type: Object as PropType<Requirement>,
        required: true
      }
    },
    emits: ['update-status', 'delete-requirement'],
    setup(props, { emit }) {
      const statuses = Object.values(RequirementStatus);
  
      const updateStatus = (event: Event) => {
        const newStatus = (event.target as HTMLSelectElement).value as RequirementStatus;
        emit('update-status', props.requirement.id, newStatus);
      };
  
      return {
        statuses,
        updateStatus
      };
    }
  });
  </script>
  
  