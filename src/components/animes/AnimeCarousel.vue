<template>
  <!-- Get the cover image first -->
  <div class="slides">
    <div v-for="(anime, index) in animeList" :key="anime.id">
      <AnimeCarouselItem
        :ref="setItemRef"
        class="slide"
        :index="index"
        :activeSlide="activeSlide"
      />
    </div>
  </div>

  <button @click="changeActiveSlide('previous')">Previous slide</button>
  <button @click="changeActiveSlide('next')">Next slide</button>
</template>

<script>
// Composables
import getAnimeList from "@/composables/getAnimeList";

// Components
import AnimeCarouselItem from "@/components/animes/AnimeCarouselItem";
import { onBeforeUpdate, onUpdated, ref } from "vue";

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
    const activeSlide = ref(0);

    let itemRefs = [];

    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    activeSlide.value = 0;
    // find a away to link active to the element
    // pass acitve as a props

    onBeforeUpdate(() => (itemRefs = []));
    onUpdated(() =>
      itemRefs.forEach((el, index) => {
        if (index === activeSlide.value) {
          el.$el.classList.add("slide__active");
        } else {
          el.$el.classList.add("slide__invisible");
        }
      })
    );

    // Manage active slide
    const changeActiveSlide = (action) => {
      let previousActiveSlide = activeSlide.value;

      if (action == "next") {
        if (activeSlide.value == itemRefs.length - 1) {
          activeSlide.value = 0;
        } else {
          activeSlide.value = activeSlide.value + 1;
        }
      }
      if (action == "previous") {
        if (activeSlide.value == 0) {
          activeSlide.value = itemRefs.length - 1;
        } else {
          activeSlide.value = activeSlide.value - 1;
        }
      }

      itemRefs.forEach((el, index) => {
        if (index == activeSlide.value) {
          el.$el.classList.add("slide__active");
          el.$el.classList.remove("slide__invisible");
        } else if (index == previousActiveSlide) {
          el.$el.classList.remove("slide__active");
        } else {
          el.$el.classList.add("slide__invisible");
        }
      });
    };

    return { animeList, fetchData, setItemRef, activeSlide, changeActiveSlide };
  },
};
</script>

<style lang="scss" scoped>
.slides {
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  // width: 90%;
}
.slide {
  padding: 100px;
  margin: 0 auto;
  background: blue;
  text-align: center;
  width: 70%;
  color: white;
  font-weight: bold;
  text-transform: uppercase;

  &__invisible {
    display: none;
  }
  // &__active {
  //   background: green;
  // }
}
</style>
