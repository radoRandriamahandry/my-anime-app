<template>
  <div class="anime-list">
    <h2 class="anime-list__title">{{ title }} <span>anime</span></h2>
    <div class="anime-list__container" v-if="animeList.length">
      <!-- Default anime list -->
      <!-- <div v-for="anime in animeList" :key="anime.id">
        <AnimeListItem :anime="anime" />
      </div> -->
      <div v-for="anime in animeList" :key="anime.id">
        <AnimeListItem :anime="anime" />
      </div>
    </div>
  </div>
</template>

<script>
// components
import AnimeListItem from "../animes/AnimeListItem";
// import BaseModal from "../bases/BaseDialog";

// Composables
import getAnimeList from "@/composables/getAnimeList";

export default {
  // TODO get props for filtering the anime list
  // props: ["sortBy", "title", "year"],
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
  components: {
    AnimeListItem,
  },
  setup(props) {
    const date = new Date();
    let year = parseInt(date.getFullYear());

    if (props.year) {
      year = parseInt(props.year);
    }

    const { animeList, fetchData } = getAnimeList(props.sortBy, year);
    fetchData();

    return { animeList };
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
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
    // TODO use media queries to adjust it
    justify-content: space-between;
    gap: 40px 20px;
  }
}
</style>
