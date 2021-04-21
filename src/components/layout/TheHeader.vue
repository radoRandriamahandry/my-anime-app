<template>
  <!-- <div class="navbar"> -->
  <nav class="navbar bg-white w-full flex items-center justify-between h-12">
    <!-- Add some image here -->
    <h1 class="ml-8 font-bold text-gray-700">
      <router-link :to="{ name: 'Home' }">ANIME APP</router-link>
    </h1>
    <div class="navbar__links flex h-full">
      <div class="flex items-center px-7">
        <router-link to="#">Another link</router-link>
      </div>

      <div class="text-white font-bold bg-primary flex items-center px-7 ">
        <router-link to="#">Click me</router-link>
      </div>
    </div>
  </nav>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style></style>
