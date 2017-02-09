import Vue from 'vue'
import Router from 'vue-router'
import Empty from 'components/Empty'
import People from 'components/People'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Empty',
      component: Empty
    },
    {
      path: '/people/:id',
      name: 'People',
      component: People
    }
  ]
})
