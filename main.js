const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },

    removeToCart() {
      if (this.cart.length > 0) this.cart.pop();
      else alert("You don't have any cart to remove")
    }
  },
  
})