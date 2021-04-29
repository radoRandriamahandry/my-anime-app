import { ref } from "@vue/reactivity"
import axios from "axios"

import { animeDetails, setQueryRequest } from "./utils/helperQuery"
import { formatTrailerUrl, getNextEpisodeInfo } from "./utils/helperFunctions"

const dataToQuery = animeDetails

// Cancelling current query when another one is launched
let call

const searchAnimeList = () => {
  // TODO Make number perPage a variable

  const animeList = ref([])
  const isLoading = ref(false)

  const fetchData = async (sortBy, year, perPage, searchValue) => {
    const url = "https://graphql.anilist.co"

    const { variables, query } = setQueryRequest(
      sortBy,
      year,
      perPage,
      dataToQuery,
      searchValue
    )

    // Check if there are any previous pending requests
    // Cancelling the previous call
    call && call.cancel()

    // Create a new token for the current call
    call = axios.CancelToken.source()

    try {
      isLoading.value = true

      const res = await axios.post(
        url,
        {
          query: query,
          variables: variables,
        },
        {
          cancelToken: call.token,
        }
      )

      // Temporary animeList for formatting the final animeList
      const tempAnimeList = [...res.data.data.Page.media]

      animeList.value = tempAnimeList.map((anime) => {
        const { currentEpisode, timeUntilAiring } = getNextEpisodeInfo(
          anime.nextAiringEpisode
        )

        return {
          id: anime.id,
          title: anime.title.romaji,
          synopsis: anime.description,
          imageUrl: anime.coverImage.extraLarge,
          bannerImage: anime.bannerImage,
          genres: [...anime.genres],
          duration: anime.duration > 0 ? anime.duration : "??",
          format: anime.format,
          episodes: anime.episodes || "??",
          currentEpisode: currentEpisode,
          timeUntilAiring: timeUntilAiring,
          averageScore: anime.averageScore || "??",
          // TODO check all available status and format it
          status: anime.status,
          videoTrailer: formatTrailerUrl(anime.trailer),
        }
      })
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      if (axios.isCancel(err)) {
        console.log("Call canceled due to new request")
      } else {
        console.log(err.message)
      }
    }
  }

  return { isLoading, animeList, fetchData }
}

export default searchAnimeList
