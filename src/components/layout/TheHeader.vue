<template>
  <!-- <div class="navbar"> -->
  <nav class="navbar">
    <!-- Add some image here -->
    <h1 class="navbar__title">
      <router-link :to="{ name: 'Home' }">ANIME APP</router-link>
    </h1>
    <div class="navbar__links">
      <!-- <router-link :to="{ name: 'AnimeList' }">Anime List</router-link> -->
      <div class="navbar__links-item">
        <router-link to="#">Another link</router-link>
      </div>

      <div class="navbar__links-item navbar__links-item--button">
        <router-link to="#">JUST SOME LINK</router-link>
      </div>
    </div>
  </nav>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/styles/abstracts/colors";

.navbar {
  background: white;
  width: vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  line-height: 70px;

  &__title {
    margin-left: 30px;
    font-weight: bold;
    a {
      color: $primary-font;
    }
  }
  &__links {
    // font-weight: lighter;
    display: flex;

    // line-height: 70px;
    // gap: 30px;
  }

  &__links-item {
    list-style: none;
    height: 100%;
    padding: 0 30px;
    // letter-spacing: 3px;
    font-weight: 400;

    a {
      color: $primary-font;
      text-transform: uppercase;
    }

    &--button {
      background: $clr-primary;
      a {
        color: white;
        text-transform: uppercase;
      }
    }
  }
}
</style>
