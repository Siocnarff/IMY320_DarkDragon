<template>

  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/DDDLogo.png">
    <div id="nav">
      <div id="navbar">
        <router-link class="link" to="/">Home </router-link>
        <router-link class="link" to="/about">About</router-link>
      </div>
      <h1 id="DDDHeading">DARK DRAGON DESIGN</h1>
    </div>
    <router-view/>

    <div id="footer">
        <Footer></Footer>
    </div>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #DCE0D9;
  cursor:url(./assets/CursorImg.png), auto;
  overflow-y: hidden;
}


#logo {
  width: 50px;
  display: inline-flex;
  position: absolute; left: 100px; top:30px;
}

#DDDHeading{
  position: absolute; left: 200px; top:40px;
  font-size: 50px;
  font-family: 'Spartan',serif;
  font-weight: bold;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #DB162F;
}

#navbar {
  float: right;
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  padding: 30px 50px 30px 30px;
}

.link {
  padding-left: 30px;
}

footer{

}
</style>
<script>
import Footer from "./components/Footer";
export default {
  components: {Footer}
}
</script>