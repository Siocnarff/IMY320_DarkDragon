<template>

  <div id="app">

    <img id="logo" alt="Vue logo" src="./assets/DDDLogo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1 id="DDDHeading">DARK DRAGON DESIGN</h1>
    <router-view/>

    <div id="footer">

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#Navb{
  position: absolute; left: 1200px; top:90px;
  font-family: 'Libre Baskerville',serif;
}

footer{

}
</style>
