<template>
  <div id="stoor">
    <div class="colims2">
      <p class="storButin"></p>
    </div>
    <div class="colims2">
      <div class="blok2x2">
        <img class="item" src="../assets/logo_shert_1.png" alt="" />
        <img class="itemp" src="../assets/add_black_24dp_2.png" alt="" />
      </div>
      <div class="blok2x2">
        <img class="item" src="../assets/logo_shert_404.png" alt="" />
        <img class="itemp" src="../assets/add_black_24dp_2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Merch.vue",
};
</script>

<style scoped>
.blok2x2 {
  display: grid;
  grid-template-columns:6fr,1fr ;
  grid-template-rows:6fr,1fr ;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: stretch;
  align-self: stretch;
}
.itemp {
  grid-column-start: 2;
  grid-column-end: 3;
  align-self: end;
  justify-self: end;
}
.storButin {
  justify-self: end;
}
.colims1 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
}
.colims2 {
  display: grid;
  grid-template-columns:minmax(40%,100px ) minmax(40%,100px );
  justify-content: center;
}
.colims3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
}
</style>