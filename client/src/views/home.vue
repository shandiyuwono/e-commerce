<template>
  <div>
     <v-parallax src="http://www.digitaltrends.com/wp-content/uploads/2013/02/wallpaper883199.jpg"></v-parallax>

    <v-container class="elevation-3 main-content">
      <v-layout row wrap>
        <v-flex v-for="game in $store.state.productList" :key="game._id" class="game-card pa-2" xs12 md6 lg3>
          <v-hover>
           <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
           >
            <v-img
              :src="game.image"
              height="350"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="title mb-0">{{game.name}}</h3>
              </div>
            </v-card-title>
            
            <v-divider></v-divider>
            <v-card-actions width="3">  
                <v-layout justify-center wrap>
                  <v-btn flat color="blue" v-on:click="seeProduct(game)">See product info</v-btn>

                </v-layout>
            </v-card-actions>
          </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  methods: {
  

    seeProduct(game) {
      // console.log(game)
      this.$router.push(`/product/${game._id}`)
    }
  }
}
</script>

<style>
.main-content{
  background-color: white;  
}

</style>
