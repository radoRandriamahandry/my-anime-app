<template>
  <div class="mt-6">
    <!-- TODO create a spinner -->
    <div v-if="isLoading">Loading data...</div>
    <div v-if="!isLoading">
      <div
        class="overflow-hidden grid gap-5 grid-cols-fit-200"
        v-if="filteredAnime.length"
      >
        <div v-for="anime in filteredAnime" :key="anime.id">
          <AnimeListItem :anime="anime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import AnimeListItem from "../animes/AnimeListItem";

// Composables
import useSearch from "@/composables/search/useSearch";
import searchAnimeList from "@/composables/searchAnimeList";

export default {
  components: {
    AnimeListItem,
  },

  setup() {
    const date = new Date();
    const year = ref(parseInt(date.getFullYear()));
    const { searchTerm } = useSearch();
    const { isLoading, animeList, fetchData } = searchAnimeList();

    watch(searchTerm, () => {
      if (searchTerm.value != "") {
        fetchData("POPULARITY_DESC", year, 10, searchTerm.value);
      }
    });

    // GET search Result
    const filteredAnime = computed(() => {
      return animeList.value.length > 0 ? animeList.value : [];
    });
    // END

    return { isLoading, filteredAnime };
  },
};
</script>

<style scoped></style>
