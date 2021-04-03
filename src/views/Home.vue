<template>
  <div class="container">
    <h1>Homepage</h1>
    <!-- get a component and send just the parameter -->
    <h2>Top anime upcoming</h2>
    <p>List of top anime</p>
    <AnimeList :animeList="animeList" />
    <!-- <h2>Top anime airing</h2>
    <p>List of top anime</p>
    <h2>fan favorite</h2>
    <p>List fan favorite</p> -->
  </div>
</template>

<script>
// import BaseButton from "../components/bases/BaseButton";
import AnimeList from "../components/animes/AnimeList";
import getAnimeList from "../composables/getAnimeList";

export default {
  name: "Home",
  components: {
    AnimeList,
  },
  setup() {
    const { animeList, loadAnime } = getAnimeList();

    loadAnime();
    return { animeList };
  },
};
</script>
