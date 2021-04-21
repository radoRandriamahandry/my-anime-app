import { ref } from "@vue/reactivity";
import axios from "axios";

import { animeDetails } from "./utils/animeDetails";
import {
  formatTrailerUrl,
  validateEpisodes,
  validateScore,
  getNextEpisodeInfo,
} from "./utils/helpers";

const getAnimeList = () => {
  // TODO Make number perPage a variable
  // const cancelToken = axios.cancelToken;

  const isLoading = ref(false);
  const animeList = ref([]);

  const fetchData = async (sortBy, year, perPage = 4, searchValue) => {
    const url = "https://graphql.anilist.co";
    let variables;
    let query;

    const queryData = animeDetails;

    // Manage searchValue
    if (searchValue) {
      variables = {
        page: 1,
        perPage: 10,
        // seasonYear: year,
        sort: sortBy,
        search: searchValue,
      };
      query = `
        query ($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
          Page (page: $page, perPage: $perPage) {
            media (type: ANIME, sort: $sort,search: $search) {
              ${queryData}
            }
          }
        }    
      `;
    }
    if (!searchValue) {
      variables = {
        page: 1,
        perPage: perPage,
        seasonYear: year,
        sort: sortBy,
      };
      query = `
          query ($page: Int, $perPage: Int, $seasonYear: Int, $sort: [MediaSort]) {
          Page (page: $page, perPage: $perPage) {
            media (type: ANIME, sort: $sort, season: SPRING, seasonYear: $seasonYear) {
              ${queryData}
            }
          }
        }    
      `;
    }

    try {
      isLoading.value = true;

      const res = await axios.post(url, {
        query: query,
        variables: variables,
        // cancelToken: cancelToken.token,
      });

      // Temporary animeList for formatting the final animeList
      const tempAnimeList = [...res.data.data.Page.media];

      tempAnimeList.forEach((anime) => {
        const { currentEpisode, timeUntilAiring } = getNextEpisodeInfo(
          anime.nextAiringEpisode
        );

        const tempAnime = {
          id: anime.id,
          title: anime.title.romaji,
          synopsis: anime.description,
          imageUrl: anime.coverImage.extraLarge,
          bannerImage: anime.bannerImage,
          genres: [...anime.genres],
          duration: anime.duration > 0 ? anime.duration : "??",
          format: anime.format,
          episodes: validateEpisodes(anime.episodes),
          currentEpisode: currentEpisode,
          timeUntilAiring: timeUntilAiring,
          averageScore: validateScore(anime.averageScore),
          // TODO check all available status and format it
          status: anime.status,
          videoTrailer: formatTrailerUrl(anime.trailer),
        };

        animeList.value.push(tempAnime);
      });
      isLoading.value = false;
    } catch (err) {
      console.log(err.message);
      isLoading.value = false;
    }
  };

  return { isLoading, animeList, fetchData };
};

export default getAnimeList;
