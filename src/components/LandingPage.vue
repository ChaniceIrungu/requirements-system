<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
    <div class="max-w-4xl w-full px-4">
      <h1 class="text-5xl font-bold mb-8 text-center">Welcome to ReqMaster</h1>
      <p class="text-xl mb-12 text-center">Streamline your requirements management process with our intuitive and powerful platform.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">Effortless Tracking</h2>
          <p>Keep all your project requirements organized and up-to-date in one centralized location.</p>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">Collaborative Workflow</h2>
          <p>Work seamlessly with your team, stakeholders, and clients to ensure everyone is on the same page.</p>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">Insightful Analytics</h2>
          <p>Gain valuable insights into your project's progress with our powerful analytics tools.</p>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">Customizable Interface</h2>
          <p>Tailor the platform to fit your team's unique needs with our flexible and customizable interface.</p>
        </div>
      </div>
      
      <div class="flex justify-center">
        <button @click="handleGoogleLogin" class="flex items-center bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" class="w-6 h-6 mr-2">
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGoogleLogin } from '../composables/useGoogleLogin';

const { login } = useGoogleLogin();
const emit = defineEmits(["login"]); // Define the event

const isMock = true; // Toggle mock mode for testing

const handleGoogleLogin = async () => {
  if (isMock) {
    // Emit the login event to the parent
    emit("login", {
      uid: "mock-user-123",
      displayName: "Mock User",
      email: "mockuser@example.com",
      photoURL: "https://via.placeholder.com/150",
    });
    return;
  }

  try {
    await login();
    emit("login", user.value); // Emit the real user object after login
  } catch (error) {
    console.error("Google login failed:", error);
  }
};
</script>

