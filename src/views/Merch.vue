<template>
  <div id="store">

    <ul id="v-for-members" class="demo" style="list-style: none;">
      <li class= "members" v-for="value in items" :key="value.id">

        <div class="MerchGrid">

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
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 20px;
}

</style>