import PeopleStore from '../Stores/PeopleStore'
import MovieCreditsStore from '../Stores/MovieCreditsStore'
import TvCreditsStore from '../Stores/TvCreditsStore'
const apiKey = '627f5aa49c72d956816a42be38b338cd'
/**
 * This 3 to avoid calling the api again if it was called before
 */
const peopleMap = new Map()
const movieCreditsMap = new Map()
const tvCredistMap = new Map()

const people = function (id) {
  id = parseInt(id)
  if (peopleMap.get(id)) {
    PeopleStore.dispatch('personSetter', peopleMap.get(id))
    return
  }
  let url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
    peopleMap.set(id, data)
    PeopleStore.dispatch('personSetter', data)
  })
  .catch(err => {
    console.log(err.message)
  })
}
const getMovieCredits = function (id) {
  id = parseInt(id)
  if (movieCreditsMap.get(id)) {
    MovieCreditsStore.dispatch('movieCreditsSetter', movieCreditsMap.get(id))
    return
  }
  let url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
    movieCreditsMap.set(id, data.cast)
    MovieCreditsStore.dispatch('movieCreditsSetter', data.cast)
  })
  .catch(err => {
    console.log(err.message)
  })
}

const getTvCredits = function (id) {
  id = parseInt(id)
  if (tvCredistMap.get(id)) {
    TvCreditsStore.dispatch('tvCreditsSetter', tvCredistMap.get(id))
    return
  }
  let url = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${apiKey}&language=en-US`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
    tvCredistMap.set(id, data.cast)
    TvCreditsStore.dispatch('tvCreditsSetter', data.cast)
  })
  .catch(err => {
    console.log(err.message)
  })
}

export {
  people,
  getMovieCredits,
  getTvCredits
}
