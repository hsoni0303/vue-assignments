<template>
<ul>
  <Names v-for="name in names_arr" v-bind:item="name"></Names>
</ul>
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
