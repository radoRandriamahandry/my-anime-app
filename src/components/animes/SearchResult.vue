<template>
  <p>Search result</p>

  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div v-for="anime in filteredAnime" :key="anime.id">
      {{ anime.title }}
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// import getFilteredAnime from "@/composables/getFilteredAnime";
// import { computed, onUpdated, ref, watch } from "vue";

export default {
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

<style></style>
