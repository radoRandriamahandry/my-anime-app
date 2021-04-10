<template>
  <!-- Get the cover image first -->
  <!-- TODO check if animeList is not null -->
  <div id="slider">
    <div v-for="(anime, index) in animeList" :key="anime.id">
      <!-- <transition :name="transitionName" mode="out-in"> -->
      <AnimeCarouselItem
        :index="index"
        :activeSlide="activeSlide"
        :transitionName="transitionName"
        class="slider__content"
      />
      <!-- </transition> -->
    </div>
  </div>
  <!-- </div> -->

  <button @click="updateActiveSlide('previous')">Previous slide</button>
  <button @click="updateActiveSlide('next')">Next slide</button>
</template>

<script>
// Composables
import getAnimeList from "@/composables/getAnimeList";

// Components
import AnimeCarouselItem from "@/components/animes/AnimeCarouselItem";
import { ref } from "vue";

export default {
  components: {
    AnimeCarouselItem,
  },

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
    const date = new Date();
    let year = parseInt(date.getFullYear());
    if (props.year) {
      year = parseInt(props.year);
    }
    const { animeList, fetchData } = getAnimeList(props.sortBy, year, 10);
    fetchData();

    // Manage Carousel
    // Set the first item to be active
    // Transition
    const transitionName = ref("fade");

    const activeSlide = ref(0);

    const updateActiveSlide = (action) => {
      let temp = activeSlide.value;
      if (action == "next") {
        transitionName.value = "slide-next";
        if (temp == animeList.value.length - 1) {
          activeSlide.value = 0;
        } else {
          activeSlide.value = temp + 1;
        }
      }
      if (action == "previous") {
        transitionName.value = "slide-prev";

        if (temp == 0) {
          activeSlide.value = animeList.value.length - 1;
        } else {
          activeSlide.value = temp - 1;
        }
      }
    };
    const setActiveSlide = (newActiveSlideIndex) => {
      activeSlide.value = newActiveSlideIndex;
    };

    return {
      animeList,
      fetchData,
      activeSlide,
      updateActiveSlide,
      setActiveSlide,
      transitionName,
    };
  },
};
</script>

<style lang="scss" scoped>
#slider {
  width: 100%;
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  // background: white;
}
.slider__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 10px;
}
</style>
