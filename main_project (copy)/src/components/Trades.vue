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
  data() {
    return {
      tradesData: [],
      show: false,
    };
  },
  computed: {
    selected_currency: function() {
      return this.$store.getters.getCurrencyId;
    },
    pair: function(){
      return this.$store.getters.getPair;
    }
  },
  methods: {
    setTradesData(data) {
      this.show = true;
      this.tradesData = data.slice(data.length - 21, data.length - 1).reverse();
    },
    getTrades() {
      const proxy = 'http://localhost:8081/';
      const symbol = this.pair;
      const crypto = this.selected_currency;
        // eslint-disable-next-line
      const exchange = new ccxt[crypto]({ proxy });
      const timer = setInterval(() => {
        if (this.pair === '' || this.selected_currency === '') {
          clearInterval(timer);
          return;
        }
        exchange.fetch_trades(symbol).then((data) => {
          this.setTradesData(data);
        });
      }, 2000);
    },
  },
  watch: {
    selected_currency() {
      if (this.pair === '' || this.selected_currency === '') {
        return;
      }
      this.getTrades();
    },
    pair() {
      if (this.pair === '' || this.selected_currency === '') {
        return;
      }
      this.getTrades();
    },
  },
  filters: {
    getTime(time) {
      const date = new Date(time);
      return date.toLocaleTimeString();
    },
  },
};
</script>

<style>
#trades-section {
  width: 100%;
  height: 100vh;
  text-align: center;
  margin: auto;
  background: rgb(74, 36, 84);
  background: linear-gradient(
    0deg,
    rgba(74, 36, 84, 1) 0%,
    rgba(178, 0, 77, 1) 50%
  );
}
h1 {
  margin: 0;
  color: #fff;
  font-weight: 400;
  font-size: 150%;
  margin-bottom: 20px;
}
#live-status {
  font-size: 40%;
  color: #fff;
  background-color: #f70000;
  border: 1px solid #fff;
  padding: 3px;
  margin-left: 5px;
}
table {
  padding-left: 30px;
}
th {
  padding: 10px 70px;
  color: #fff;
}
td {
  color: #fff;
}
tr:nth-child(odd) {
  background-color: #7785aa;
}
</style>
