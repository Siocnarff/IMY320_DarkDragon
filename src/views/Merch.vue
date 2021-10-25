<template>
  <div id="store">

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">

        <div class="MerchGrid">
          <img  v-if="items.index % 2 === 0" :src="value.link " class="merchImgleft">
          <img  v-else :src="value.link " class="merchImgRight">


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
          index: 1,
          Name: 'Shirt1',
          link: require('../assets/Shirt1.png'),
        },
        {
          index: 2,
          Name: 'Shirt1',
          link: require('../assets/Shirt1.png'),
        },
        {
          index: 3,
          Name: 'Shirt1',
          link: require('../assets/Shirt1.png'),
        },
        {
          index: 4,
          Name: 'Shirt1',
          link: require('../assets/Shirt1.png'),
        }
      ]
    }
  }

};

</script>
<style scoped>

.MerchGrid{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  padding-bottom: 20px;
}

.merchImgleft{
  margin-left: 50%;
}

.merchImgRight{
  margin-right: 20%;
}

.demo{

}

</style>