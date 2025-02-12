<script setup>
import { computed } from "vue";
import { useRequirementStore } from '@/stores/requirementStore';
import RequirementForm from '@/components/RequirementForm.vue';
import RequirementsList from '@/components/RequirementsList.vue';



    const store = useRequirementStore();
    const requirementStats = computed(() => store.requirementStats);



</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Requirements Management System</h1>
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Requirement Statistics</h2>
      <div class="flex space-x-4">
        <div
          v-for="(count, status) in requirementStats"
          :key="status"
          class="bg-gray-100 p-2 rounded"
        >
          <span class="font-semibold">{{ status }}:</span> {{ count }}
        </div>
      </div>
    </div>
    <RequirementForm />
    <RequirementsList />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>




