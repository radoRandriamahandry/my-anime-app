<template>
  <!-- TODO get example from idbm and myAnimeList -->
  <!-- Use card -->
  <div class="card-container">
    <!-- image size : 225x336 -->
    <img
      :src="anime.imageUrl"
      :alt="anime.title"
      class="card-container__image"
    />
    <p>Anime title : {{ anime.title }}</p>
  </div>
</template>

<script>
// import { computed } from "vue";
import getAnime from "@/composables/getAnime";

export default {
  props: ["anime"],
  components: {},

  setup(props) {
    // getting the anime image
    // use composable getAnime to get anime details
    const { anime: animeDetails, fetchData: getAnimeInfo } = getAnime();
    getAnimeInfo(props.anime.id);
    console.log(animeDetails);

    // Getting anime image
    // const detailedAnime = computed(() => {
    //   return anime
    // })
    // return { detailedAnime };
  },
};
</script>

<style lang="scss">
.card-container {
  width: 337px;
  background: white;

  &__image {
    width: 337px;
    height: 241px;
    object-fit: cover;
  }
}
</style>
