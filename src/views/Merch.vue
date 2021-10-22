<template>
  <div id="grid">
    <div id="bottom">Hello World</div>
    <div>Hello World</div>
  </div>
</template>

<script>
export default {
  name: "Merch.vue"
}
</script>

<style scoped>
  #grid {
    display: grid;
    grid-template-columns: 5fr 1fr;
  }
  #bottom {
    margin-top: 100px;
  }
</style>