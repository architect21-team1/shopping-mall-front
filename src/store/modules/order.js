import axios from "axios";

export default {
    namespaced: true,
    state: {
        orders: [],
        orderResult: {}
    },
    getters: {
        orders: state => state.orders,
        orderResult: state => state.orderResult
    },
    actions: {
        async fetchOrders(context) {
            const res = await axios.get(process.env.VUE_APP_ORDER_BASE_URL + "/api/orders");
            context.commit('setOrders', res.data);
        },
        async orderProduct(context, order) {
            const res = await axios.post(process.env.VUE_APP_ORDER_BASE_URL + "/api/orders", order);
            context.commit('setOrder', res.data);
        }
    },
    mutations: {
        setOrder(state, orderResult) {
          state.orderResult = orderResult
        },
        setOrders(state, orders) {
          state.orders = orders;
        },
    }
}
