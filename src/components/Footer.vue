<template>
  <div id="footerid">

    <h1 class="headstyle" id="head">Links to our projects</h1>
    <h1 class="headstyle" id="Devs">Developers</h1>
    <div>
      <ul id="for-object" class="list-inline">
        <li class= "ilinks" v-for="value in items" :key="value.id">
          <a class ="itm" :href="value.github_link"> {{ value.title}}</a>
        </li>


      </ul>
      <ul id="Ln-links">
        <li>
          <a>Josua Botha<a href="https://www.linkedin.com/in/josua-botha-63417274/"> <img src="https://img.icons8.com/nolan/64/linkedin.png"/></a></a>
          <a>Patric Edwards<a href="https://www.linkedin.com/in/patric-edwards-220879204/"> <img src="https://img.icons8.com/nolan/64/linkedin.png"/></a></a>
          <a ><img src="https://img.icons8.com/nolan/64/linkedin.png"/></a>
        </li>
      </ul>


    </div>
  </div>
</template>

<script>
export default {

  el: '#for-object',
  data() {
    return {
      items: [
        {title: 'YOUR JAMS',github_link: "https://github.com/Siocnarff/216Practicals"},
        {title: "FIND YOUR WAY",github_link: "https://escape-room-planner-front-end.herokuapp.com/"},
        {title: "DATA SLEUTH",github_link: "https://github.com/COS301-SE-2021/Custom-Data-Source-Search"},
        {title: "EXPLORING THE UNKNOWN",github_link: "https://www.youtube.com/watch?v=l3wcsvssn9Y&t=6s&ab_channel=JosuaBotha"}


      ]


    }
  }
}
</script>

<style scoped>

#footerid{
  position: relative;
  height: 200px;
  width: 100%;
  background-color: #1A1423;
  color: #DCE0D9;
  text-align:center
}

.list-inline{


}

.ilinks{
  text-align: center;
  margin: 10px;
  float: left;
  text-align-last: center;
}

.itm{
  color: #DCE0D9;
}

#head{
  text-align: left;
}

#Devs{
  position: absolute;
  left: 90%;
  top: 0;

}

#Ln-links{
  list-style: none;
  float: right;
}

</style>