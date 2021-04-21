<template>
  <!-- <button @click="updateActiveSlideListIndex('prev')">prev</button> -->
  <!-- <button @click="updateActiveSlideListIndex('next')">next</button> -->

  <div class="mb-9">
    <h2 class="py-11 font-light">
      <span class="font-bold">{{ title }}</span> anime
    </h2>

    <!-- TODO create a spinner -->
    <div v-if="isLoading">Loading data...</div>

    <div v-if="!isLoading">
      <div
        class="grid overflow-hidden gap-5 grid-cols-fit-200"
        v-if="animeList.length"
      >
        <div v-for="anime in animeList" :key="anime.id">
          <AnimeListItem :anime="anime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import splide
// import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// components
import AnimeListItem from "../animes/AnimeListItem";

// Composables
import getAnimeList from "@/composables/getAnimeList";

export default {
  components: {
    AnimeListItem,
    // Splide,
    // SplideSlide,
  },

  // TODO get props for filtering the anime list
  props: {
    sortBy: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
    perPage: {
      type: [Number, String],
      required: false,
    },
  },

  setup(props) {
    // Start fetching the anime list
    const date = new Date();
    let year = parseInt(date.getFullYear());

    if (props.year) {
      year = parseInt(props.year);
    }
    const { isLoading, animeList, fetchData } = getAnimeList();
    if (props.perPage) {
      fetchData(props.sortBy, year, parseInt(props.perPage));
    }
    if (!props.perPage) {
      fetchData(props.sortBy, year);
    }

    return { isLoading, animeList };
  },
};
</script>

<style></style>
