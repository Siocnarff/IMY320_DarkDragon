<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<template>
  <div class="main">
    <div id="header">
      <img src="../assets/Main.png" id="header_image">
      <div id="headings">
        <h1 id = "header_heading"><span style="color:#DCE0D9">SOFTWARE FOR THE</span><span style="color:#DB162F"> BRAVE</span> </h1>
        <p id="header_subtext" >Wherever we need to go...</p>
      </div>
      <img src="../assets/Diver.png" id="diver_image">


      <div id="size_help">
        <h1 id="diver_text">The Only Deep Water Developers</h1>
        <a id="diver_message">With our experience in software development, web design and, get
          this - wreck diving, we go wherever it is required to go to ensure your
          software works</a>
      </div>



    </div>


    <ul id="v-for-object" class="demo">
      <li class= "projects" v-for="value in items" :key="value.id">
        <p class="headings"> {{ value.title }}</p>


        <div class="image">
          <img class="imgs" :src="value.link" :alt="value.link" >
          <!---<img src="../assets/YOUR_JAMS.png"/>--->
          <div class="overlay " >

            <div class = "center_text">
              <h1 class="headings_for_overlay">{{ value.info_heading }}</h1>
              <h1 class="catch_phrase">{{value.catch_phrase}}</h1>
              <p class="info_text">{{value.text}}</p>
              <i class="fas fa-band-aid"></i>
              <a :href="value.github_link" >Link</a>
            </div>

          </div>
        </div>

      </li>
    </ul>



  </div>



</template>

<script>


export default {
  name: "HomePage",

  el: '#v-for-object',
  data() {
    return {
      items: [
        {title: 'YOUR JAMS', link:  require('../assets/YOUR_JAMS.png'), info_heading:'AI MUSIC RECOMMENDATION', catch_phrase:"Your tunes always lekker"
          , text:"This app helps you find the music you're into quickly on the go. It learns what you're into and recommends songs you might like, dont worry it learns with you so as your tastes in music changes so will its recommendations.",
          github_link: "https://github.com/Siocnarff/216Practicals"},
        {title: "FIND YOUR WAY", link: require('../assets/ERP.jpg'), info_heading:'ESCAPE ROOM SIMULATION AND PLANNING',catch_phrase:"Always a way out",
          text:"Escape Room Planner intends to solve an organisational problem that user’s face when constructing an escape room. The system will allow users to simulate custom escape rooms that can be implemented in the real world",
          github_link: "https://escape-room-planner-front-end.herokuapp.com/"},
        {title: "DATA SLEUTH", link: require('../assets/DataSlueth.png'), info_heading:'CUSTOM DATA SOURCE SEARCH',catch_phrase:"Searches have never been this good",
          text:"DataSleuth is a custom data source search system. It aims to provide software developers with a central system from where they can search all the data sources they use for their work. From local files, code repositories, wikis, databases, websites and communication systems, all the way to user specific esoteric data sources that competent software developers can plug into the system for themselves.",
          github_link: "https://github.com/COS301-SE-2021/Custom-Data-Source-Search"},
        {title: "EXPLORING THE UNKNOWN", link: require('../assets/Trailer.png'), info_heading:'SOMETHING LURKS IN THE DEEP',catch_phrase:"A dive that will make you shiver",
          text:"A trailer for THE OLD GODS, brought to you by Dark Dragon Design",
          github_link: "https://www.youtube.com/watch?v=l3wcsvssn9Y&t=6s&ab_channel=JosuaBotha"}


      ]


    }
  }
}


</script>

<style scoped>

#size_help{
  position: relative; left: 17%; top:-45%;
  width: 30%;
}

#diver_message{
  position: relative; left: 19%; top:-45%;
}

#diver_text{
  position: relative; left: -3%;
  color: #372549;
  font-style: italic;
  font-family: 'Libre Baskerville',serif;
  font-size: 30px;
}

#diver_image{
  position: relative; left: 13%;
  width: 18%;
  height:45%;
}

#header_subtext{
  position: relative; left: 16%;
  color: #DCE0D9;
  font-style: italic;
  font-size: 30px;
  font-family: 'Libre Baskerville',serif;
}

#headings{
  position: relative; left: 50%; top:-65%;
  width: 25%;
  text-align: left;
  font-family: 'Libre Baskerville',serif;
}

#header_heading{
  font-size: 50px;
}

#header_image{
  position: relative; right: 19%; top:19%;
  height: 380px;
  width: 400px;
}

#header{
  position: relative; top:100px;
  height: 400px;
  width: 100%;
  background-color: #1A1423;
  margin-bottom: 22%
}

.demo{
  position: relative; top:100px;

}

.projects{
  list-style-type: none;
  text-align: center;
  margin-bottom: -600px;
}

.headings{
  text-align: right;
  position: relative; right: 3%;
  font-size: 50px;
  font-family: 'Spartan',serif;
}

.image{
  position: relative; left: 2%;
}

.imgs{


  width: 1600px;
  height: 700px;
}

.overlay {
  position: relative; left: 235px; top:-700px;
  height: 700px;
  width: 1130px;
  opacity: 0;
  transition: 1s ease-in;
  background-color: #1A1423;
}

.image:hover .overlay{
  opacity: 0.95;
  left: 600px;

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
