<template>
  <div>
    <h2 class="text-xl font-semibold mb-2">Requirements List</h2>
    <div class="flex gap-4">
      <div class="mb-4">
        <label class="mr-2">Filter by Status:</label>
        <select v-model="filterStatus" class="p-2 border rounded">
          <option :value="null">All</option>
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="mr-2">Sort by:</label>
        <select v-model="sortBy" class="p-2 border rounded">
          <option value="priority">Priority</option>
          <option value="date">Creation Date</option>
        </select>
      </div>
    </div>

    <div class="flex space-x-4">
      <div
        v-for="status in statuses"
        :key="status"
        class="flex-1 bg-gray-200 p-4 rounded"
      >
      <h3 class="font-bold mb-2">
      {{ status }}: <span class="text-blue-600">{{ requirementStats[status] || 0 }}</span>
    </h3>

        <RequirementItem
          v-for="requirement in sortedRequirements.filter(
            (req) => req.status === status
          )"
          :key="requirement.id"
          :requirement="requirement"
          @update-requirement="updateRequirement"
          @update-status="updateStatus"
          @delete-requirement="deleteRequirement"
          class="mb-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRequirementStore } from "@/stores/requirementStore";
import { RequirementStatus } from "@/models/Requirement";
import RequirementItem from "./RequirementItem.vue";

const store = useRequirementStore();
const filterStatus = ref<RequirementStatus | null>(null);
const sortBy = ref<"priority" | "date">("priority");

const statuses = Object.values(RequirementStatus);
const requirementStats = computed(() => store.requirementStats);

const sortedRequirements = computed(() => {
  return sortBy.value === "priority"
    ? store.sortedByPriority.filter((req) =>
        filterStatus.value ? req.status === filterStatus.value : true
      )
    : store.sortedByDate.filter((req) =>
        filterStatus.value ? req.status === filterStatus.value : true
      );
});

const updateRequirement = (updatedRequirement) => {
  store.updateRequirement(updatedRequirement);
};

const deleteRequirement = (id) => {
  store.deleteRequirement(id);
};
</script>
