<template>
  <div class="container">
    <div v-show="!searchActive">
      <AnimeList
        :sortBy="SORT_BY_TYPE.popularity"
        :year="year"
        title="Most Popular"
      />
      <AnimeList
        :sortBy="SORT_BY_TYPE.trend"
        title="Most Trending"
        :perPage="16"
      />
      <AnimeList :sortBy="SORT_BY_TYPE.favourites" title="Users Favourites" />
    </div>

    <div v-if="searchActive">
      <SearchResult />
    </div>
  </div>
</template>

<script>
// Components
import AnimeList from "../components/animes/AnimeList";
import SearchResult from "../components/animes/SearchResult";

// Composables
import useSearch from "@/composables/search/useSearch";

import { computed, ref } from "vue";

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

    const SORT_BY_TYPE = {
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

    return {
      SORT_BY_TYPE,
      searchActive,
      searchTerm,
      year,
    };
  },
};
</script>

<style></style>
