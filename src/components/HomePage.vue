<template>
    <ul id="v-for-object" class="demo">
      <li class= "projects" v-for="value in items" :key="value.id">
        <p class="headings"> {{ value.title }}</p>

      </li>
    </ul>

</template>

<script>
export default {
  name: "HomePage",
  el: '#v-for-object',
  data() {
    return {
      items: [
        {title: 'How to do lists in Vue'},
        {title: "second one"}
      ]


  }
  }
}


</script>

<style scoped>
  .projects{
    list-style-type: none;
  }

  .headings{

  }
</style>