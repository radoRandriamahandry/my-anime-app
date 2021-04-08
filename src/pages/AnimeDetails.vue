<template>
  <div class="container">
    <p>Anime Details page</p>
    <!-- <BaseButton @click="handleClick">Get anime info</BaseButton> -->
    <!-- <AnimeItem v-if="anime" :anime="anime" /> -->
  </div>
</template>

<script>
// import { ref } from "vue";

// Components
// import AnimeItem from "../components/animes/AnimeItem";
// import BaseButton from "../components/bases/BaseButton";

// Composables
// import getAnime from "../composables/getAnime";

export default {
  props: ["id"],
  // components: {
  //   AnimeItem,
  //   BaseButton,
  // },
  setup(props) {
    // const { fetchData } = getAnime();

    // const anime = ref(null);

    console.log(props.id);

    // const handleClick = async () => {
    //   // TODO add validation and error handling
    //   anime.value = await fetchData(props.id);
    // };

    // return { handleClick, anime };
  },
};
</script>

<style></style>
