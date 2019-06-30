<template>
  <v-card>
    <v-card-title class="headline">Please sign in before continuing</v-card-title>

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
        @click="toSignIn"
      >
        Procceed to Sign in
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'cartFail',
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    toSignIn() {
      this.$router.push('/signin')
    }
  }
}
</script>

<style>

</style>
