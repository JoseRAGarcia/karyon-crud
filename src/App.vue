<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <router-view></router-view>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from './components/Header'
import FooterApp from './components/Footer'


export default {
  name: 'App',
  components: {
    HeaderApp,    
    FooterApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
}
</style>
