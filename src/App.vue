<script setup>
</script>

<template>
  <v-card elevation="3" max-width="1200" class="mx-auto">
    <v-layout>
      <v-app-bar color="pink-accent-3">

        <template v-slot:prepend> 
          <v-btn
            :to="{ name: 'home' }"
          >
            Bienes Raices
          </v-btn>
        </template>
        <template v-slot:append> 
          <v-btn
            :to="{ name: 'home' }"
          >
            Inicio
          </v-btn>

          <v-btn
            :to="{ name: 'login' }"
          >
            Iniciar Sesion
          </v-btn>
        </template>


      </v-app-bar>
      <v-main>
        <v-container>
          <RouterView />

        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
