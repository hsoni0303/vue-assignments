<template>
  <div id="app">
    <table>
      <tr>
        <th>
          Names <button @click="sorted">Sort</button>
        </th>
      </tr>
      <Names v-for="name in names_arr" v-bind:item="name" :key="name"></Names>
    </table>
  </div>
</template>

<script>
import Names from './components/Names.vue';

export default {
  name: 'app',
  components: {
    Names,
  },
  data() {
    return {
      names_arr: ['John', 'Adam', 'Kyle', 'Carlos', 'Zed'],
      toggle_button: false,
    };
  },
  methods: {
    sorted() {
      if (!this.toggle_button) {
        this.names_arr = this.names_arr.sort();
        this.toggle_button = !this.toggle_button;
      } else {
        this.names_arr = this.names_arr.reverse();
        this.toggle_button = !this.toggle_button;
      }
    },
  },
};
</script>

<style>
</style>
