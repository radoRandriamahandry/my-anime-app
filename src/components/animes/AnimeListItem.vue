<template>
  <!-- TODO get example from idbm and myAnimeList -->

  <!-- <div class="card" @click="gotoAnimeDetails(anime.id)"> -->
  <div class="card" @click="handleModalDisplay">
    <BaseModal :showModal="showModal" :anime="anime" @close="closeModal" />

    <!-- Base Card Start -->
    <BaseCard
      :imageUrl="anime.imageUrl"
      :title="anime.title"
      :status="anime.status"
      :currentEpisode="anime.currentEpisode"
      :episodes="anime.episodes"
    />
  </div>
</template>

<script>
// import { useRouter } from "vue-router";
import { ref } from "vue"
import BaseModal from "../bases/BaseModal"
import BaseCard from "../bases/BaseCard"

export default {
  props: ["anime"],
  components: {
    BaseModal,
    BaseCard,
  },

  setup() {
    // const animeDetails = ref();
    // animeDetails.value = { ...props.anime };

    // Manage Modal Display
    const showModal = ref(false)
    const closeModal = () => {
      showModal.value = false
      document.body.classList.remove("modal-open")
    }

    const handleModalDisplay = () => {
      showModal.value = true
      document.body.classList.add("modal-open")
    }

    return { showModal, closeModal, handleModalDisplay }
  },
}
</script>

<style>
/* @import "@/styles/abstracts/fonts"; */
/* @import "@/styles/abstracts/colors"; */

/* .card {
  background: white;
  height: 376px;
  height: 100%;
  display: grid;
  color: var(--primary-font);
  grid-template-rows: 227px 98px 47px;
} */
/* .card:hover {
  cursor: pointer;
}
.card:hover .card__image {
  filter: grayscale(0%);
}

.card__flex {
  display: flex;
  justify-content: space-between;
}

.card__image {
  background-size: cover;
  filter: grayscale(40%);
  margin-bottom: 0.5em;
}



.card__info {
  font-size: var(--font-size);
  padding: 0 15px;
  color: var(--light-grey);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card__title {
  font-size: var(--font-size);
  color: var(--primary-font);
  font-weight: bold;
}
.card__genre {
  margin: 0.5em 0 0.5em 0;
}
.card__genre li {
  list-style: none;
  display: inline-block;
  margin-right: 4px;
  margin-bottom: 2px;
  padding: 2px 2px;
  border: 1px solid var(--secondary);
  border-radius: 45px;
  color: var(--light-grey);
  font-size: 12px;
}

.card__footer {
  border-top: solid 0.5px #eee;
  font-size: var(--font-size);
  display: grid;
  padding: 0 15px;
  align-items: center;
  background: white;
}
.card__footer__status {
  text-transform: lowercase;
  color: var(--clr-primary);
  font-weight: bold;
  border-radius: 45px;
}

.card__footer__score--number {
  font-weight: bold;
} */
</style>
