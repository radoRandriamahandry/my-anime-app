<template>
  <div class="max-w-7xl mx-auto my-0 px-4 py-0">
    <!-- <SkeletonAnimeList /> -->
    <div v-show="!searchActive">
      <AnimeList
        :sortBy="SORT_BY_TYPE[0].value"
        :year="year"
        :title="SORT_BY_TYPE[0].title"
      />
      <AnimeList
        :sortBy="SORT_BY_TYPE[1].value"
        :title="SORT_BY_TYPE[1].title"
      />
      <AnimeList
        :sortBy="SORT_BY_TYPE[2].value"
        :title="SORT_BY_TYPE[2].title"
      />
    </div>

    <div v-if="searchActive">
      <SearchResult />
    </div>
  </div>
</template>

<script>
// Components
import AnimeList from "../components/animes/AnimeList"
import SearchResult from "../components/animes/SearchResult"

// Composables
import useSearch from "@/composables/search/useSearch"
import { sortByType } from "@/composables/utils/useGlobalVariables"

import { computed, ref } from "vue"

export default {
  name: "Home",
  components: {
    AnimeList,
    SearchResult,
  },
  setup() {
    // TODO create a filter for the getAnimeList(popular)

    // Get the current year
    const date = new Date()
    const year = ref(parseInt(date.getFullYear()))

    const SORT_BY_TYPE = sortByType

    // Manage Search bar
    // Conditionnal DISPLAY of animeList or SearchResult
    // When the searchValue is not empty show search Result
    const { searchTerm } = useSearch()

    const searchActive = computed(() => {
      return searchTerm.value == "" ? false : true
    })

    return {
      SORT_BY_TYPE,
      searchActive,
      searchTerm,
      year,
    }
  },
}
</script>

<style></style>
