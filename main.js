/* It's the heart of the vue application */
const app = Vue.createApp({
  data () {
    return {
      product: 'Socks',
      description: 'An amazing product build with Vue app',
    }
  }
})

/* When is created the createApp you must to pass an options or at least a empty object */