<template>
    <ul id="v-for-object" class="demo">
      <li class= "projects" v-for="value in items" :key="value.id">
        <p class="headings"> {{ value.title }}</p>

        <img class="imgs" :src="value.link" :alt="value.link">
        <!---<img src="../assets/YOUR_JAMS.png"/>--->
        <div class="overlay">
          <h1>hello</h1>
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
         {title: 'YOUR JAMS', link:  require('../assets/YOUR_JAMS.png')},
         {title: "FIND YOUR WAY", link: require('../assets/ERP.jpg')}
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

   .imgs{
     position: relative; left: 2%;
     width: 1600px;
     height: 700px;
   }

  .overlay {
    position: relative; left: 13.5%; top:-700px;
    height: 700px;
    width: 1600px;
    opacity: 100%;
    transition: .5s ease;
    background-color: #30484c;
  }




 </style>