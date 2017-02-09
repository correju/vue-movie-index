<template>
  <nav>
    <i class="glyphicon glyphicon-search my-search"></i>
    <div class="search-wrapper">
      <input id="search-input" v-on:keyup="search" type="text" class="search" placeholder="Write here to search for a movie">
      <i class="glyphicon glyphicon-remove close-btn" v-on:click="clearInput()"></i>
    </div>
    <Results />
  </nav>
</template>

<script>
import Results from './Results'
import { searchAPI } from '../Services/SearchService'

export default {
  components: {
    Results
  },
  name: 'Navigation',
  methods: {
    search (event) {
      let value = event.target.value
      searchAPI(value)
    },
    clearInput () {
      document.querySelector('#search-input').value = ''
      searchAPI('')
    }
  },
  mounted () {
    this.$on('clear-input', e => {
      document.querySelector('#search-input').value = ''
      searchAPI('')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @bkg-color: #4f4f4f;
  nav {
    display: flex;
    align-items: flex-end;
    .search-wrapper{
      position: relative;
      width: calc(~"100% - 30px");
      .search {
        position: relative;
        width: 100%;
        border: 0;
        background-color: @bkg-color;
        font-weight: bold;
        font-size: 1.5em;
        height: 60px;
        outline: none;
        top: 0;
        color: #fff;
      }
      .close-btn{
        display: flex;
        align-items: center;
        position: absolute;
        right: 10px;
        height: 60px;
        font-size: 1.3em;
        color: #fff;
      }
    }
    .my-search {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      width: 30px;
      height: 60px;
      color: #fff;
      margin: 0;
      top:0;
      background-color: @bkg-color;
    }
  }
</style>
