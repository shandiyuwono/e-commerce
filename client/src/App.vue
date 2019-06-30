<template>
  <div id="app">
    <v-app>
    <navbar/>
     <v-content>
      <v-layout row>    
        <v-flex xs8 offset-xs2 id="content">
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
  </div>
</template>

<script>

import navbar from './components/navbar'

export default {
  name: "App",
  components: {
    navbar
  },
  data(){
    return {
     page: '',
    }
  },
  created() {
      this.$store.commit('SET_LOGIN')

  }
 
};
</script>

<style>
#app {
  background-color: #F0F4FB;
}

</style>
