<template>

    <ul class="nab">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>

</template>

<script>

export default {
  name: "Navbar"
}
</script>

<style scoped>
  .nab{
    position: absolute; left: 200px; top: 20px;
  }

  .nav-item{
    font-size: 20px;
    display:inline-block;

  }
  .nav-link{
    font-family: 'Libre Baskerville',serif;
    color: #1A1423;
  }

</style>