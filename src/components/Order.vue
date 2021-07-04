<template>
  <div class="py-5">
    <b-container class="bg-light py-3 px-lg-5">
      <b-row class="mt-5 py-2">
        <b-col>
          <h3>Your order is complete!</h3>
          <p>
            Order Comfirmation ID: <strong>{{order.id}}</strong>
            <br/>
          </p>
          <p>
            Total Paid: <strong>{{ order.value }}</strong>
          </p>
          <router-link to="/">
            <b-button variant="primary">Browse other products &rarr;</b-button>
          </router-link>
        </b-col>
      </b-row>
      <hr/>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Order',
  computed: mapGetters({
    order: 'order/orderResult',
  })
}
</script>
