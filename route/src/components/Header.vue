<template>
  <div class="flex justify-between p-4 bg-blue-300">
    <h3 class="p-4">logo</h3>
    <ul class="flex space-x-4 p-4 ">
      <li>
        <router-link to="/" class="font-light">Home</router-link>
      </li >
      <li><router-link to="/contact" class="font-light">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "headerPage",
};
</script>

<style></style>
