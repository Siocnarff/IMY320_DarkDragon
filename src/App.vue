<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/DDDLogo.png">
    <div>
      <Navbar id = "Navb"/>
    </div>
    <h1 id="DDDHeading">DARK DRAGON DESIGN</h1>
    <HomePage id="homepage"/>


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
  cursor:url(./assets/CursorImg.png), auto;
}

#logo{
  width: 100px;
  display: inline-flex;
  position: absolute; left: 100px; top:30px;
}

#DDDHeading{
  position: absolute; left: 300px; top:85px;
  font-size: 50px;
  font-family: 'Spartan',serif;
  font-weight: bold;
}

#Navb{
  position: absolute; left: 1200px; top:90px;
  font-family: 'Spartan',serif;
}




</style>
