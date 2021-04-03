<template>
  <div class="navbar container">
    <nav>
      <!-- Add some image here -->
      <h1><router-link :to="{ name: 'Home' }">Anime App</router-link></h1>
      <div class="links">
        <!-- <router-link :to="{ name: 'AnimeList' }">Anime List</router-link> -->
        <router-link to="#">Anime List</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  // background: white;
  padding: 10px 0;
  .links {
    margin-left: auto;
  }
}
</style>
