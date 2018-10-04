<template>
<div>
  <table>
    <tr>
      <th>
        Names
      </th>
    </tr>
    <Names v-for="name in names_arr" v-bind:item="name"></Names>
  </table>
</div>
</template>

<script>
import Names from './components/Names.vue';

export default {
  name: 'app',
  components: {
    Names
  },
  data() {
    return {
      names_arr: ['John', 'Jack', 'Jessy', 'Bunny', 'James'],
    }
  }
}
</script>
