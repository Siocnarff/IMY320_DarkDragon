<template>
  <div id="stoor">
    <div class="colims1">
      <p class="storButin"></p>
    </div>
    <div class="colims2">
      <img class="item1" src="src\assets\logo_shert_1.png" />
      <img class="item2" src="src\assets\logo_shert_404.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Merch.vue",
};
</script>

<style scoped>
.item1{
  grid-column-start: 1;
  grid-column-end: 2;
}
.item1{
  grid-column-start: 2;
  grid-column-end:3;
}
.storButin {
  justify-self: end;
}
.colims1 {
  grid-template-columns: repeat(1, 1fr);
}
.colims2 {
  grid-template-columns: repeat(2, 1fr);
}
.colims3 {
  grid-template-columns: repeat(3, 1fr);
}
</style>