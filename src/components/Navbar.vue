<template>
    <ul class="nab">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Store</a>
      </li>
    </ul>

</template>

<script>

export default {
  name: "Navbar"
}
</script>

<style scoped>


  .nav-item{
    font-size: 25px;
    display:inline-block;
  }
  .nav-link{
    font-family: 'Libre Baskerville',serif;
    color: #1A1423;
  }

  a:hover {
    color: #DB162F;
    cursor:url(../assets/CursorImg.png), auto;
  }

</style>