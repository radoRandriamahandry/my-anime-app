<template>
  <div class="mb-9">
    <div v-if="isLoading">
      <SkeletonAnimeList />
    </div>
    <div v-else>
      <h2 class="py-11 font-light">
        <span class="font-bold">{{ title }}</span> anime
      </h2>
      <div
        class="grid overflow-hidden gap-x-5 gap-y-10 grid-cols-fit-200"
        v-if="animeList.length"
      >
        <div v-for="anime in animeList" :key="anime.id">
          <AnimeListItem :anime="anime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import AnimeListItem from "../animes/AnimeListItem"
import SkeletonAnimeList from "@/components/skeleton/SkeletonAnimeList"

// Composables
import getAnimeList from "@/composables/getAnimeList"
import { computed, watchEffect } from "vue"

export default {
  components: {
    AnimeListItem,
    SkeletonAnimeList,
  },

  // TODO get props for filtering the anime list
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
    perPage: {
      type: [Number, String],
      required: false,
    },
  },

  setup(props) {
    // Start fetching the anime list
    const date = new Date()
    let year = parseInt(date.getFullYear())

    // const sortBy = computed(() => {
    //   return props.sortBy
    // })

    if (props.year) {
      year = parseInt(props.year)
    }
    const { isLoading, animeList, fetchData } = getAnimeList()

    watchEffect(() => {
      animeList.value = []
      fetchData(props.sortBy, year, parseInt(props.perPage))
    })

    // fetchData(sortBy.value, year, parseInt(props.perPage))

    return { isLoading, animeList }
  },
}
</script>

<style></style>
