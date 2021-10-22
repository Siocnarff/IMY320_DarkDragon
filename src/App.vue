<template>

  <div id="app">
    <div id="nav">
      <div>
        <img id="logo" src="./assets/DDDLogo.png" alt="DDD">
      </div>
      <div id="DDDHeading">
        DARK DRAGON DESIGN
      </div>
      <div id="navbar">
        <router-link class="link" to="/">Home</router-link>
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
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #DCE0D9;
  /*cursor:url(./assets/CursorImg.png), auto;*/
}


#logo {
  width: 70px;
}

#DDDHeading{
  font-size: 57px;
  font-family: 'Spartan', sans-serif;
  font-weight: bold;
  display: flex;
  padding-top: 6px;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
}

#nav {
  display: grid;
  grid-template-columns: 2fr 8fr 5fr;
  height: 150px;
  padding-left: 30px;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
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
  padding: 30px 80px 30px 30px;
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