<template>

  <div id="stoor">
    <div class="colims1">
      <p class="storButin" > </p>
    </div>
    <div class="colims2">


    </div>

  </div>
</template>

<script>
export default {
  name: "Merch.vue"
}
</script>

<style scoped>
.storButin{
  justify-self: end;
}
.colims1{
  grid-template-columns:repeat(1, 1fr);
}
.colims2{
  grid-template-columns:repeat(2, 1fr);
}
.colims3{
  grid-template-columns:repeat(3, 1fr);
}
</style>