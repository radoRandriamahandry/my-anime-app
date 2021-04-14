<template>
  <!-- <button @click="updateActiveSlideListIndex('prev')">prev</button> -->
  <!-- <button @click="updateActiveSlideListIndex('next')">next</button> -->
  <div class="anime-list">
    <h2 class="anime-list__title">{{ title }} <span>anime</span></h2>
    <div class="anime-list__container" v-if="animeList.length">
      <splide :options="options">
        <splide-slide v-for="anime in animeList" :key="anime.id">
          <AnimeListItem :anime="anime" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
// Import splide
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// components
import AnimeListItem from "../animes/AnimeListItem";

// Composables
import getAnimeList from "@/composables/getAnimeList";
import { reactive } from "vue";

export default {
  components: {
    AnimeListItem,
    Splide,
    SplideSlide,
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
    const { animeList, fetchData } = getAnimeList(props.sortBy, year, 10);
    fetchData();

    return { animeList, options };
  },
};
</script>

<style lang="scss">
.anime-list {
  margin-bottom: 2.2em;
  &__title {
    padding: 45px 0;
    span {
      font-weight: 100;
    }
  }

  &__container {
    overflow: hidden;
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
    // justify-content: space-between;
    // gap: 40px 20px;
  }
}

// Swiper Style
.swiper-button-prev,
.swiper-button-next {
  position: relative;
}
</style>
