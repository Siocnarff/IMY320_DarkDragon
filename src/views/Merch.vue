<template>
  <div id="store">

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">

        <div class="MerchGrid">



            <ul class="right">

              <li>
                <img   :src="value.link " class="merchImgleft">
              </li>
            </ul>


        <div class =rdiv>
          <ul>
            <li>
              <img   :src="value.link2 " class="merchImgRight">
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

          Name: 'Shirt2',
          link: require('../assets/Shirt2.png')
          ,Name2: 'Shirt1',
        link2: require('../assets/Shirt1.png')

        },
        {

          Name: 'Shirt1',
          link: require('../assets/Shirt1.png')
          ,Name2: 'Shirt2',
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

#store{
  padding-top: 1%;
  padding-bottom: 1%;
}

.MerchGrid{

  display: grid;
  grid-template-columns: 1fr 1fr ;

}

.merchImgleft{
  margin-top: 15%;
  margin-left: 10%;

}

.merchImgRight{
  margin-top: 5%;
  margin-right: 20%;
}

.demo{

}
.right{

}

.rdiv{
  background-color: #1A1423;
}

</style>