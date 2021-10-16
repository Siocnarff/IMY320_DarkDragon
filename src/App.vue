<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/DDDLogo.png">
    <HomePage id="homepage"/>
    <h1 id="DDDHeading">DARK DRAGON DESIGN</h1>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }

}




</script>

<style>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #DCE0D9;
}

#logo{
  width: 100px;
  display: inline-flex;
  position: absolute; left: 50px; top:30px;
}

#DDDHeading{
  position: absolute; left: 300px; top:50px;
  font-size: 50px;
  font-family: 'Spartan',serif;
}


</style>
