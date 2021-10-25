<template>
  <div id="store">

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">

        <div class="MerchGrid">

          <ul>

            <li>
              <img   :src="value.link " class="merchImgleft">
            </li>
          </ul>

          <ul>
            <li>
              <img   :src="value.link2 " class="merchImgRight">
            </li>

          </ul>


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

          Name: 'Shirt1',
          link: require('../assets/Shirt1.png')
          ,Name2: 'Shirt2',
        link2: require('../assets/Shirt2.png')

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

.MerchGrid{
  padding-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  padding-bottom: 5%;
}

.merchImgleft{
  margin-top: 10%;
  margin-left: 20%;
}

.merchImgRight{
  margin-right: 20%;
}

.demo{

}

</style>