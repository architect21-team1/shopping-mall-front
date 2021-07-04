<template>
  <div class="seller-refund">
    <b-container>
      <b-table striped hover :items="refunds"></b-table>
    </b-container>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Refund',
  computed: {
    ...mapGetters('refund', ['refunds'])
  },
  created() {
    this.fetchRefunds();
  },
  methods: {
    ...mapActions('refund', ['fetchRefunds']),
  },
}
</script>

<style scoped>

</style>
