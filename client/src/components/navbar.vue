<template>
  <div>
    <v-toolbar class="red darken-3 white--text" app>
      <v-toolbar-title id="mainNav">
        <router-link to="/" tag="span" style="cursor: pointer" class="font-weight-bold">
          <span id="logo">{{ appTitle }}</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer>
          <v-text-field
            prepend-inner-icon="search"
            background-color="white"
            v-model="searchProduct"
            label="Search for a product"
            style="width: 85%; margin-top: 10px; margin-left: 188px;"
            box
          ></v-text-field>
      </v-spacer >
        <navIcons />
    
    </v-toolbar>
  </div>
</template>

<script>
import navIcons from '@/components/navicons.vue'

export default {
  name: 'navbar',
  components: {
    navIcons
  },
  data(){
    return {
      appTitle: 'GAMEGIT',
      sidebar: false,
      searchProduct: ''
    }
  },

  computed: {

  }
}
</script>

<style>
  #logo {
    /* font-family: 'Gochi Hand', cursive; */
    font-family: 'Monoton', cursive;
    font-size: 30px;
  }

  #mainNav{
    background-color: #282F37;
    padding: 10px;
  }
</style>
