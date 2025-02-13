<template>
  <transition name="fade">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 flex justify-center items-center z-50  bg-black/40 backdrop-blur-none"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Add New Requirement</h2>
          <button @click="$emit('close')" class="text-gray-600 hover:text-gray-900">✖</button>
        </div>

        <form @submit.prevent="addRequirement" class="space-y-2">
          <input v-model="title" placeholder="Title" required class="w-full p-2 border rounded" />
          <textarea v-model="description" placeholder="Description" required class="w-full p-2 border rounded"></textarea>
          <select v-model="priority" required class="w-full p-2 border rounded">
            <option value="" disabled>Select Priority</option>
            <option v-for="priority in priorities" :key="priority" :value="priority">
              {{ priority }}
            </option>
          </select>
          <input v-model="stakeholder" placeholder="Stakeholder" required class="w-full p-2 border rounded" />

          <div class="flex justify-end space-x-2">
            <button type="button" @click="$emit('close')" class="bg-gray-300 p-2 rounded">
              Cancel
            </button>
            <button type="submit" class="bg-blue-800 text-white p-2 rounded">
              Add Requirement
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRequirementStore } from "@/stores/requirementStore";
import { Requirement, RequirementPriority } from "@/models/Requirement";


defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close", "submit"]);
const store = useRequirementStore();


const title = ref("");
const description = ref("");
const priority = ref<RequirementPriority>(RequirementPriority.Medium);
const stakeholder = ref("");


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
    
  // Reset form fields
    title.value = "";
    description.value = "";
    priority.value = RequirementPriority.Medium;
    stakeholder.value = "";

    // Emit events
    emit("submit");
    emit("close");
  }
};
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
