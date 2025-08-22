<script setup>
import { useForm, useField } from 'vee-validate'
import { loginSchema as validationSchema } from '../validation/loginSchema'
import { useAuthStore } from '../stores/auth.js'

const { handleSubmit } = useForm({ validationSchema })
const auth = useAuthStore()

// No pases reglas estilo v3; el schema ya valida.
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

const submit = handleSubmit(values => {
  auth.login(values)
})
</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold text-center" tag="h3">
      Iniciar sesión
    </v-card-title>

    <v-card-subtitle class="text-h5 text-center" tag="h4">
      Inicia sesión con tu cuenta
    </v-card-subtitle>

    <!-- Usa el mensaje directo; si existe, mostramos el alert -->
    <v-alert
      v-if="auth.errorMessage"
      class="my-5"
      type="error"
      :title="auth.errorMessage"
    />

    <v-form class="mt-5">
      <v-text-field
        type="email"
        label="Email"
        bg-color="blue-grey-lighten-5"
        v-model="email"                     
        :error-messages="emailError" 
      />
      <v-text-field
        type="password"
        label="Password"
        bg-color="blue-grey-lighten-5"
        v-model="password"
        :error-messages="passwordError"
      />

      <v-btn
        block
        color="pink-accent-3"
        class="mt-5"
        @click="submit"
      >
        Iniciar Sesión
      </v-btn>
    </v-form>
  </v-card>
</template>
