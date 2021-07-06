<template>
<div class="seller-order">
  <b-container class="bv-example-row">
    <b-row class="header">
      <b-col>id</b-col>
      <b-col>productId</b-col>
      <b-col>quantity</b-col>
      <b-col>value</b-col>
      <b-col>status</b-col>
      <b-col></b-col>
    </b-row>
    <b-row v-for="(order, index) in orders" :key="index">
      <b-col>{{ order.id }}</b-col>
      <b-col>{{ order.productId }}</b-col>
      <b-col>{{ order.quantity }}</b-col>
      <b-col>{{ order.value }}</b-col>
      <b-col>{{ order.status }}</b-col>
      <b-col>
        <button @click="cancelOrder(order)">취소</button>
      </b-col>
    </b-row>
  </b-container>

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
    ...mapActions('refund', ['refund']),
    cancelOrder(order) {
      this.refund(order);
    },
  },
}
</script>

<style scoped>
.seller-order .row {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(128, 128, 128, 0.2);
}
.seller-order .row:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}


</style>
