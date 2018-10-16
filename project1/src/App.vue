<template>
  <div id="app">
    <div class="part1">
    <exchange-section  @selected_currency="selectedCrypto"></exchange-section>
    <pair-section :selected_currency="selected_currency" @selected_pair="selectedPair"></pair-section>
    </div>
    <trades-section class="part2" :selected_currency="selected_currency" :selected_pair="selected_pair"></trades-section>
  </div>
</template>

<script>
import Exchange from './components/Exchange.vue';
import Pair from './components/Pair.vue';
import Trades from './components/Trades.vue';

export default {
  name: 'app',
  components: {
    'exchange-section': Exchange,
    'pair-section': Pair,
    'trades-section': Trades,
  },
  data() {
    return {
      selected_currency: '',
      selected_pair: '',
    }
  },
  methods: {
    selectedCrypto(currency) {
      if(currency==''){
        this.selected_pair = '';
      }
      this.selected_currency = currency;
    },
    selectedPair(pair) {
      this.selected_pair = pair;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Oxygen', sans-serif;
  background: rgb(74,36,84);
  background: linear-gradient(0deg, rgba(74,36,84,1) 0%, rgba(178,0,77,1) 50%);
  display: flex;
}
.part1 {
  width: 30%;
}
.part2 {
  width: 70%;
}
</style>
