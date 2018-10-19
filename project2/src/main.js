import Vue from 'vue';
import vgl from 'vue-golden-layout';
// eslint-disable-next-line
import $ from 'jquery';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';
import App from './App.vue';
import store from './store';

require('./assets/main.css');
window.ccxt = require('ccxt');

Vue.config.productionTip = false;
Vue.use(vgl);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
