<template>
  <div class="container">
    <!-- TODO create a list of anime -->
    <AnimeList :animeList="animeList" />
  </div>
</template>

<script>
import getAnimeList from "../composables/getAnimeList";

// Components
import AnimeList from "../components/animes/AnimeList";

export default {
  name: "Home",
  components: {
    AnimeList,
  },
  setup() {
    const { animeList, fetchData } = getAnimeList();
    fetchData();

    return { animeList };
  },
};
</script>

<style lang="scss"></style>
