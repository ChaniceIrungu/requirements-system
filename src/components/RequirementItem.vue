<template>
  <div
    class="bg-white rounded-lg shadow-md p-4 mb-4 cursor-move hover:shadow-lg transition-shadow duration-300"
    :class="{ 'border-l-4': !isEditing, 'border-l-8': isEditing }"
    :style="{ borderLeftColor: getPriorityColor(requirement.priority) }"
  >
    <div v-if="!isEditing" @click="startEditing" class="cursor-pointer">
      <h3 class="text-lg font-semibold mb-2">{{ requirement.title }}</h3>
      <p class="text-gray-600 mb-3">{{ requirement.description }}</p>
      <div class="flex flex-wrap gap-2 mb-3">
        <span
          :class="{
            'bg-yellow-100 text-yellow-800': requirement.status === 'Draft',
            'bg-blue-100 text-blue-800': requirement.status === 'Review',
            'bg-green-100 text-green-800': requirement.status === 'Approved',
            'bg-purple-100 text-purple-800':
              requirement.status === 'Implemented',
          }"
          class="px-3 py-1 rounded-full text-sm font-medium"
        >
          {{ requirement.status }}
        </span>

        <span
          :class="{
            'bg-orange-100 text-orange-800': requirement.priority === 'High',
            'bg-blue-100 text-blue-800': requirement.priority === 'Medium',
            'bg-gray-100 text-gray-800': requirement.priority === 'Low',
          }"
          class="px-2 py-1 rounded-full text-sm"
        >
          {{ requirement.priority }}
        </span>

        <span
          class="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium text-gray-700"
        >
        <Placeholder/>
        </span>
      </div>
    </div>
    <div v-else class="space-y-3 p-4">
      <h1 class="font-bold">Edit Project Requirements</h1>

      <input
        v-model="editedRequirement.title"
        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Title"
      />
      <textarea
        v-model="editedRequirement.description"
        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        rows="3"
      ></textarea>
      <!-- start experimental editor -->
      <div class="py-2">
        <QuillEditor
          theme="snow"
          class="border focus:outline-none focus:ring-2 focus:ring-blue-50"
        />
      </div>
      <!-- end experimental editor -->
      <div class="flex gap-2">
        <select
          v-model="editedRequirement.status"
          class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
        <select
          v-model="editedRequirement.priority"
          class="p-2 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
          <Placeholder class=""/>
       
      </div>
    </div>
    <div class="flex justify-end mt-3 space-x-2">
      <button
        v-if="isEditing"
        @click="saveChanges"
        class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
      >
        Save
      </button>
      <button
        v-if="isEditing"
        @click="cancelEditing"
        class="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
      >
        Cancel
      </button>

      <TrashIcon
        v-if="!isEditing"
        @click="deleteRequirement"
        class="h-6 w-6 text-red-500 hover:text-red-600"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { TrashIcon } from "@heroicons/vue/24/solid";
import { QuillEditor } from "@vueup/vue-quill";
import Placeholder from "./assignee-placeholder.vue"
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const props = defineProps({
  requirement: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update-requirement", "delete-requirement"]);

const isEditing = ref(false);
const editedRequirement = reactive({ ...props.requirement });

const statuses = ["Draft", "Review", "Approved", "Implemented"];

const startEditing = () => {
  isEditing.value = true;
};

const saveChanges = () => {
  emit("update-requirement", { ...editedRequirement });
  isEditing.value = false;
};

const cancelEditing = () => {
  Object.assign(editedRequirement, props.requirement);
  isEditing.value = false;
};

const deleteRequirement = () => {
  emit("delete-requirement", props.requirement.id);
};

const getPriorityColor = (priority) => {
  const colors = {
    Low: "#00FF00",
    Medium: "#FFFF00",
    High: "#f60638",
  };
  return colors[priority] || "#00FF00";
};
</script>
