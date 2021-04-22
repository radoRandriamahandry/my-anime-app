<template>
  <div class="container">
    <!-- <SearchBar
      @searchValueChanged="handleSearchValueChange"
      :searchValue="searchValue"
    /> -->

    <div v-show="!searchActive">
      <AnimeList
        :sortBy="sortByList.popularity"
        :year="year"
        title="Most Popular"
      />
      <AnimeList
        :sortBy="sortByList.trend"
        title="Most Trending"
        :perPage="16"
      />
      <AnimeList :sortBy="sortByList.favourites" title="Users Favourites" />
    </div>

    <div v-if="searchActive">
      <SearchResult
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
// import SearchBar from "../components/SearchBar";
import SearchResult from "../components/animes/SearchResult";

// Composables
import searchAnimeList from "@/composables/searchAnimeList";

import { computed, ref } from "vue";

export default {
  name: "Home",
  components: {
    AnimeList,
    // SearchBar,
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
      return searchValue.value == "" ? false : true;
    });

    // START Fetch filter result
    const { isLoading, animeList, fetchData } = searchAnimeList();

    const handleSearchValueChange = async (searchParam) => {
      if (searchParam.value != "") {
        await fetchData("POPULARITY_DESC", year, 10, searchParam.value);
        searchValue.value = searchParam.value;
      } else {
        searchValue.value = "";
      }
    };

    const filteredAnime = computed(() => {
      return animeList.value.length > 0 ? animeList.value : [];
    });
    // END

    return {
      sortByList,
      year,
      searchActive,
      searchValue,
      handleSearchValueChange,
      filteredAnime,
      isLoading,
    };
  },
};
</script>

<style></style>
