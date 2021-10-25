<template>
  <div id="stoor">
    <div class="colims1">
      <p  class="storButin">Cart</p>
      <p id="cartnum">

      </p>
    </div>
    <div class="colims2">
      <div class="blok3x3">
        <img class="item" src="../assets/logo_shert_1.png" alt="" />
        <div class="itemh">
          <h1>R6000</h1>
        </div>
        <div  id="S1" class="itemp">
          <img src="../assets/add_black_24dp_2.png" alt="" />
        </div>
      </div>
      <div class="blok3x3">
        <img class="item" src="../assets/logo_shert_404.png" alt="" />
        <div class="itemh">
          <h1>R6000</h1>
        </div>
        <div id="S2" class="itemp">
          <img src="../assets/add_black_24dp_2.png" alt="" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

// require("..\\assets\\store.js");
export default {
  name: "Merch.vue",
};

</script>
<style scoped>
.blok3x3 {
  display: grid;
  grid-template-columns: 3fr, 1fr, 2fr;
  grid-template-rows: 3fr, 1fr, 2fr;
}
.item {
  grid-area: 1/1/4/4;
  justify-self: stretch;
  align-self: stretch;
}
.itemp {
  grid-area: 3/3/4/4;
  align-self: end;
  justify-self: end;
}
div.itemh {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 4;
  opacity: 0;
  align-self: stretch;
  justify-self: stretch;
  background-color: #1a1423;
  color: rgb(220, 224, 217);
  border-radius: 50px;
}
div.itemh:hover {
  opacity: 0.75;
}
.storButin {
  font-weight: bold;
  justify-self: end;
  color: #1a1423;
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 27px;
}
.cartnum {
  font-weight: bold;
  justify-self: end;
  color: #a51313;
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 27px;
}
.colims1 {
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
}
.colims2 {
  display: grid;
  grid-template-columns: minmax(40%, 100px) minmax(40%, 100px);
  justify-content: center;
}
.colims3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
}
</style>