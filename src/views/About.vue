<template>
  <div class="about">
    <div id="top">
      <div class="grid1">
        <div>
          <img id="Diver" src="../assets/DiverForAbout.png">
          <h1 id="HeadingStyle"><span style="color: #F9C80E; opacity: 0.7">The Only Deep <span style="color: #DB162F;">Water</span> Developers</span></h1>
          <p class="par" id="p1"> With our experience in software development, web design and, get
            this - wreck diving, we go wherever it is required to go to ensure your
            software works.</p>
        </div>

        <div>

          <img id="PathFinder" src="../assets/Pf.png">
          <p class="par" id="p2">Where other teams say there is no way, we find a way. No one on our team is scared of a little path finding algorithm.</p>
          <h1 id="PFheading">The Path Finders</h1>
        </div>

      </div>
    </div>






    <div>

    </div>

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">

        <div class="MemberGrid">

          <p class="member_heading"> {{ value.Name }}</p>

          <ul class="inner_list">
            <li>
              <p class="member_info">{{value.text}}</p>
            </li>
            <li>
              <a  :href="value.github_link"> <img src="https://img.icons8.com/nolan/64/linkedin.png"/></a>
            </li>
          </ul>

          <img class="member_images" :src="value.link">

        </div>

      </li>
    </ul>


  </div>


</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  name: "AboutPage",

  el: '#v-for-members',
  data() {
    return {
      items: [
        {Name: 'Patric Edwards', link: require('../assets/PatricEdwards.jpg'), info_heading:'AI MUSIC RECOMMENDATION', catch_phrase:"Your tunes always lekker"
          , text:"This app helps you find the music you're into quickly on the go. It learns what you're into and recommends songs you might like, dont worry it learns with you so as your tastes in music changes so will its recommendations.",
          github_link: "https://www.linkedin.com/in/patric-edwards-220879204/"},
        {Name: "Josua Botha", link: require('../assets/JosuaBotha.jpg'), info_heading:'ESCAPE ROOM SIMULATION AND PLANNING',catch_phrase:"Always a way out",
          text:"Escape Room Planner intends to solve an organisational problem that user’s face when constructing an escape room. The system will allow users to simulate custom escape rooms that can be implemented in the real world",
          github_link: "https://www.linkedin.com/in/josua-botha-63417274/"},
        {Name: "Henco Du Preez", link: require('../assets/Henco.jpg'), info_heading:'ESCAPE ROOM SIMULATION AND PLANNING',catch_phrase:"Always a way out",
          text:"Escape Room Planner intends to solve an organisational problem that user’s face when constructing an escape room. The system will allow users to simulate custom escape rooms that can be implemented in the real world",
          github_link: "https://www.linkedin.com/in/henco-du-preez-a775bb148/"},


      ]


    }
  },

  methods: {

  },

  mounted() {
    window.scrollTo(0, 0);
    gsap.registerPlugin(TextPlugin);
    let tl = gsap.timeline({delay: 0.5});
    tl  .from("#Diver", {duration: 4, x: -120, opacity: 0}, 2)
        .from("#PathFinder", {duration: 4.3, x: 120, opacity: 0}, 3)
        .from("#HeadingStyle", {opacity: 0, scale: 0.98, x: -40, duration: 4.5}, 0)
        .from("#PFheading", {duration: 2.5, x: 220, opacity: 0}, 3.8)
        .from(".par", {duration: 2, opacity: 0}, 6)
  }
}


</script>

<style>

  .MemberGrid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 20px;
  }

  .grid1{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #Diver{
    position: relative;
    left: 20%;
    top: 60px;
    width: 80%;
  }

  #PathFinder{
    position: relative;
    left: -10%;
    top: 45%;
    width: 80%;
    height: 350px;
  }

  .about{

  }

  #PFheading{
    position: relative;
    top: 230px;

    margin-bottom: 300px;
    color: #F9C80E;
    opacity: 0.9;
    font-family: 'Spartan',serif;
    font-size: 57px;

  }

  #HeadingStyle{
    position: relative;
    left: 15px;
    top: -300px;
    font-family: 'Spartan',serif;
    font-size: 57px;
  }

  #p1{
    position: relative;
    left: 40%;
    top: -10px;

  }
  #p2{
    position: relative;
    left: 20%;
    top: -130px;
  }

  .par{
    opacity: 0.5;
    width: 500px;
    text-align: left;
    color: #F5F9E9;
    font-style: italic;
    font-family: "Libre Baskerville", serif;
    font-size: 27px;
  }

  #top{
    position: relative;
    height: 880px;
    background-color: #1A1423;
    margin-bottom: 5%;
  }

  .member_images{
    width: 400px;
    align-content: center;
    border-radius: 10px;

  }
  .member_heading{
    font-family: 'Spartan',serif;
    font-size: 50px;
    color: #F9C80E;
  }

  .member_info{

  }

  .inner_list{
    list-style: none;
    margin-right: 30px;
  }

</style>
