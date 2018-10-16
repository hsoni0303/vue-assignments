<template>
  <div>
    <div id="pair-section">
      <h1>PAIR</h1>
      <input v-model='selected_pair' list="currency_pairs" name="currency_pairs" @input="$emit('selected_pair', selected_pair)">
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
      if(this.selected_currency==''){
        this.$emit('selected_pair', this.selected_pair);
        return;
      }
      let x = this.selected_currency[0].toLowerCase() + this.selected_currency.slice(1);
      let y = new ccxt[x] ();
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
    font-size: 210%;
}
#pair-section input {
    border-style: none;
    border-radius: 3%;
    padding: 10px;
}
</style>
