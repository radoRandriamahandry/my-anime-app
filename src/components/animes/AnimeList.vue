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
// import BaseModal from "../bases/BaseDialog";

export default {
  props: ["animeList"],
  components: {
    AnimeItem,
  },
  setup() {
    // return { showModal, closeModal };
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
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
    // TODO use media queries to adjust it
    justify-content: space-between;
    gap: 40px 20px;
  }
}
</style>
