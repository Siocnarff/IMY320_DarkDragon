<template>
  <div id="stoor">
    <div class="colims1">
      <p class="storButin"></p>
    </div>
    <div class="colims2">
      <img class="item1" src="../assets/logo_shert_1.png"  alt=""/>
      <img class="item2" src="../assets/logo_shert_404.png"  alt=""/>
      <img class="item1p" src="../assets/add_black_24dp_2.png"  alt=""/>
      <img class="item2p" src="../assets/add_black_24dp_2.png"  alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Merch.vue",
};
</script>

<style scoped>
.item1 {
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: stretch;
}
.item2 {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: stretch;
}
.item1p {
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: end;
  align-self: end;
}
.item2p {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: end;
  align-self: end;
}
.storButin {
  justify-self: end;
}
.colims1 {
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
}
.colims2 {
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}
.colims3 {
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
}
</style>