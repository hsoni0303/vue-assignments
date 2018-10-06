<template>
    <tr>
      <td :class="['list-item']">
        {{ item }}
      </td>
    </tr>
</template>

<script>
export default {
  name: 'Names',
  props: ['item'],
};
</script>

<style lang="css">
.list-item {
  padding: 20px;
  background: #333;
  color: white;
  width: 100px;
}
.list-item:hover {
  background-color: lightgreen;
}
</style>
