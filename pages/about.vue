<template>
  <div>
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo
      expedita libero quam ea. Repellat eveniet omnis amet consectetur eius ad
      qui? <br />Repudiandae reiciendis iusto odio voluptate non optio
      assumenda.
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
//fetch data from api
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
p {
  font-size: 20px;
  margin: 20px 0;
  color: #000;
}
</style>
