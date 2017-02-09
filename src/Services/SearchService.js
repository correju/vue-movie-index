import SearchStore from '../Stores/SearchStore'

const searchAPI = function (query) {
  if (query === '') {
    SearchStore.dispatch('searchListSetter', [])
    return
  }
  let apiKey = '627f5aa49c72d956816a42be38b338cd'
  let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en_US&query=${query}`
  fetch(url, {
    method: 'get'
  })
  .then((resp) => resp.json())
  .then(function (data) {
    SearchStore.dispatch('searchListSetter', data.results)
  })
  .catch(err => {
    console.log(err.message)
  })
}

export {
  searchAPI
}
