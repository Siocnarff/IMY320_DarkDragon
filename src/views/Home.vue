<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<template>
  <div class="main">
    <div>
      <div id="banner">
      </div>
      <div id="header_container">
        <div id="header_image">
          <img src="../assets/Main.png" alt="liftoff">
        </div>
        <div id="headings">
          <h1 id = "header_heading"><span style="color:#DCE0D9">SOFTWARE FOR THE</span><span style="color:#DB162F"> BRAVE</span> </h1>
          <p id="header_subtext" >We build beautiful <span style="color: #F9C80E">{</span> software <span style="color: #F9C80E">}</span> - out there in the danger zone <span style="color: #F9C80E">&lt;/br&gt;</span></p>
        </div>
      </div>
      <div id="horror" >
        <span id="down_message">
          DIVE DOWN
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" height="96px" viewBox="0 0 24 24" width="96px" fill="#F9C80E"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
      </div>
      <div id="scream_box" >
        <div class="fade" id="scream_text">DON'T SCREAM <br><span style="color: #F9C80E">WE KNOW HOW TO FIX IT</span></div>
        <img class="fade" id="scream" src="../assets/scream.png">
      </div>
      <div id="deep_water">
        <div class="fade" id="diver_detail">
          <h1 id="diver_text">DEEP WATER DEVELOPERS</h1>
          <a id="diver_message">With our experience in software development, web design and, get
            this - wreck diving, we go wherever it is required to go to ensure your
            software works</a>
        </div>
        <div>
          <img id="diver_image" src="../assets/Diver.png" alt="Diver1">
        </div>
      </div>
    </div>

    <div class= "projects" v-for="value in items" :key="value.id" >
      <p class="headings fade"> {{ value.title }}</p>
      <div class="image">
        <img class="fade imgs" :src="value.link" :alt="value.link" >
<!--          <div class="overlay " >-->
<!--            <div class = "center_text">-->
<!--              <h1 class="headings_for_overlay">{{ value.info_heading }}</h1>-->
<!--              <h1 class="catch_phrase">{{value.catch_phrase}}</h1>-->
<!--              <p class="info_text">{{value.text}}</p>-->
<!--              <i class="fas fa-band-aid"></i>-->
<!--              <a :href="value.github_link" >Link</a>-->
<!--            </div>-->
<!--          </div>-->
      </div>

    </div>
  </div>

</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
export default {
  name: "HomePage",

  el: '#v-for-object',
  data() {
    return {
      fadeInElements: [],
      fadeOutElements: [],
      visible: false,
      items: [
        {
          title: 'YOUR JAMS',
          link: require('../assets/YOUR_JAMS.png'),
          info_heading: 'AI MUSIC RECOMMENDATION',
          catch_phrase: "Your tunes always lekker"
          ,
          text: "This app helps you find the music you're into quickly on the go. It learns what you're into and recommends songs you might like, dont worry it learns with you so as your tastes in music changes so will its recommendations.",
          github_link: "https://github.com/Siocnarff/216Practicals"
        },
        {
          title: "FIND YOUR WAY",
          link: require('../assets/ERP.jpg'),
          info_heading: 'ESCAPE ROOM SIMULATION AND PLANNING',
          catch_phrase: "Always a way out",
          text: "Escape Room Planner intends to solve an organisational problem that user’s face when constructing an escape room. The system will allow users to simulate custom escape rooms that can be implemented in the real world",
          github_link: "https://escape-room-planner-front-end.herokuapp.com/"
        },
        {
          title: "DATA SLEUTH",
          link: require('../assets/DataSlueth.png'),
          info_heading: 'CUSTOM DATA SOURCE SEARCH',
          catch_phrase: "Searches have never been this good",
          text: "DataSleuth is a custom data source search system. It aims to provide software developers with a central system from where they can search all the data sources they use for their work. From local files, code repositories, wikis, databases, websites and communication systems, all the way to user specific esoteric data sources that competent software developers can plug into the system for themselves.",
          github_link: "https://github.com/COS301-SE-2021/Custom-Data-Source-Search"
        },
        {
          title: "EXPLORING THE UNKNOWN",
          link: require('../assets/Trailer.png'),
          info_heading: 'SOMETHING LURKS IN THE DEEP',
          catch_phrase: "A dive that will make you shiver",
          text: "A trailer for THE OLD GODS, brought to you by Dark Dragon Design",
          github_link: "https://www.youtube.com/watch?v=l3wcsvssn9Y&t=6s&ab_channel=JosuaBotha"
        }


      ]


    }
  },

  methods: {
    isElemVisible(el) {
      let rect = el.getBoundingClientRect()
      let elemTop = rect.top + 200
      let elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },

    isElemLeaving(el) {
      let rect = el.getBoundingClientRect();
      let elemBottom = rect.bottom;
      return elemBottom < 450;
    },

    handleScroll() {
      for (let i = 0; i < this.fadeInElements.length; i++) {
        let elem = this.fadeInElements[i];
        if (this.isElemVisible(elem)) {
          gsap.to(elem, {opacity: 1, scale: 1});
          // elem.style.opacity = '1';
          // elem.style.transform = 'scale(1)';
          this.fadeInElements.splice(i, 1); // only allow it to run once
          this.fadeOutElements.push(elem);
        }
      }
      for (let k = 0; k < this.fadeOutElements.length; k++) {
        let elem = this.fadeOutElements[k];
        if (this.isElemLeaving(elem)) {
          console.log(elem.getBoundingClientRect().bottom)
          gsap.to(elem, {opacity: 0, ease: "slow"});
          // elem.style.opacity = '0';
          // elem.style.transform = 'scale(0.8)';
          this.fadeOutElements.splice(k, 1);
          this.fadeInElements.push(elem);
        }
      }
    }
  },

  mounted() {
    gsap.registerPlugin(TextPlugin);
    let tl = gsap.timeline({delay: 1})
    tl  .from("#logo", {duration: 1, scale: 1.03, ease: "power2", opacity: 0})
        .from("#DDDHeading", {text: "", duration: 2.8, delimiter: " "}, 0)
        .from("#navbar", {duration: 2, ease: "power2", opacity: 0}, 2)
        .from("#banner", {duration: 6, ease: "power2", xPercent: 100}, 3)
        .from("#header_image", {duration: 2.8, ease: "slow", scale: 1.2, opacity: 0}, 4)
        .from("#header_heading", {ease: "power2", duration: 3, opacity: 0, x: 200}, 4.5)
        .from("#header_subtext", {ease: "power2", duration: 2, opacity: 0, y: 100}, 5)
        .from("#horror", {duration: 3, ease: "bounce", opacity: 0, y: -150}, 8.5);


    this.fadeInElements = Array.from(document.getElementsByClassName('fade'));

    document.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }
}


</script>

<style scoped>

.fade {
  transition: 2s all ease-out;
}

.fade_slow {
  transition: 4s all ease-out;
}

#horror {
  height: 150px;
}

#down_message {
  opacity: 0.3;
}

#deep_water {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 300px;
  padding-bottom: 150px;
  text-align: left;
}

#diver_message{
  padding-left: 100px;
  font-family: 'pt-serif', sans-serif;
}

#diver_text{
  color: #372549;
  font-family: 'Spartan',serif;
  font-size: 37px;
}

#header_subtext{
  position: relative; left: 16%;
  color: #DCE0D9;
  font-style: italic;
  font-size: 30px;
  font-family: 'Libre Baskerville',serif;
}

#headings{
  margin-top: 150px;
  margin-right: 100px;
  position: relative;
  width: 500px;
  text-align: left;
  font-family: 'Spartan',serif;
}

#header_heading{
  font-size: 50px;
}

#header_image{
  position: relative; right: -380px; top: 80px;
  height: 500px;
  width: 400px;
}

#banner{
  position: absolute;
  height: 500px;
  width: 100%;
  background-color: #1A1423;
}

#scream_box {
  text-align: left;
}

#scream {
  position: relative; top: -100px;
  width: 100%;
}

#scream_text {
  color: #DB162F;
  font-family: Spartan, serif;
  font-size: 57px;
  z-index: 1;
  position: relative; top: 350px; left: 250px
}

#header_container {
  z-index: -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  margin-bottom: 180px;
}

.demo{
  position: relative; top:100px;

}

.projects{
  margin-bottom: 300px;
}

.headings{
  text-align: right;
  position: relative; right: 3%;
  font-size: 50px;
  font-family: 'Spartan',serif;
}

.image{
  position: relative;
}

.imgs{
  width: 80%;
}

.overlay {
  position: relative; right: 0; top: 0;
  height: 100%;
  width: 80%;
  opacity: 0;
  transition: 1s ease-in;
  background-color: #1A1423;
}

.image:hover .overlay{
  opacity: 0.95;
  left: 710px;

}

.headings_for_overlay{
  opacity: 1;
  color: #DCE0D9;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
}

.catch_phrase{
  color: #DCE0D9;
  margin-bottom: 30px;
}

.info_text{
  font-size: 20px;
  color: #DCE0D9;
}

.center_text{
  width: 900px;
  position: relative; left: 10%; top: 8%;

}
</style>
