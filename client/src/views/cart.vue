<template>
  <v-container>
    <v-layout row v-show="!history">
      <v-flex xs8>
        <v-layout row wrap>

          <template v-for="(cart, index) in $store.state.cartList">
            <v-flex :key="index" xs12 class="mt-4">
              <v-card>

                <v-layout row>
                  <v-flex xs4>
                    <v-img :src="cart.product.image" height="200" contain></v-img>
                  </v-flex>
                  
                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{cart.product.name}}</div>
                        <div class="title mt-3" style="color: #F15A22"> ${{ cart.product.price }}</div>
                      </div>
                    </v-card-title>
                    <v-divider class="mb-1"></v-divider>
                  <v-card-actions>
                    <v-layout align-center>
                        <v-btn fab  style="height:30px;width:30px;" @click="decrement(index, cart._id, cart.product.price)"><v-icon>remove</v-icon></v-btn>
                        <v-flex xs2>
                          <v-text-field
                            type="number"
                            :value="cartQuantity(index)"
                            class="inputNumber ml-2 mr-2"
                          >
                          </v-text-field>
                        </v-flex>
                        <v-btn fab style="height:30px;width:30px;" @click="increment(index, cart._id, cart.product.price)"><v-icon>add</v-icon></v-btn>
                    </v-layout>
                    <v-spacer></v-spacer>
                    <v-btn flat v-on:click="removeCart(cart._id)">Remove</v-btn>
                  </v-card-actions>
                  </v-flex>
                </v-layout>


              </v-card>

            </v-flex>
          </template> 
        </v-layout>
      </v-flex>


      <v-flex id="cart-detail" xs4 class="mt-4 ml-3">
          <Summary v-on:viewHistory="history = true" />
          <v-layout justify-center>
            <v-btn color="blue" class="white--text mt-4" @click="toHistory">See your transaction history</v-btn>
          </v-layout>
      </v-flex>
    </v-layout>
  
      <router-view></router-view>
  </v-container>
</template>

<script>
import axios from 'axios'
import Summary from '@/components/summary.vue'

export default {
  name: "Cart",
  components: {
    Summary
  },
  data() {
    return {
      history: false
    }
  },

  created() {
    this.$store.dispatch('getCart')
    if(this.$route.path==='/cart/history') {
      this.history = true
    }
  },  
  watch: {
    $route() {
      if(this.$route.path === '/cart') {
        this.history = false
      } 
    }
  },
  methods: {
    toHistory() {
      this.$router.push('/cart/history')
      this.history = true
    },
    removeCart(id) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.$store.dispatch('getCart')
        })
        .catch(err => {
          console.log(err)
        })
    },

    decrement(index, id, price) {
      this.$store.commit('DECREMENT', {index, price})
      axios({
        method: "PATCH",
        url: `${this.$store.state.baseURL}/carts/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          status: 'decrement',
          price: price
        }
      })
        .then(({data}) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    increment(index, id, price) {
      this.$store.commit('INCREMENT', {index, price})
      axios({
        method: "PATCH",
        url: `${this.$store.state.baseURL}/carts/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          status: 'increment',
          price: price
        }
      })
        .then(({data}) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    cartQuantity(index) {
      return this.$store.state.cartList[index].quantity
    }
  },

}
</script>

<style>
input[type='number']::-webkit-inner-spin-button, 
input[type='number']::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
}

.inputNumber input{
  text-align: center;
}
</style>
