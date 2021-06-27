<template>
  <div class="seller-product">
    <button>Add</button>
    <div v-for="(product, index) in products" :key="index">
      {{product}}
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Product',
  computed: {
    ...mapGetters('product', ['products'])
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions('product', ['fetchProducts']),
  },
}
</script>

<style scoped>

</style>
