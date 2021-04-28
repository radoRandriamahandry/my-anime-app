<template>
  <div v-show="!searchActive" class="max-w-7xl mx-auto my-0 px-4 py-0">
    <AnimeList
      :sortBy="sortBy"
      :year="year"
      :perPage="15"
      title="Just some test"
    />
  </div>
  <div v-if="searchActive">
    <SearchResult />
  </div>
</template>

<script>
import { computed, ref } from "vue"

// Components
import AnimeList from "@/components/animes/AnimeList"
import SearchResult from "../components/animes/SearchResult"

// Composables
import useSearch from "@/composables/search/useSearch"
import { sortByType } from "@/composables/utils/useGlobalVariables"

export default {
  components: {
    AnimeList,
    SearchResult,
  },
  props: {
    filter: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // Manage Live search
    const { searchTerm } = useSearch()
    const searchActive = computed(() => {
      return searchTerm.value == "" ? false : true
    })

    const date = new Date()
    const year = ref(parseInt(date.getFullYear()))

    const sortBy = computed(() => {
      return sortByType[props.filter]
    })

    return { sortBy, year, searchActive }
  },
}
</script>

<style></style>
