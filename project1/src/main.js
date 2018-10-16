import Vue from 'vue';
import App from './App.vue';

require('./assets/main.css');
window.ccxt = require('ccxt');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
