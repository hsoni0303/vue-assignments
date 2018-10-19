<template>
  <div id="app">
    <golden-layout class="screen">
      <gl-row>
        <gl-col>
          <gl-component title="Exchange">
            <!-- eslint-disable-next-line -->
            <exchange-section></exchange-section>
          </gl-component>
          <gl-component title="Pair">
            <!-- eslint-disable-next-line -->
            <pair-section></pair-section>
          </gl-component>
        </gl-col>
        <gl-col>
          <gl-component title="Trades">
            <!-- eslint-disable-next-line -->
            <trades-section></trades-section>
          </gl-component>
        </gl-col>
      </gl-row>
    </golden-layout>
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
};
</script>

<style>
#app {
  font-family: "Oxygen", sans-serif;
  background: rgb(74, 36, 84);
  background: linear-gradient(
    0deg,
    rgba(74, 36, 84, 1) 0%,
    rgba(178, 0, 77, 1) 50%
  );
  display: flex;
}
gl-component {
  overflow: scroll;
}
.screen {
  width: 100vw;
  height: 100vh;
}
</style>
