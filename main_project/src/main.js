import Vue from 'vue';
import App from './App.vue';
import Exchange from './components/Exchange.vue';
import Pair from './components/Pair.vue';
import Trades from './components/Trades.vue';
import '../node_modules/golden-layout/src/css/goldenlayout-base.css';
import '../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css';
import store from './store';


require('./assets/main.css');
window.ccxt = require('ccxt');

const $ = require('jquery');

window.jQuery = $;
window.$ = $;


Vue.config.productionTip = false;

Vue.component('app', App);
Vue.component('exchange', Exchange);
Vue.component('pair', Pair);
Vue.component('trades', Trades);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
