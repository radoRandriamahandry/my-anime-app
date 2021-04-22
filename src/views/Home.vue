<template>
  <div class="container">
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
        :searchTerm="searchTerm"
        :filteredAnime="filteredAnime"
        :isLoading="isLoading"
      />
    </div>
  </div>
</template>

<script>
// Components
import AnimeList from "../components/animes/AnimeList";
import SearchResult from "../components/animes/SearchResult";

// Composables
import searchAnimeList from "@/composables/searchAnimeList";
import useSearch from "@/composables/search/useSearch";

import { computed, ref, watch } from "vue";

export default {
  name: "Home",
  components: {
    AnimeList,
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
    // Conditionnal DISPLAY of animeList or SearchResult
    // When the searchValue is not empty show search Result
    const { searchTerm } = useSearch();

    const searchActive = computed(() => {
      return searchTerm.value == "" ? false : true;
    });

    // START Fetch filter result
    const { isLoading, animeList, fetchData } = searchAnimeList();

    watch(searchTerm, () => {
      if (searchTerm.value != "") {
        fetchData("POPULARITY_DESC", year, 10, searchTerm.value);
      }
    });

    const filteredAnime = computed(() => {
      return animeList.value.length > 0 ? animeList.value : [];
    });
    // END

    return {
      sortByList,
      year,
      searchActive,
      searchTerm,
      filteredAnime,
      isLoading,
    };
  },
};
</script>

<style></style>
