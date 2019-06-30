<template>
  <v-container>
          <v-layout row wrap>
          
          <template>
            <v-flex xs12 class="mt-4">
              <v-card>
                <v-layout row>
             
                  <v-img :src="game.image" height="300" contain></v-img>   

                  <v-flex xs8>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline pb-2">{{game.name}}</div>
                        <v-divider></v-divider>
                        <div class="subheading pt-3">{{game.description}}</div>
                      
                      </div>
                    </v-card-title>

                  <v-card-actions>
                        <v-layout row wrap class="ml-2">
                          <div class="subheading font-weight-bold mr-3">
                            Price: ${{game.price}}
                          </div>
                          <div class="subheading font-weight-bold">
                            Stock: {{game.stock}}
                          </div>
                        </v-layout>

                         <v-layout align-center>
                          <v-btn fab  style="height:30px;width:30px;" @click="decrement"><v-icon>remove</v-icon></v-btn>
                          <v-flex xs2>
                            <v-text-field
                              type="number"
                              class="inputNumber ml-2 mr-2"
                              v-model="count"
                            >
                            </v-text-field>
                          </v-flex>
                          <v-btn fab style="height:30px;width:30px;" @click="increment"><v-icon>add</v-icon></v-btn>
                         </v-layout>

                      <v-layout row justify-center>
                        <v-btn
                          color="#CB4046"
                          dark
                          v-on:click="addToCart"
                        >
                          Add to Cart
                        </v-btn>

                        <v-dialog
                          v-model="dialog"
                          max-width="400"
                        >

                  
                        <cartSuccess v-if="$store.state.isLoggedIn" :cart="cart"
                          :game="game" :count="count" v-on:closeModal="dialog = false"/>
                        
                        <cartFail v-if="$store.state.isLoggedIn === false" v-on:closeModal="dialog = false"/>

                        </v-dialog>
                      </v-layout>
                  </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-card>

            </v-flex>
          </template> 
        </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import cartSuccess from '@/components/cartsuccess.vue'
import cartFail from '@/components/cartfail.vue'

export default {
  data() {
    return{
      dialog:false,
      count: 1,
      game: {},
      cart: {}
    }
  },
  computed: {
    getTotalPrice() {
      return this.count * this.game.price
    }
  },
  components: {
    cartSuccess,
    cartFail
  },
  created() {
    let id = this.$route.params.id

    axios({ 
      method: 'GET',
      url: `${this.$store.state.baseURL}/products/${id}`,
    })
      .then(({data}) => {
        this.game = data
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    increment () {
      if(this.count < this.game.stock) {
        this.count++
      }
    },
    decrement () {
      if(this.count !== 0) {
        this.count--
      }
    },

    addToCart() {
      this.dialog = true
      if(localStorage.access_token){
        this.cart = {
          productId: this.$route.params.id,
          quantity: this.count,
          totalPrice: this.getTotalPrice,
          price: this.game.price
        }
        axios({ 
          method: 'POST',
          url: `${this.$store.state.baseURL}/carts`,
          data: this.cart,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({data}) => {
            this.dialog = true
          })
          .catch(err => {
            console.log(err)
          })
      }
    }

  
  }

}
</script>

<style>
.inputStock input[type='number'] {
    -moz-appearance:textfield;
}
.inputStock input::-webkit-outer-spin-button,
.inputStock input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}



</style>
