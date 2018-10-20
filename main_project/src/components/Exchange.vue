<template>
  <div>
    <div id="exchange-section">
      <h1>EXCHANGE</h1>
      <!-- eslint-disable-next-line -->
      <input v-model="selected_currency" @input="setCurrencyId" list="currency" name="currency" @focus="selected_currency=''; currency_id='';">
      <datalist id="currency">
          <option v-for="(item,index) in exchanges" :key="index" :value="item">
          </option>
      </datalist>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exchange',
  data() {
    return {
      selected_currency: '',
      exchanges: {},
      currency_id: '',
    };
  },
  methods: {
    setCurrencyId() {
      for ( const id in this.exchanges) {
        if(this.selected_currency == this.exchanges[id]) {
          this.currency_id = id;
        };
      }
    },
    setExchanges() {
      ccxt.exchanges.forEach(id => {
        let exchange = new ccxt[id] ();
        this.exchanges[id] = exchange.name;
         });
      this.$store.commit('setExchanges', this.exchanges);
    },
  },
  created() {
    this.setExchanges();
  },
  watch: {
    currency_id: function(id) {
      this.$store.commit('setCurrency', id);
    },
  },
};
</script>

<style scoped>
#exchange-section {
  width: 100%;
  height: 50vh;
  text-align: center;
  margin: auto;
  padding-top: 40px;
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
#exchange-section input {
  border-style: none;
  border-radius: 3%;
  padding: 10px;
}
</style>
