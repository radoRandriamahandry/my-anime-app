<template>
  <div class="anime-list-container" v-if="filteredAnime.length">
    <div v-for="anime in filteredAnime" :key="anime.id">
      <!-- TODO create a card component inside AnimeItem component -->
      <AnimeItem :anime="anime" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
// components
import AnimeItem from "../animes/AnimeItem";

export default {
  props: ["animeList"],
  components: {
    AnimeItem,
  },
  setup(props) {
    // limiting anime list
    const filteredAnime = computed(() => {
      // TODO configure it to return 5 by 5 array
      if (props.animeList) {
        return props.animeList.slice(0, 5);
      } else {
        return [];
      }
    });

    return { filteredAnime };
  },
};
</script>

<style lang="scss">
.anime-list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
</style>
