<template>
  <!-- <button @click="updateActiveSlideListIndex('prev')">prev</button> -->
  <!-- <button @click="updateActiveSlideListIndex('next')">next</button> -->

  <div class="anime-list">
    <h2 class="anime-list__title">{{ title }} <span>anime</span></h2>

    <!-- TODO create a spinner -->
    <div v-if="isLoading">Loading data...</div>

    <div v-if="!isLoading">
      <div class="anime-list__container" v-if="animeList.length">
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

<style>
.anime-list {
  margin-bottom: 2.2em;
}

.anime-list__title {
  padding: 45px 0;
}
.anime-list__title span {
  font-weight: 100;
}
.anime-list__container {
  overflow: hidden;
  /* background: red; */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* // Swiper Style */
.swiper-button-prev,
.swiper-button-next {
  position: relative;
}
</style>
