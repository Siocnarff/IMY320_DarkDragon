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
    <div id="header_padding"></div>
   <router-view/>
    <div id="footer">
        <Footer></Footer>
    </div>
  </div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Spartan:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Spartan:wght@700&family=Ubuntu+Mono&display=swap');
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F5F9E9;
  overflow-x: hidden;
  /*cursor:url(./assets/CursorImg.png), auto;*/
}

#logo {
  width: 70px;
  margin-left: 100px;
}

#DDDHeading{
  font-size: 57px;
  font-family: 'Spartan', sans-serif;
  font-weight: bold;
  display: flex;
  padding-top: 6px;
  align-items: center; /* align vertical */
}

p {
  font-family: 'pt-serif', sans-serif;
}

#nav {
  position: fixed;
  width: 100%;
  z-index: 100;
  /*background-color: #E6EBE0;*/
  background-color: #F5F9E9;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  height: 150px;
  padding-left: 30px;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
}

#header_padding {
  height: 150px;
}

#nav a {
  font-weight: bold;
  color: #F9C710;
}

#nav a.router-link-exact-active {
  text-decoration: none;
}

#nav a:hover {
  font-weight: normal;
  text-decoration: none;
}

#navbar {
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  text-align: center;
  font-weight: lighter;
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