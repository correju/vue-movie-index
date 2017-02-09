<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {
    Navigation
  },
  name: 'app'
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
  }
</style>
