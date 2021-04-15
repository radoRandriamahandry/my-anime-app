<template>
  <!-- <button @click="updateActiveSlideListIndex('prev')">prev</button> -->
  <!-- <button @click="updateActiveSlideListIndex('next')">next</button> -->
  <div class="anime-list">
    <h2 class="anime-list__title">{{ title }} <span>anime</span></h2>
    <div class="anime-list__container" v-if="animeList.length">
      <!-- <splide :options="options"> -->
      <!-- <splide-slide v-for="anime in animeList" :key="anime.id"> -->
      <div v-for="anime in animeList" :key="anime.id">
        <AnimeListItem :anime="anime" />
      </div>
      <!-- </splide-slide> -->
      <!-- </splide> -->
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
import { reactive } from "vue";

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
  },

  setup(props) {
    // SPLIDE
    const options = reactive({
      rewind: true,
      perPage: 4,
      width: "100%",
      gap: "1rem",
    });

    // Start fetching the anime list
    const date = new Date();
    let year = parseInt(date.getFullYear());

    if (props.year) {
      year = parseInt(props.year);
    }
    const { animeList, fetchData } = getAnimeList(props.sortBy, year);
    fetchData();

    return { animeList, options };
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

/* // Swiper Style */
.swiper-button-prev,
.swiper-button-next {
  position: relative;
}
</style>
