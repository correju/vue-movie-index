<template>
  <div class="people">
    <div class="img-wrapper">
        <img v-bind:src="imgUrl + (person.poster_path || person.profile_path)">
    </div>
    <div class="info-wrapper">
        <h1>{{person.name}}</h1>
        <h3>{{person.birthday }}</h3>
        <p>{{person.biography}}</p>
    </div>
    <Cast :data="movieCredits"/>
    <Cast :data="tvCredits" />
  </div>
</template>

<script>
import Cast from './Cast'
import PeopleStore from '../Stores/PeopleStore'
import MovieCreditsStore from '../Stores/MovieCreditsStore'
import TvCreditsStore from '../Stores/TvCreditsStore'
import { people, getMovieCredits, getTvCredits } from '../Services/PeopleService'

export default {
  components: {
    Cast
  },
  name: 'People',
  data () {
    return {
      imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
    }
  },
  computed: {
    person () {
      return PeopleStore.state.person
    },
    tvCredits () {
      return TvCreditsStore.state.tvCredits
    },
    movieCredits () {
      return MovieCreditsStore.state.movieCredits
    }
  },
  beforeCreate () {
    people(this.$route.params.id)
    getMovieCredits(this.$route.params.id)
    getTvCredits(this.$route.params.id)
  },
  watch: {
    '$route' (newValue, oldValue) {
      people(newValue.params.id)
      getMovieCredits(newValue.params.id)
      getTvCredits(newValue.params.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .people {
    display: flex;
    flex-flow: row wrap;
    padding-top: 20px;
    .img-wrapper {
      padding-left: 10px;
      flex: 0 1 auto;
    }
    .info-wrapper{
      padding-left: 40px;
      flex: 1 1 60%;
      p{
        text-align: justify;
        margin: 10px 10px 10px 0;
        max-width: 600px;
      }
    }
  }
</style>
