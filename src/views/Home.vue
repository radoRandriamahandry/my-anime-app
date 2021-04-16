<template>
  <!-- <AnimeCarousel /> -->
  <div class="container">
    <!-- TODO create a carrousel -->
    <!-- TODO move animelist component here and add slot and props to filter the list -->
    <!-- <AnimeList :sortBy="sortByList.udpate" title="Most Recent" /> -->
    <SearchBar @searchValueChanged="getFilteredResult" />

    <div v-show="!searchActive">
      <AnimeList
        :sortBy="sortByList.popularity"
        :year="year"
        title="Most Popular"
      />
      <AnimeList :sortBy="sortByList.trend" title="Most Trending" />
      <AnimeList :sortBy="sortByList.favourites" title="Users Favourites" />
    </div>

    <div v-if="searchActive">
      <SearchResult
        :searchResult="searchResult"
        :searchValue="searchValue"
        :filteredAnime="filteredAnime"
        :isLoading="isLoading"
      />
    </div>
  </div>
</template>

<script>
// Components
import AnimeList from "../components/animes/AnimeList";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/animes/SearchResult";

// Composables
import getAnimeList from "@/composables/getAnimeList";

// import AnimeCarousel from "../components/animes/AnimeCarousel";

// import getFilteredAnime from "@/composables/getFilteredAnime";

import { computed, ref } from "vue";

export default {
  name: "Home",
  components: {
    AnimeList,
    SearchBar,
    SearchResult,
  },
  setup() {
    // TODO create a filter for the getAnimeList(popular)

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
    const searchValue = ref("");

    // Conditionnal DISPLAY of animeList or SearchResult
    // When the searchValue is not empty show search Result
    const searchActive = computed(() => {
      if (searchValue.value === "") {
        return false;
      } else {
        return true;
      }
    });

    // START Fetch filter result
    const searchResult = ref([]);
    const { isLoading, animeList, fetchData } = getAnimeList();

    const getFilteredResult = async (value) => {
      searchValue.value = value;

      animeList.value = [];
      fetchData("POPULARITY_DESC", year, 10, value);
    };

    const filteredAnime = computed(() => {
      if (animeList.value.length) {
        return animeList.value;
      } else {
        return [];
      }
    });
    // END

    return {
      sortByList,
      year,
      searchActive,
      searchValue,
      getFilteredResult,
      searchResult,
      filteredAnime,
      isLoading,
    };
  },
};
</script>

<style></style>
