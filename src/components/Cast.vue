<template>
  <div class="custom-table">
    <table class="table">
      <thead>
        <th>Title</th>
        <th>Date</th>
        <th>character</th>
      </thead>
      <tbody>
        <tr v-for="el in checkData">
          <td>{{el.title || el.name}}</td>
          <td>{{el.release_date || el.name}}</td>
          <td>{{el.character}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cast',
  data () {
    return {
      Message: 'Cast'
    }
  },

  props: [ 'data' ],
  computed: {
    checkData () {
      return this.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
