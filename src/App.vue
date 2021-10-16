<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/DDDLogo.png">
    <div>
      <Navbar id = "Navb"/>
    </div>
    <HomePage id="homepage"/>
    <h1 id="DDDHeading">DARK DRAGON DESIGN</h1>




  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import Navbar from "./components/Navbar";


export default {
  name: 'App',
  components: {
    HomePage,Navbar
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
  position: absolute; left: 400px; top:40px;
  font-size: 50px;
  font-family: 'Spartan',serif;
}

#Navb{
  position: absolute; left: 1000px; top:40px;
  font-family: 'Spartan',serif;
}


</style>
