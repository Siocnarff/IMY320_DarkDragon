<template>

    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

</template>

<script>

export default {
  name: "Navbar"
}
</script>

<style scoped>
  .nav{
    position: absolute; left: 100px;

  }

  .nav-item{
    font-size: 20px;
    display:inline-block;

  }
  .nav-link{
    font-family: 'Libre Baskerville',serif;
    color: red;
  }

</style>