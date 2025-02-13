<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
    <header class="container mx-auto px-4 py-8">
      <nav class="flex justify-between items-center">
        <div v-motion="headerAnimation">
          <h1 class="text-xl md:text-2xl font-bold text-blue-600">Project Master</h1>
        </div>
        <div v-motion="headerAnimation">
          <button
            @click="handleGoogleLogin"
            class="flex items-center bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              class="w-6 h-6 mr-2"
            />
            Sign in
          </button>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-16">
      <div class="flex flex-col lg:flex-row items-center justify-center md:justify-between">
        <div v-motion="contentAnimation" class="lg:w-1/2 mb-12 lg:mb-0">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Streamline Your Projects with ProjectMaster
          </h2>
          <p class="text-xl mb-8 text-gray-600">
            Manage projects, track requirements, and collaborate with your team
            - all in one intuitive platform.
          </p>
          <button
            class="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors text-lg"
            @click="handleGoogleLogin"
          >
            Get Started
            <ArrowRightIcon class="inline-block w-5 h-5 ml-2" />
          </button>
        </div>

        <div v-motion="imageAnimation" class="lg:w-1/2">
          <img
            src="../assets/landing-bg.jpg?height=400&width=600"
            alt="Project Management Dashboard"
            class="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div v-motion="featuresAnimation" class="mt-24">
        <h3 class="text-2xl font-semibold mb-8 text-center text-gray-800">
          Why Choose ProjectMaster?
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white p-6 rounded-lg shadow-md"
            v-motion="featureItemAnimation(index)"
          >
            <CheckCircleIcon class="w-6 h-6 text-blue-600 mb-4" />
            <p class="text-lg text-gray-700">{{ feature }}</p>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-blue-900 text-white py-8 mt-24">
      <div class="container mx-auto px-4">
        <div
          v-motion="footerAnimation"
          class="flex flex-col md:flex-row justify-between items-center"
        >
          <p>&copy; 2025 ProjectMaster. All rights reserved.</p>
          <div class="mt-4 md:mt-0">
            <a href="#" class="mx-2 hover:text-blue-400 transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="mx-2 hover:text-blue-400 transition-colors"
              >Terms of Service</a
            >
            <a href="#" class="mx-2 hover:text-blue-400 transition-colors"
              >Contact Us</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useGoogleLogin } from "../composables/useGoogleLogin";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/vue/24/solid";

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

const features = [
  "Intuitive project management",
  "Requirements tracking",
  "Task prioritization",
  "Team collaboration",
  "Real-time updates",
];

const headerAnimation = {
  initial: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0, transition: { duration: 500 } },
};

const contentAnimation = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 500, delay: 200 } },
};

const imageAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1, transition: { duration: 500, delay: 400 } },
};

const featuresAnimation = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 500, delay: 600 } },
};

const featureItemAnimation = (index) => ({
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 500, delay: 800 + index * 100 },
  },
});

const footerAnimation = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 500, delay: 1000 } },
};
</script>
