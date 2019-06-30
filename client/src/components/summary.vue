<template>
    <div class="elevation-3">
      <v-card>
        <v-card-title primary-title>
          <div class="title">Your Payment Summary</div>
        </v-card-title>
        <v-divider></v-divider>

        <v-layout class="pa-3" row wrap v-for="(cart, index) in $store.state.cartList" :key="index">
          <v-flex xs8 class="subheading">{{cart.product.name}}</v-flex>
          <v-flex xs2 class="subheading font-weight-bold"> x{{cart.quantity}}</v-flex>
          <v-flex xs1 class="subheading green--text">${{cart.totalPrice.toFixed(2)}}</v-flex>
        </v-layout>
        
        <v-divider></v-divider>
        <v-layout class="pa-3">
          <v-flex class="subheading font-weight-bold" xs10>Total price: </v-flex>
          <v-flex class="subheading font-weight-bold" style="color: #F15A22;" xs2> ${{ $store.getters.getTotalPrice.toFixed(2) }}</v-flex>
        </v-layout>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#C62829" class="white--text" @click="checkout">Checkout</v-btn>
        </v-card-actions>
      </v-card>
      

       <v-dialog
          v-model="dialog"
          max-width="420"
        >
          <v-card>
            <v-card-title class="headline">Successfully checkout</v-card-title>

            <v-card-text class="subheading">
              Your transaction has been recorded.
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
                :to="{path: '/cart/history'}"
                @click="viewHistory"
              >
                View transaction history
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Summary',
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    checkout() {
      if(this.$store.state.cartList.length > 0) {
        axios({
          method: 'POST',
          url: `${this.$store.state.baseURL}/carts/checkout`,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({data})  => {
            this.$store.dispatch('getCart')
            this.dialog = true
            
          })
          .catch(err => {
            console.log(err)
          })
      }
    },

    viewHistory() {
      this.dialog = false
      this.$emit('viewHistory')
    }
  }
}
</script>

<style>

</style>
