import SearchStore from '../Stores/PeopleStore'
import MovieCreditsStore from '../Stores/MovieCreditsStore'
import TvCreditsStore from '../Stores/TvCreditsStore'
const apiKey = '627f5aa49c72d956816a42be38b338cd'

const people = function (id) {
  if (id === '') return
  let url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
    SearchStore.dispatch('personSetter', data)
  })
  .catch(err => {
    console.log(err.message)
  })
}
const getMovieCredits = function (id) {
  if (id === '') return
  let url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
    MovieCreditsStore.dispatch('movieCreditsSetter', data.cast)
  })
  .catch(err => {
    console.log(err.message)
  })
}

const getTvCredits = function (id) {
  if (id === '') return
  let url = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${apiKey}&language=en-US`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
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
