<template>
    <ul id="v-for-object" class="demo">
      <li class= "projects" v-for="value in items" :key="value.id">
        <p class="headings"> {{ value.title }}</p>


        <div class="image">
          <img class="imgs" :src="value.link" :alt="value.link">
          <!---<img src="../assets/YOUR_JAMS.png"/>--->
          <div class="overlay">
            <h1 class="headings_for_overlay">{{ value.info_heading }}</h1>
            <h1 class="catch_phrase">{{value.catch_phrase}}</h1>
            <p class="info_text">{{value.text}}</p>
          </div>
        </div>

      </li>
     </ul>

 </template>

 <script>

 export default {
   name: "HomePage",
   el: '#v-for-object',
   data() {
     return {
       items: [
         {title: 'YOUR JAMS', link:  require('../assets/YOUR_JAMS.png'), info_heading:'AI MUSIC RECOMMENDATION', catch_phrase:"Your tunes always lekker"
         , text:"This app helps you find the music you're into quickly on the go. It learns what you're into and recommends songs you might like, dont worry it learns with you so as your tastes in music changes so will its recommendations.\n"},
         {title: "FIND YOUR WAY", link: require('../assets/ERP.jpg'), info_heading:'ESCAPE ROOM SIMULATION AND PLANNING',catch_phrase:"Always a way out",
         text:"Escape Room Planner intends to solve an organisational problem that user’s face when constructing an escape room. The system will allow users to simulate custom escape rooms that can be implemented in the real world"}
       ]


   }
   }
 }


 </script>

 <style scoped>
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


 </style>