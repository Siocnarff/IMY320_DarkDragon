<template>
  <div id="footerid">

    <h1 id="head">Links to our projects</h1>
    <h1 id="Devs">Developers</h1>
    <div>
      <ul id="for-object" class="list-inline">
        <li class= "ilinks" v-for="value in items" :key="value.id">
          <a class ="itm" :href="value.github_link"> {{ value.title}}</a>
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
  height: 100px;
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

</style>