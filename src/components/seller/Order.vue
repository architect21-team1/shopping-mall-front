<template>
<div class="seller-order">
  <div v-for="(order, index) in orders" :key="index">
    {{order}}
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Order',
  computed: {
    ...mapGetters('order', ['orders'])
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    ...mapActions('order', ['fetchOrders']),
  },
}
</script>

<style scoped>

</style>
