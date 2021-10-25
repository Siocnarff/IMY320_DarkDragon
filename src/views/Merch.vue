<template>
  <div id="store">

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">

        <div class="MerchGrid">


          <div class =ldiv>
            <ul class="right">

              <li class="members">
                <img   :src="value.link " class="merchImgleft">
                <div class="loverlay">
                  <h1 class="heading">{{value.Name}}</h1>

                </div>
              </li>
            </ul>
          </div>


        <div class =rdiv>
          <ul>
            <li>
              <img   :src="value.link2 " class="merchImgRight">

              <div class="roverlay">
                <h1 class="heading2">{{value.Name2}}</h1>

              </div>
            </li>

          </ul>
        </div>


        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>

// require("..\\assets\\store.js");
export default {
  name: "Merch.vue",
  el: '#v-for-merch',
  data() {

    return {
      items: [
        {

          Name: 'Person Not Found',
          link: require('../assets/Shirt2.png')
          ,Name2: 'DDD-T',
        link2: require('../assets/Shirt1.png')

        },
        {

          Name: 'DDD-T',
          link: require('../assets/Shirt1.png')
          ,Name2: 'Person Not Found',
          link2: require('../assets/Shirt2.png')

        },
      ]
    }
  },methods:{
    LeftImg(){

    }
  }

};

</script>
<style scoped>

.members{
  list-style: none;
}

#store{
  padding-top: 1%;
  padding-bottom: 1%;
}

.MerchGrid{

  display: grid;
  grid-template-columns: 1fr 1fr ;

}

.merchImgleft{
  margin-top: 18%;
  margin-left: 10%;

}



.merchImgRight{
  margin-top: 5%;
  margin-right: 23%;
}

.demo{

}
.right{

}

.rdiv{
  background-color: #1A1423;
}


.loverlay{
  height: 100%;
  width: 100%;
  opacity: 0;
}

.roverlay{
  height: 100%;
  width: 100%;
  opacity: 0;
}

.merchImgRight:hover + .roverlay{
  opacity: 1;
}

.merchImgleft:hover + .loverlay{
  opacity: 1;
}

.merchImgleft:hover{
  opacity: 0.3;
}

.merchImgRight:hover{
  opacity: 0.3;
}

.heading {
  color: #DB162F;
  font-family: Spartan, serif;
  font-size: 57px;
  z-index: 1;
  position: relative; top: -550px;
  text-align: left;
}

.heading2 {
  color:  #F9C80E;

  font-family: Spartan, serif;
  font-size: 57px;
  z-index: 1;
  position: relative; top: -550px;
  margin-right: 5%;
  text-align: right;
}


</style>