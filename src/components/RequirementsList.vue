<template>
  <div class="px-2">
    <h2 class="text-xl font-semibold mb-2">Requirements List</h2>
    <div class="grid grid-rows-2 md:flex md:gap-4">
      <div class="mb-4 text-sm md:text-base">
        <label class="mr-2 ">Filter by Status:</label>
        <select v-model="filterStatus" class="p-2 border rounded border-indigo-400">
          <option :value="null">All</option>
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <div class="mb-4 text-sm md:text-base">
        <label class="mr-2 ">Sort by:</label>
        <select v-model="sortBy" class="p-2 border rounded border-indigo-400">
          <option value="priority">Priority</option>
          <option value="date">Creation Date</option>
        </select>
      </div>
    </div>

    <div class="md:flex space-x-4 bg-gray-200">
      <div
        v-for="status in statuses"
        :key="status"
        class="flex-1 bg-gray-200 p-4 rounded "
      >
        <h3 class="font-bold mb-2">
          {{ status }}:
          <span class="text-blue-600">{{ requirementStats[status] || 0 }}</span>
        </h3>

        <draggable
          :list="sortedRequirements.filter((req) => req.status === status)"
          group="requirements"
          item-key="id"
          @change="handleDragChange(status, $event)"
          class="mb-4"
        >
          <template #item="{ element }">
            <RequirementItem
              :requirement="element"
              @update-requirement="updateRequirement"
              @delete-requirement="deleteRequirement"
              class="draggable-item mb-4 cursor"
            />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRequirementStore } from "../stores/requirementStore";
import { RequirementStatus } from "../models/Requirement";
import RequirementItem from "./RequirementItem.vue";
import draggable from "vuedraggable";

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

const handleDragChange = (newStatus, event) => {
  if (event.added) {
    const movedRequirement = event.added.element;
    movedRequirement.status = newStatus;
    store.updateRequirementStatus(movedRequirement.id, newStatus);
  }
};
</script>
