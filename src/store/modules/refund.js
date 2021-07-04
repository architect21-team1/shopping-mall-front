import axios from "axios";

export default {
    namespaced: true,
    state: {
        refunds: [],
        refundResult: {}
    },
    getters: {
        refunds: state => state.refunds,
        refundResult: state => state.refundResult
    },
    actions: {
        async fetchRefunds(context) {
            const res = await axios.get(process.env.VUE_APP_REFUND_BASE_URL + "/api/refunds");
            context.commit('setRefunds', res.data);
        },
        async orderProduct(context, refund) {
            const res = await axios.post(process.env.VUE_APP_REFUND_BASE_URL + "/api/refunds", refund);
            context.commit('setRefund', res.data);
        }
    },
    mutations: {
        setRefund(state, refundResult) {
          state.refundResult = refundResult
        },
        setRefunds(state, refunds) {
          state.refunds = refunds;
        },
    }
}
