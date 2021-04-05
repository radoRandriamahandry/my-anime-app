<template>
  <div class="anime-list">
    <h2 class="anime-list__title">Top upcoming <span>spring anime</span></h2>
    <div class="anime-list__container" v-if="animeList.length">
      <div v-for="anime in animeList" :key="anime.id">
        <!-- TODO create a card component inside AnimeItem component -->
        <AnimeItem :anime="anime" />
      </div>
    </div>
  </div>
</template>

<script>
// components
import AnimeItem from "../animes/AnimeItem";

export default {
  props: ["animeList"],
  components: {
    AnimeItem,
  },
};
</script>

<style lang="scss">
.anime-list {
  &__title {
    padding: 45px 0;
    span {
      font-weight: 100;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
}
</style>
