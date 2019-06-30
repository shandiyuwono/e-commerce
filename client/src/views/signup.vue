<template>
    <v-container style="width: 40%;" pa-0 class="white" mt-5 elevation-5>
      <v-alert
      :value="alert"
      type="warning"
      transition="scale-transition"
    >
      <span style="font-weight: bold; font-size: 18px;"> {{ errorMsg }} </span>
    </v-alert>
      <div class="header red darken-4 white--text" style="border:1px solid lightgrey; text-align: center; padding: 18px;">
        <h2>Sign Up</h2>
      </div>
      <v-container style="border: 1px solid lightgrey;">
       <form>
          <v-text-field
          prepend-icon="person"
          v-model="firstName"
          :counter="10"
          label="First Name"
          required
        ></v-text-field>
         <v-text-field
          prepend-icon="person"
          v-model="lastName"
          :counter="10"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          prepend-icon="email"
          v-model="email"
          :counter="10"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          prepend-icon="vpn_key"
          v-model="password"
          label="Password"
          required
        ></v-text-field>

          <v-layout row justify-end>
              <v-btn @click="register">Sign Up</v-btn>
          </v-layout>
        </form>
      </v-container>

        <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Successfully registered</v-card-title>

        <v-card-text>
          Please continue to the Sign In page.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="toSignIn"
          >
            Continue to sign in
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data() {
    return {
      errorMsg: '',
      alert : false,
      dialog: false,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },

  methods: {

    register() {
      axios({ 
        method: 'POST',
        url: 'http://localhost:3000/users/register',
        data: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
      })
        .then(({data}) => {
          this.dialog = true
        })
        .catch(err => {
          let error = err.response.data.message
          let msg;

          if(error.includes('password')) {
            msg = 'Password is too short'
          }
          else {
            msg = error.split(':').slice(2).toString()
          }
          this.errorMsg = msg
          this.alert = true
        })
    },

    toSignIn() {
      this.dialog = false
      this.$router.push('/signin')
    }
  }
}
</script>

<style>

</style>
