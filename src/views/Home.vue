<template>
  <!-- <AnimeCarousel /> -->
  <div class="container">
    <!-- TODO create a carrousel -->
    <!-- TODO move animelist component here and add slot and props to filter the list -->
    <!-- <AnimeList :sortBy="sortByList.udpate" title="Most Recent" /> -->
    <AnimeList
      :sortBy="sortByList.popularity"
      :year="year"
      title="Most Popular"
    />

    <AnimeList :sortBy="sortByList.trend" title="Most Trending" />
    <AnimeList :sortBy="sortByList.favourites" title="Users Favourites" />
  </div>
</template>

<script>
// Components
import AnimeList from "../components/animes/AnimeList";
import AnimeCarousel from "../components/animes/AnimeCarousel";

import { ref } from "vue";

export default {
  name: "Home",
  components: {
    AnimeList,
    AnimeCarousel,
  },
  setup() {
    // TODO create a filter for the getAnimeList(popular)
    // const { animeList, fetchData } = getAnimeList("SCORE_DESC");
    // fetchData();
    // return { animeList };

    // Get the current year
    const date = new Date();
    const year = ref(parseInt(date.getFullYear()));

    const sortByList = {
      popularity: "POPULARITY_DESC",
      score: "SCORE_DESC",
      trend: "TRENDING_DESC",
      favourites: "FAVOURITES_DESC",
      udpate: "UPDATED_AT",
    };

    return { sortByList, year };
  },
};
</script>

<style lang="scss"></style>
