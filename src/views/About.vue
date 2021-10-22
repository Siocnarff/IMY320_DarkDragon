<template>
  <div class="about">
    <div id="top">
      <div class="grid1">
        <div>
          <img id="Diver" src="../assets/DiverForAbout.png">
          <h1 id="HeadingStyle"><span style="color: #DB162F;">The </span><span style="color: #DCE0D9;">Only Deep Water Developers </span></h1>
          <p class="par" id="p1"> With our experience in software development, web design and, get
            this - wreck diving, we go wherever it is required to go to ensure your
            software works.</p>
        </div>

        <div>

          <img id="PathFinder" src="../assets/Pf.png">
          <p class="par" id="p2">Where other teams say there is no way we find a way. No one on our team is scared of a little path finding algorithm.</p>
          <h1 id="PFheading">The Path Finders</h1>
        </div>

      </div>
    </div>






    <div>

    </div>

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">
        <p class="member_heading"> {{ value.Name }}</p>
        <img class="member_images" :src="value.link">
        <p class="member_info">value.text</p>
      </li>
    </ul>


  </div>


</template>

<script>


export default {
  name: "AboutPage",

  el: '#v-for-members',
  data() {
    return {
      items: [
        {Name: 'Patric Edwards', link:  'https://media-exp1.licdn.com/dms/image/C4E03AQEG3oHulm4myQ/profile-displayphoto-shrink_800_800/0/1630521059987?e=1640217600&v=beta&t=giRZ3lyNN3qGSjffIUQJ7Amq-tnV-TbI3uAjQoJFHcU', info_heading:'AI MUSIC RECOMMENDATION', catch_phrase:"Your tunes always lekker"
          , text:"This app helps you find the music you're into quickly on the go. It learns what you're into and recommends songs you might like, dont worry it learns with you so as your tastes in music changes so will its recommendations.",
          github_link: "https://github.com/Siocnarff/216Practicals"},
        {Name: "Josua Botha", link: 'https://media-exp1.licdn.com/dms/image/C5603AQHJ8hQj6tRPwg/profile-displayphoto-shrink_800_800/0/1588325695383?e=1640217600&v=beta&t=XKVLpCBt3LZl5cbLQ952S87Bc0vywbTTUS4quqcKsM4', info_heading:'ESCAPE ROOM SIMULATION AND PLANNING',catch_phrase:"Always a way out",
          text:"Escape Room Planner intends to solve an organisational problem that user’s face when constructing an escape room. The system will allow users to simulate custom escape rooms that can be implemented in the real world",
          github_link: "https://escape-room-planner-front-end.herokuapp.com/"},


      ]


    }
  }
}


</script>

<style>

  .grid1{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #Diver{
    position: relative;
    left: 20%;
    top: 60px;
    width: 80%;
    height: 400px;
  }

  #PathFinder{
    position: relative;
    left: -10%;
    top: 45%;
    width: 80%;
  }

  .about{

  }

  #PFheading{
    position: relative;
    left: 30%;
    top: 270px;

    margin-bottom: 300px;
    color: #DCE0D9;
    font-style: italic;
    font-family: 'Libre Baskerville',serif;
    font-size: 30px;

  }

  #HeadingStyle{
    position: relative;
    left: -6%;
    top: -3%;
    font-style: italic;
    font-family: 'Libre Baskerville',serif;
    font-size: 30px;
  }

  #p1{
    position: relative;
    left: 50%;
    top:60px;

  }
  #p2{
    position: relative;
    left: 20%;
    top: -130px;
  }

  .par{
    width: 400px;
    text-align: left;
    color: #DCE0D9;
    font-size: 20px;
  }

  #top{
    position: relative;

    width:100%;
    height: 820px;

    background-color: #372549;
  }

  .member_images{

    width: 400px;
    position: relative;
    left: -40%;
  }
  .member_heading{
    font-family: 'Libre Baskerville',serif;
    font-size: 50px;
    color: #372549;
  }

</style>
