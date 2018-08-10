<template>
  <v-toolbar fixed class="cyan" dark>
      <router-link to="root">
        <v-toolbar-title class="mr-4">
          CusWeb
        </v-toolbar-title>
      </router-link>

      <router-link to="customer">
      <v-btn flat>
          customer
      </v-btn>
      </router-link>

      <router-link to="menu">
      <v-btn flat>
          menu
      </v-btn>
      </router-link>

    <v-spacer></v-spacer>
    
    <v-toolbar-items v-if="!isLoggedIn">
     <router-link to="register">
      <v-btn flat dark top>
          Sign Up
      </v-btn>
      </router-link>

     <router-link to="login">
      <v-btn flat dark top>
          Log In
      </v-btn>
      </router-link>
      </v-toolbar-items>

    <v-toolbar-items v-if="isLoggedIn">
      <v-btn flat dark top @click="logout()">
          Log Out
      </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    name: 'app-header',
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
        }
    },
    computed: {
        isLoggedIn () {
            return this.$store.state.token != null
        }
    }
};
</script>

<style scoped>
</style>