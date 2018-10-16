<template>
  <div>
    <div id="exchange-section">
      <h1>EXCHANGE</h1>
      <input v-model="selected_currency" list="currency" name="currency" @focus="selected_currency = '';$emit('selected_currency', selected_currency)" @input="$emit('selected_currency', selected_currency)">
      <datalist id="currency">
          <option v-for="(item,index) in all_currency" :value="item | capitalize" :key="index">
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
      // eslint-disable-next-line
      all_currency: ccxt.exchanges,
    };
  },
  filters: {
    capitalize(currency) {
      return currency[0].toUpperCase() + currency.slice(1);
    },
  },
};

</script>

<style scoped>
#exchange-section {
    width: 100%;
    height: 200px;
    text-align: center;
    margin: auto;
    padding-top: 40px;
}
h1 {
    color: white;
    margin: 0;
    padding-top: 70px;
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 210%;
}
#exchange-section input {
    border-style: none;
    border-radius: 3%;
    padding: 10px;
}
</style>
