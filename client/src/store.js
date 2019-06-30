import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    baseURL: 'http://gamegit-server.syuwono.com',
    productList: [],
    cartList: [],
    transactions: [],
    isLoggedIn: false,
  },
  getters: {
    getTotalPrice(state) {
      let total = 0
      for(let cart of state.cartList) {
        total += cart.totalPrice
      }
      return total
    },

    getTotalProducts(state) {
      let total = 0
      for(let cart of state.cartList) {
        total += cart.quantity
      }
      console.log(total, '========')
      return total
    }
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.productList = payload
    },
    SET_CART(state,payload) {
      state.cartList = payload
    },

    SET_LOGIN(state) {
      if(localStorage.access_token) {
        state.isLoggedIn = true
      }
      else {
       state.isLoggedIn = false 
      }
    },
    SET_TRANSACTIONS(state, payload) {
      state.transactions = payload
      // console.log(payload)
    },
    DECREMENT(state, payload) {
      let i = payload.index 
      if(state.cartList[i].quantity > 0) {
        state.cartList[i].quantity--
        state.cartList[i].totalPrice -= payload.price
      }
    },

    INCREMENT(state, payload) {
      let i = payload.index
      state.cartList[i].quantity++
      state.cartList[i].totalPrice += payload.price
    }

  },
  actions: {
    getProducts(context) {
      axios({
        method: 'GET',
        url: `${this.state.baseURL}/products`
      })
        .then(({data}) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(({response}) => {
          console.log(response)
        })
    },

    getCart(context) {
      axios({ 
        method: 'GET',
        url: `${this.state.baseURL}/carts`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          context.commit('SET_CART',data)
        })
        .catch(({response}) => {
          console.log(response)
        })
    },

    getTransactions(context) {
      axios({ 
        method: 'GET',
        url: `${this.state.baseURL}/transactions`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          context.commit('SET_TRANSACTIONS', data)
        })
        .catch(({response}) => {
          console.log(response)
        })
    }
  }

}) 