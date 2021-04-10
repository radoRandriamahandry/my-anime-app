<template>
  <!-- TODO get example from idbm and myAnimeList -->

  <!-- <div class="card" @click="gotoAnimeDetails(anime.id)"> -->
  <div class="card" @click="handleModalDisplay">
    <BaseModal
      :showModal="showModal"
      :anime="animeDetails"
      @close="closeModal"
    />

    <div
      class="card__image"
      :style="{ backgroundImage: `url(${anime.imageUrl})` }"
    ></div>
    <div class="card__info">
      <div class="card__title">{{ anime.title }}</div>
      <div class="card__genre">
        <ul>
          <li v-for="genre in anime.genres" :key="genre">
            {{ genre }}
          </li>
        </ul>
      </div>

      <div class="card__schedule card__flex">
        <div class="card__time">next. {{ anime.timeUntilAiring }}</div>
        <div>ep. {{ anime.currentEpisode }} / {{ anime.episodes }}</div>
      </div>
    </div>
    <div class="card__footer">
      <div class="card__flex">
        <div class="card__status">{{ anime.status }}</div>
        <div class="card__score">
          Score :
          <span class="card__score--number">{{ anime.averageScore }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRouter } from "vue-router";
import { ref } from "vue";
import BaseModal from "../bases/BaseModal";

export default {
  props: ["anime"],
  components: {
    BaseModal,
  },

  setup(props) {
    // const router = useRouter();

    // const gotoAnimeDetails = (id) => {
    // TODO check if on mobile then redirect to a page else use popup
    // router.push({ name: "AnimeDetails", params: { id: id } });
    // };

    const animeDetails = ref();
    animeDetails.value = { ...props.anime };

    // Manage Modal Display
    const showModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
      document.body.classList.remove("modal-open");
    };

    const handleModalDisplay = () => {
      showModal.value = true;
      document.body.classList.add("modal-open");
    };

    return { animeDetails, showModal, closeModal, handleModalDisplay };
  },
};
</script>

<style lang="scss">
@import "@/styles/abstracts/fonts";
@import "@/styles/abstracts/colors";

.card {
  background: white;
  height: 376px;
  height: 100%;
  display: grid;
  color: $primary-font;
  grid-template-rows: 227px 98px 47px;
  // grid-template-rows: 6fr 3fr 1fr;

  &:hover {
    cursor: pointer;
    // box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

    .card__image {
      filter: grayscale(0%);
    }
  }

  &__flex {
    display: flex;
    justify-content: space-between;
  }

  &__image {
    background-size: cover;
    filter: grayscale(40%);
    margin-bottom: 0.5em;
  }

  // &__image {
  //   width: 100%;
  //   height: auto;
  //   max-width: 491px;
  //   max-height: 352px;
  //   display: block;
  //   overflow: hidden;
  //   object-fit: cover;
  //   object-position: top;
  //   overflow: hidden;
  // }

  &__info {
    font-size: $font-size;
    padding: 0 15px;
    color: $light-grey;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__title {
    font-size: $font-size;
    color: $primary-font;
    font-weight: bold;
  }
  &__genre {
    margin: 0.5em 0 0.5em 0;
    li {
      list-style: none;
      display: inline-block;
      margin-right: 4px;
      margin-bottom: 2px;
      padding: 2px 2px;
      border: 1px solid $secondary;
      border-radius: 45px;
      color: $light-grey;
      font-size: 12px;
    }
  }

  &__footer {
    border-top: solid 0.5px #eee;
    font-size: $font-size;
    display: grid;
    padding: 0 15px;
    align-items: center;
    background: white;

    .card__status {
      text-transform: lowercase;
      color: $clr-primary;
      font-weight: bold;
      border-radius: 45px;
    }

    .card__score {
      &--number {
        font-weight: bold;
      }
    }
  }
}
</style>
