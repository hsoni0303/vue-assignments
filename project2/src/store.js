import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'trades',
  storage: localStorage,
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
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
  getters: {
    getCurrencyId(state) {
      return state.currency_id;
    },
    getPair(state) {
      return state.selected_pair;
    },
  },
});