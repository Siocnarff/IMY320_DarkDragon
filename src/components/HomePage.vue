<template>
    <ul id="v-for-object" class="demo">
      <li class= "projects" v-for="value in items" :key="value.id">
        <p class="headings"> {{ value.title }}</p>

        <img class="imgs" :src="value.link" :alt="value.link">
        <!---<img src="../assets/YOUR_JAMS.png"/>--->

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
         {title: "FIND YOUR WAY", link: require('../assets/YOUR_JAMS.png')}
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
   }

   .headings{
     text-align: right;
     position: relative; right: 3%;
     font-size: 50px;
     font-family: 'Spartan',serif;
   }

   .imgs{
     position: relative; left: 2%;
   }
 </style>