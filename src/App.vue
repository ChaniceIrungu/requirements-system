<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <template v-if="isLoggedIn">
      <div class="flex">
        <Sidebar />
        <div class="md:flex-1">
          <Header
            :user="user"
            @logout="handleLogout"
            @new-requirement="showRequirementForm = true"
          />
          <div class="p-2 md:p-8">
            <RequirementsList />
            <RequirementForm
              :isOpen="showRequirementForm"
              @close="showRequirementForm = false"
              @submit="handleRequirementSubmit"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <LandingPage @login="handleLogin" />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
import { useGoogleLogin } from "./composables/useGoogleLogin";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import RequirementsList from "./components/RequirementsList.vue";
import RequirementForm from "./components/RequirementForm.vue";
import LandingPage from "./components/LandingPage.vue";

const { user, login, logout } = useGoogleLogin();
const showRequirementForm = ref(false);
const isLoggedIn = ref(false);

const handleLogout = async () => {
  await logout();
};

const handleLogin = (loggedInUser) => {
  isLoggedIn.value = true;
  user.value = loggedInUser;
};
const handleRequirementSubmit = (requirement) => {
  console.log("New requirement:", requirement);
  showRequirementForm.value = false;
};
</script>
