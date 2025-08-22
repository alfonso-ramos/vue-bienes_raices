import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth()
  const authUser = ref(null)
  const errorMessage = ref('')

  // Incluye códigos nuevos y un fallback
  const errorCodes = {
    'auth/invalid-email': 'El email no es válido.',
    'auth/user-not-found': 'No se encontró un usuario con este email.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/invalid-credential': 'Credenciales inválidas.',            // <— nuevo
    'auth/invalid-login-credentials': 'Credenciales inválidas.',     // <— nuevo
    'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde.',
    'auth/user-disabled': 'La cuenta está deshabilitada.'
  }

  const login = async ({ email, password }) => {
    // Limpia el error anterior para que el alert se oculte si todo va bien
    errorMessage.value = ''
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      authUser.value = user
      console.log(authUser.value)
    } catch (error) {
      // Mapea y usa fallback si no está en el diccionario
      errorMessage.value = errorCodes[error.code] || 'Ocurrió un error al iniciar sesión.'
      // Útil para depurar
      console.debug('[Auth Error]', error.code, error.message)
    }
  }

  const hasError = computed(() => !!errorMessage.value)

  return {
    login,
    hasError,
    errorMessage,
    authUser
  }
})
