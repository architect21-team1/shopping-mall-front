<template>
  <b-container>
    <b-table striped hover :items="products"></b-table>
  </b-container>
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
