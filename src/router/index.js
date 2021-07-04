import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/ProductDetail.vue'),
    props: true,
  },
  {
    path: '/order/:id/complete',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/Order.vue'),
    props: true,
  },
  {
    path: '/:username/orders',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/seller/Order.vue'),
    props: true,
  },
  {
    path: '/seller',
    component: () => import('@/components/seller/Seller.vue'),
    children: [
      {
        path: 'stocks',
        name: 'Stock',
        component: () => import('@/components/seller/Stock.vue'),
      },
      {
        path: 'orders',
        name: 'Order',
        component: () => import('@/components/seller/Order.vue'),
      },
      {
        path: 'refunds',
        name: 'Refund',
        component: () => import('@/components/seller/Refund.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
