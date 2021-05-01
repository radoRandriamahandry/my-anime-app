<template>
  <div v-show="!searchActive" class="max-w-7xl mx-auto my-0 px-4 py-0">
    <AnimeList
      :sortBy="sortBy.value"
      :year="year"
      :perPage="20"
      :title="sortBy.title"
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
    // TODO Create a global store for searchTerm
    const { searchTerm } = useSearch()
    const searchActive = computed(() => {
      return searchTerm.value == "" ? false : true
    })

    const date = new Date()
    const year = ref(parseInt(date.getFullYear()))

    const sortBy = computed(() => {
      const sortByTypeItem = sortByType.find((item) => {
        return item.genre == props.filter
      })
      return sortByTypeItem
    })

    return { sortBy, year, searchActive }
  },
}
</script>

<style></style>
