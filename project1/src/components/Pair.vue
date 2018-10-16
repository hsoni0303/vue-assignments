<template>
  <div>
    <div id="pair-section">
      <h1>PAIR</h1>
      <!-- eslint-disable-next-line -->
      <input v-model='selected_pair' list="currency_pairs" name="currency_pairs"
       @focus="selected_pair=''" @input="$emit('selected_pair', selected_pair)">
      <datalist id="currency_pairs">
          <option v-for="pair in pairs" :value="pair" :key="pair">
          </option>
      </datalist>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pair',
  props: ['selected_currency'],
  data() {
    return {
      selected_pair: '',
      pairs: [],
    };
  },
  methods: {
    getPairs() {
      this.selected_pair = '';
      this.pairs = [];
      if (this.selected_currency === '') {
        this.$emit('selected_pair', this.selected_pair);
        return;
      }
      const x =
        this.selected_currency[0].toLowerCase() +
        this.selected_currency.slice(1);
      // eslint-disable-next-line
      const y = new ccxt[x]();
      // eslint-disable-next-line
      for (const item in y.markets) {
        this.pairs.push(item);
      }
    },
  },
  watch: {
    selected_currency() {
      this.getPairs();
    },
  },
};
</script>

<style scoped>
#pair-section {
  width: 100%;
  height: 100px;
  text-align: center;
  margin: 0 auto;
}
h1 {
  color: white;
  margin: 0;
  padding-top: 70px;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 150%;
}
#pair-section input {
  border-style: none;
  border-radius: 3%;
  padding: 10px;
}
</style>
