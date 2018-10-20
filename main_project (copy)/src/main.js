import Vue from 'vue';
import GoldenLayout from 'golden-layout';
import App from './App.vue';
import '../node_modules/golden-layout/src/css/goldenlayout-base.css';
import '../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css';
import store from './store';
import Exchange from './components/Exchange.vue';
import Pair from './components/Pair.vue';
import Trades from './components/Trades.vue';

require('./assets/main.css');
window.ccxt = require('ccxt');

window.$ = require('jquery');


Vue.config.productionTip = false;

const VueApp = {
  store,
};

const config = {
  setting: {
    hasHeader: true,
    showPopoutIcon: true,
    showCloseIcon: true,
    showMaximizeIcon: true,
  },
  dimensions: {
    borderwidth: 2,
    minItemHeight: 10,
    minItemWidth: 10,
    headerHeight: 20,
    dragProxyWidth: 300,
    dragProxyHeight: 200,
  },
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'column',
          content: [
            {
              type: 'component',
              componentName: 'Exchange',
              componentState: { vueTemplate: Exchange },
            },
            {
              type: 'component',
              componentName: 'Pair',
              componentState: { vueTemplate: Pair },
            },
          ],
        },
        {
          type: 'component',
          componentName: 'Trades',
          componentState: { vueTemplate: Trades },
        },
      ],
    },
  ],
};

const gLayout = new GoldenLayout(config, $('#app'));

gLayout.registerComponent('Exchange', (container, state) => {
  const id = 'exchange';
  const html = `<div id=${id}></div>`;
  container.getElement().html(html);
  setTimeout(() => {
    VueApp.el = `#${id}`;
    VueApp.render = h => h(state.vueTemplate);
    new Vue(VueApp);
  });
});
gLayout.registerComponent('Pair', (container, state) => {
  const id = 'pair';
  const html = `<div id=${id}></div>`;
  container.getElement().html(html);
  setTimeout(() => {
    VueApp.el = `#${id}`;
    VueApp.render = h => h(state.vueTemplate);
    new Vue(VueApp);
  });
});
gLayout.registerComponent('Trades', (container, state) => {
  const id = 'trades';
  const html = `<div id=${id}></div>`;
  container.getElement().html(html);
  setTimeout(() => {
    VueApp.el = `#${id}`;
    VueApp.render = h => h(state.vueTemplate);
    new Vue(VueApp);
  });
});

gLayout.init();
