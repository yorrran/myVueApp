<template>
   <div class = "pl-4 pr-4 pt-2 pb-2">
     <v-flex xs6 offset-xs3>
     <v-toolbar flat dense class="cyan" dark>
       <v-toolbar-title>Register</v-toolbar-title>
     </v-toolbar> 
     <div class = "pl-4 pr-4 pt-2 pb-2">
       <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
      
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
        </div>
        </v-flex>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
        email: '',
        password: '',
        error: null
    }
  },
  methods: {
      async register () {
          try {
          const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
         console.log(response.data);
      } catch (error){
          this.error = error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#register {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
