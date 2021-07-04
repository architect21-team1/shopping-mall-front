<template>
  <div class="py-5">
    <b-container class="bg-light py-3 px-lg-5 py-lg-5">
      <b-row>
        <b-col cols="12" lg="5">
          <img v-if="product.picture" class="img-fluid border" style="width: 100%;" :src="product.picture" />
        </b-col>
        <b-col cols="12" lg="7">
          <h2>{{ product.name }}</h2>
          <p class="text-muted"> {{ product.price }} </p>
          <hr/>
          <h6>Product Description:</h6> {{ product.description }}
          <hr/>

          <b-form inline class="text-muted">
            <b-form-input hidden name="product_id" :value="product.id"/>
            <b-form-group prepend="Quantity">
              <b-form-select v-model="quantity" :options="quantities" class="custom-select form-control form-control-lg"></b-form-select>
              <b-button variant="info" size="lg" class="ml-3" @click="order">Buy</b-button>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <hr/>
    </b-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'ProductDetail',
  props: {
    id: {
      type: String || Number,
      required: true
    }
  },
  computed: mapGetters({
    renderMoney: 'currency/renderMoney',
    product: 'product/product'
  }),
  mounted() {
    this.fetchProduct(this.$props.id)
  },
  watch: {
    '$props.id'() {
      this.fetchProduct(this.$props.id)
    },
  },
  data() {
    return {
      quantities: [1,2,3,4,5,10],
      quantity: 1
    }
  },
  methods: {
    ...mapActions('product', ['fetchProduct']),
    ...mapActions('order', ['orderProduct']),
    // async addToCart() {
    //   this.$store.dispatch('cart/addToCart', {
    //     id: this.product.id,
    //     quantity: this.quantity
    //   })
    //   // await this.$router.push("/cart")
    // },
    async order() {
      const order = await this.orderProduct({
        productId: this.product.id,
        quantity: this.quantity,
        value: this.product.price,
        status: 'NEW',
      });
      console.log(order);
      this.$router.push(`/order`);
    }
  }
}
</script>

<style scoped>
</style>
