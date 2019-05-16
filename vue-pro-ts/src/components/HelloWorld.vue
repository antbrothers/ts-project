<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>      
      <li>
        <a href="javascript:void(0)" @click="addToCart({ id: 1,
  title: '32',
  price: 1,
  inventory: 1})" >
          types-script 发送请求
        </a>
      </li>
    </ul>
    <ul class="list">
    <li v-for="p in products" :key="p.id">
      {{ p.title }} - {{ p.price | currency }}
      <br>
      <el-button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </el-button>
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '../store'
import { dispatchAddToCart } from '../store/dispatches'
export default Vue.extend({
  name: 'HelloWorld',
  computed: {
    products (): Product[] {
      return this.$store.getters.allProducts
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$store.dispatch('getAllProducts')
  },
  methods: {
    addToCart (p: Product) {
      console.log(this)
      dispatchAddToCart(p)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
