<template>
  <v-toolbar-items class="hidden-xs-only">
     <v-btn
        flat
        class="white--text"
        :to="{ path: '/'}"
      >
      <v-icon left dark>home</v-icon>
        Home
      </v-btn>
      
      <v-btn
        flat
        class="white--text"
        @click="toCart"
      >
      <v-badge left>
        <template v-slot:badge>
          <span>{{ $store.getters.getTotalProducts }}</span>
        </template>
        <v-icon left dark>shopping_cart</v-icon>
        Cart
      </v-badge>
      </v-btn>

      <v-btn
        flat
        class="white--text"
        :to="{ path: '/signup'}"
        v-if="$store.state.isLoggedIn === false"
      >
      <v-icon left dark>face</v-icon>
        Sign Up
      </v-btn>
        <v-btn
        flat
        class="white--text"
        :to="{ path: '/signin'}"
        v-if="$store.state.isLoggedIn === false"
      >
      <v-icon left dark>input</v-icon>
        Sign in
      </v-btn>
        <v-btn
        flat
        class="white--text"
        v-on:click="signOut"
        v-if="$store.state.isLoggedIn"
      >
      <v-icon left dark>lock_open</v-icon>
        Sign out
      </v-btn>

      <v-dialog
      v-model="dialog"
      max-width="420"
    >
      <v-card>
        <v-card-title class="headline">You must sign in before continuing</v-card-title>

        <v-card-text class="subheading">
          Sign in and gain full access to the shopping cart and your transaction history. 
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Close
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            :to="{path: '/signin'}"
            @click="dialog=false"
          >
            Sign in 
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar-items>
</template>

<script>
export default {
  name:'navIcons',
  data() {
    return {
      dialog: false
    }
  },
  methods: {
     signOut() {
      localStorage.removeItem('access_token')
      this.$store.commit('SET_LOGIN')
    },
    toCart() {
      if(localStorage.access_token) {
        this.$router.push('/cart')
      } else {
        this.dialog = true
      } 
    }
  }
}
</script>

<style>

</style>
