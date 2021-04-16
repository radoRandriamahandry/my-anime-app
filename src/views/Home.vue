<template>
  <!-- <AnimeCarousel /> -->
  <div class="container">
    <!-- TODO create a carrousel -->
    <!-- TODO move animelist component here and add slot and props to filter the list -->
    <!-- <AnimeList :sortBy="sortByList.udpate" title="Most Recent" /> -->
    <SearchBar @focusOnSearch="search" />

    <div v-if="!searchActive">
      <AnimeList
        :sortBy="sortByList.popularity"
        :year="year"
        title="Most Popular"
      />
      <AnimeList :sortBy="sortByList.trend" title="Most Trending" />
      <AnimeList :sortBy="sortByList.favourites" title="Users Favourites" />
    </div>
  </div>
</template>

<script>
// Components
import AnimeList from "../components/animes/AnimeList";
import SearchBar from "../components/SearchBar";
// import AnimeCarousel from "../components/animes/AnimeCarousel";

import { ref } from "vue";

export default {
  name: "Home",
  components: {
    AnimeList,
    SearchBar,
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

    // Manage Search bar
    const searchActive = ref(false);

    const search = () => {
      console.log("Focus on live search");
      searchActive.value = true;
    };

    return { sortByList, year, search, searchActive };
  },
};
</script>

<style></style>
