<template>

  <div id="app">
    <div id="nav">
      <div>
        <img id="logo" src="./assets/DDDLogo.png" alt="DDD">
      </div>
      <div>
        <h1 id="DDDHeading">DARK DRAGON DESIGN</h1>
      </div>
      <div id="navbar">
        <router-link class="link" to="/">Home </router-link>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/merch">Merch</router-link>
      </div>
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
  /*cursor:url(./assets/CursorImg.png), auto;*/
}


#logo {
  width: 50px;
}

#DDDHeading{
  font-size: 57px;
  font-family: 'Spartan',serif;
  font-weight: bold;
}

#nav {
  height: 100%;
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
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  font-size: 27px;
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