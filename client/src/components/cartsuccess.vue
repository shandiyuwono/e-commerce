<template>
    <v-card>
      <v-card-title class="headline">Successfully added to cart</v-card-title>
  
      <v-layout row>
        <v-flex>
          <v-img :src="game.image" height="100" contain></v-img>
        </v-flex>

        <v-flex>
          <v-card-text>
            <div class="subheading font-weight-bold">{{game.name}}</div>
            <div class="subheading"><span class="font-weight-bold">Quantity: </span> {{ count }}</div>
          </v-card-text>
        </v-flex>
      </v-layout>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="red darken-1"
          flat="flat"
          @click="closeModal"
        >
          Close
        </v-btn>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="toCart"
        >
          See cart
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: ['cart', 'game', 'count'],
  name: 'cartSuccess',

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },

    toCart() {
      this.$router.push('/cart')
    },

    
  }
}
</script>

<style>

</style>
