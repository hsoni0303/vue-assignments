import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currency_id: '',
    exchanges: '',
    selected_pair: '',
  },
  mutations: {
    setCurrency(state, currency) {
      // eslint-disable-next-line
      state.currency_id = currency;
    },
    setExchanges(state, exchanges) {
      // eslint-disable-next-line
      state.exchanges = Object.assign(exchanges);
    },
    setPair(state, pair) {
      // eslint-disable-next-line
      state.selected_pair = pair;
    },
  },
  actions: {

  },
  getters: {
    getCurrencyId(state) {
      return state.currency_id;
    },
    getPair(state) {
      return state.selected_pair;
    },
  },
});
