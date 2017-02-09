<template>
  <div class="search-panel-wrapper" v-if="checkSearchResults">
    <ul>
    <li v-for="res in getSearchResults" v-on:click="goTo(res.media_type,res.id)">
      <div class="result-wrapper">
        <img v-bind:src="imgUrl + (res.poster_path || res.profile_path)">
        <div class="title-container">
          <span class="title">{{res.original_name || res.title || res.name}}</span>
          <span>{{res.first_air_date}}</span>
          <span>{{res.media_type}}</span>
        </div>
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
import SearchStore from '../Stores/SearchStore'
export default {
  name: 'Results',
  methods: {
    goTo (type, id) {
      this.$parent.$emit('clear-input')
      if (type === 'person') {
        this.$router.push({name: 'People', params: {id}})
      } else {
        this.$router.push({name: 'People', params: {id}})
      }
    }
  },
  data () {
    return {
      imgUrl: 'https://image.tmdb.org/t/p/w45_and_h67_bestv2/'
    }
  },
  computed: {
    checkSearchResults () {
      if (SearchStore.state.searchResult.length > 0) {
        return true
      }
      return false
    },
    getSearchResults () {
      return SearchStore.state.searchResult
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .search-panel-wrapper{
    position: absolute;
    top: 60px;
    left:0;
    width: 100%;
    background-color: #808080;
    height: 400px;
    overflow: auto;
    border: 1px solid #ccc;
    ul{
      list-style-type: none;
      li{
        padding-bottom: 10px;
        .result-wrapper{
          padding-top: 10px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: row wrap;
        }
        img{
          min-width: 45px;
          min-height: 68px;
        }
        .title-container{
          padding-top: 4px;
          padding-left: 5px;
          span{
            display: block;
            &.title{
              font-weight: bold;
            }
          }
        }
      }
      }
    }
</style>
