<template>
  <div class="mt-6">
    <!-- TODO create a spinner -->
    <div v-if="isLoading">Loading data...</div>
    <div v-if="!isLoading">
      <div
        class="overflow-hidden grid gap-5 gtc-200"
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
// import getFilteredAnime from "@/composables/getFilteredAnime";
// import { computed, onUpdated, ref, watch } from "vue";
import AnimeListItem from "../animes/AnimeListItem";

export default {
  components: {
    AnimeListItem,
  },
  props: {
    searchValue: {
      type: String,
    },
    filteredAnime: {
      type: Array,
    },
    isLoading: {
      type: Boolean,
    },
  },

  setup(props) {
    // const { animeList, isLoading, fetchData } = getFilteredAnime(
    //   props.searchValue.value
    // );
    // fetchData();
    // return { animeList, isLoading };
  },
};
</script>

<style scoped></style>
