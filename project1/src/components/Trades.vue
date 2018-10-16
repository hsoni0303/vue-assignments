<template>
  <div>
    <div id="trades-section">
      <h1>Trades<sup id="live-status">live</sup></h1>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Price (USD)</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item, index) in tradesData' :key='index'>
            <td>{{ item.amount }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.timestamp | getTime}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trades',
  props: ['selected_currency', 'selected_pair'],
  data() {
    return {
      tradesData: [],
     };
  },
  methods: {
    getTrades() {
      const proxy = 'http://localhost:8081/';
      const symbol = this.selected_pair;
      const crypto = this.selected_currency[0].toLowerCase() + this.selected_currency.slice(1);
      const exchange = new ccxt[crypto] ({'proxy': proxy});
      setInterval(() => exchange.fetch_trades(symbol).then(data => this.tradesData = data.slice(data.length-21, data.length-1).reverse())
      , 2000);
    },
  },
  watch: {
    selected_currency() {
      if(this.selected_pair=='' || this.selected_currency==''){
        this.tradesData = [];
        return;
      }
      this.getTrades();
    },
    selected_pair() {
      if(this.selected_pair=='' || this.selected_currency==''){
        this.tradesData = [];
        return;
      }
      this.getTrades();
    },
  },
  filters: {
    getTime(time) {
      let date = new Date(time);
      return date.toLocaleTimeString();
    },
  },
};
</script>

<style>
#trades-section {
    width: 100%;
    height: 600px;
    text-align: center;
    margin: auto;
}
h1 {
  margin: 0;
  color: #fff;
  font-weight: 400;
  font-size: 210%;
  margin-bottom: 20px;
}
#live-status {
  font-size: 40%;
  color: #fff;
  background-color: #F70000;
  border: 1px solid #fff;
  padding: 3px;
  margin-left: 5px;
}
table {
  padding-left: 80px;
}
th {
  padding: 10px 100px;
  color: #fff;
}
td {
  color: #fff;
}
tr:nth-child(odd) {
  background-color: #7785AA;
}
</style>
