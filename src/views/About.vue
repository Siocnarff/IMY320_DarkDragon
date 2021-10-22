<template>
  <div class="about">
    <div id="top">
    </div>
    <img id="Diver" src="../assets/DiverForAbout.png">
    <h1 id="HeadingStyle"><span style="color: #DB162F;">The </span><span style="color: #DCE0D9;">Only Deep Water Developers </span></h1>
    <p class="par" id="p1"> With our experience in software development, web design and, get
      this - wreck diving, we go wherever it is required to go to ensure your
      software works.</p>


    <img id="PathFinder" src="../assets/Pf.png">
    <p class="par" id="p2">Where other teams say there is no way we find a way. No one on our team is scared of a little path finding algorithm.</p>
    <h1 id="PFheading">The Path Finders</h1>



  </div>


</template>

<style>

  #Diver{
    position: relative;
    right:20%;
    top: 170px;
    width: 40%;
    height: 400px;

  }

  #PathFinder{
    position: absolute;
    left: 45%;
    top: 55%;
    width: 40%;
  }

  .about{

  }

  #PFheading{
    position: relative;
    left: 30%;
    top: 230px;
    margin-bottom: 600px;
    color: #DCE0D9;
    font-style: italic;
    font-family: 'Libre Baskerville',serif;
    font-size: 30px;

  }

  #HeadingStyle{
    position: absolute;
    left: 7.5%;
    top: 52%;
    font-style: italic;
    font-family: 'Libre Baskerville',serif;
    font-size: 30px;
  }

  #p1{
    position: relative;
    left: 60%;
    top: -150px;

  }
  #p2{
    position: relative;
    left: 20%;
    top: 100px;
  }

  .par{
    width: 400px;
    text-align: left;
    color: #DCE0D9;
    font-size: 20px;
  }

  #top{
    position: absolute;
    top: 200px;
    width:100%;
    height: 850px;

    background-color: #372549;
  }

</style>
