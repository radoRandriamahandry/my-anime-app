<template>
  <div class="container">
    <!-- TODO create a list of anime -->
    <!-- h2 header <san>title</san> desciption -->
    <AnimeList :animeList="animeList" />
  </div>
</template>

<script>
// import getAnime from "../composables/getAnime";
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
