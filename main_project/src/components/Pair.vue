<template>
  <div>
    <div id="pair-section">
      <h1>PAIR</h1>
      <!-- eslint-disable-next-line -->
      <input v-model="selected_pair" list="currency_pairs" name="currency_pairs" @focus="selected_pair=''">
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
  data() {
    return {
      selected_pair: '',
    };
  },
  methods: {
    getPairs() {
      const x = this.selected_currency;
      if(x == "") {
        return [];
      }
      let pairs = [];
      // eslint-disable-next-line
      const y = new ccxt[x]();
      for (const item in y.markets) {
        pairs.push(item);
      }
      return pairs;
    },
  },
  computed: {
    selected_currency: function() {
      return this.$store.getters.getCurrencyId;
    },
    pairs: function() {
      return this.getPairs();
    },
  },
  watch: {
    selected_currency: function() {
      if(this.selected_currency == ''){
        this.pairs = [];
        this.$store.commit('setPair', '');
        return;
      }
      this.getPairs();
    },
    selected_pair: function() {
      this.$store.commit('setPair', this.selected_pair);
      this.$emit('pair', this.selected_pair);
    },
  }
}
</script>

<style scoped>
#pair-section {
  width: 100%;
  height: 50vh;
  text-align: center;
  margin: 0 auto;
  background: rgb(74, 36, 84);
  background: linear-gradient(
    0deg,
    rgba(74, 36, 84, 1) 0%,
    rgba(178, 0, 77, 1) 50%
  );
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
