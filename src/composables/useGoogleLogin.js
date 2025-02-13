import { ref } from "vue"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export function useGoogleLogin() {
  const user = ref(null)
  const error = ref(null)
  const isMock = true // Set to true for testing without Firebase

  const login = async () => {
    if (isMock) {
      // Simulating a user login
      user.value = {
        uid: "dummy123",
        displayName: "John Doe",
        email: "johndoe@example.com",
        photoURL: "https://via.placeholder.com/150"
      }
      error.value = null
      return
    }

    // Real Firebase logic
    const { getAuth, signInWithPopup, GoogleAuthProvider } = await import("firebase/auth")
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
      error.value = null
    } catch (e) {
      error.value = e.message
      user.value = null
    }
  }

  const logout = async () => {
    if (isMock) {
      user.value = null
      error.value = null
      return
    }

    const { getAuth } = await import("firebase/auth")
    const auth = getAuth()

    try {
      await auth.signOut()
      user.value = null
      error.value = null
    } catch (e) {
      error.value = e.message
    }
  }

  return { user, error, login, logout }
}

