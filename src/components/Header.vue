<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="/">Hipster Shop</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <router-link class="btn btn-primary btn-light ml-2" to="/tiffany/orders" role="button">Ordered</router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
}
</script>
