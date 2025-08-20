<script setup>
    import { useForm, useField } from 'vee-validate';
    import { loginSchema as validationSchema} from '../validation/loginSchema'

    
    const {handleSubmit} = useForm({ validationSchema });

    const email = useField('email', 'required|email');
    const password = useField('password', 'required|min:8');

    const submit = handleSubmit(() => {
        console.log('Submit');

    });

</script>


<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold text-center" tag="h3">
      Iniciar sesion
    </v-card-title>
    <v-card-subtitle class="text-h5 text-center " tag="h4">
      Inicia sesion con tu cuenta
    </v-card-subtitle>
    <v-form
        class="mt-5"
    >
        <v-text-field
            type="email"
            label="Email"
            name="email"
            required
            bg-color="blue-grey-lighten-5"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
        />
        <v-text-field
            type="password"
            label="Password"
            name="password"
            required
            bg-color="blue-grey-lighten-5"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
        />
        <v-btn
            block
            color="pink-accent-3"   
            class="mt-5"
            @click="submit"
        >
            Iniciar Sesion
        </v-btn>
    </v-form>
  </v-card>
</template>


<style>
</style>