<template>
  <v-container style="width: 40%;" pa-0 class="white" mt-5 elevation-5>
      <v-alert
        :value="alert"
        type="warning"
        transition="scale-transition"
        class="font-weight-bold title"
      >
        Username/password incorrect.
      </v-alert>
      
      <div class="header red darken-4 white--text" style="border:1px solid lightgrey; text-align: center; padding: 18px;">
        <h2>Sign In</h2>
      </div>
      <v-container style="border: 1px solid lightgrey;">
       <form>
        <v-text-field
          prepend-icon="email"
          v-model="email"
          :counter="10"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          prepend-icon="vpn_key"
          type="password"
          v-model="password"
          label="Password"
          required
        ></v-text-field>
          <v-layout row justify-end>
              <v-btn @click="signIn">Sign In</v-btn>
          </v-layout>
        </form>
      </v-container>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      alert: false
    }
  },

  methods: {
    signIn() {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({data}) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_LOGIN')
          this.$router.push('/')
        })
        .catch(err => {
          // console.log(err.response.data.message)
          this.alert = true
        })
    }
  }
}
</script>

<style>

</style>
