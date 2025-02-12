<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- <template v-if="user"> -->
      <template v-if="isLoggedIn">
      <div class="flex">
        <Sidebar />
        <div class="flex-1">
          <Header :user="user" @logout="handleLogout" @new-requirement="showRequirementForm = true" />
          <div class="p-8">
            
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
      <!-- <LandingPage /> -->
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';
import { useGoogleLogin } from './composables/useGoogleLogin';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import RequirementsList from './components/RequirementsList.vue';
import RequirementForm from './components/RequirementForm.vue';
import LandingPage from './components/LandingPage.vue';


const { user, login, logout } = useGoogleLogin();
const showRequirementForm = ref(false);
const isLoggedIn = ref(false);

onMounted(() => {
  // Check if user is already logged in
  // const auth = getAuth();
  // auth.onAuthStateChanged((currentUser) => {
  //   if (currentUser) {
  //     user.value = currentUser;
  //   }
  // });
});

const handleLogout = async () => {
  await logout();
};

const handleLogin = (loggedInUser) => {
  isLoggedIn.value = true;
  user.value = loggedInUser; // Store the user data
};
const handleRequirementSubmit = (requirement) => {
  // Handle the new requirement submission
  // This could involve adding it to your store or sending it to an API
  console.log('New requirement:', requirement);
  showRequirementForm.value = false;
};
</script>

