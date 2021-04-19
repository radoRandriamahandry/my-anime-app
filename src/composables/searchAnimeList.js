import { ref } from "@vue/reactivity";
import axios from "axios";

import format from "date-fns/format";
import addSeconds from "date-fns/addSeconds";

// Format Data
const formatDate = (seconds) => {
  const helperDate = addSeconds(new Date(0), seconds);
  return format(helperDate, "do E, HH:mm");
};

const formatTrailerUrl = (trailer) => {
  return trailer ? `https://www.youtube.com/embed/${trailer.id}` : "NC";
};

// Validate data
const validateEpisodes = (episodes) => {
  if (episodes) {
    return episodes;
  } else {
    return "??";
  }
};

const validateScore = (score) => {
  return score ? score : "NC";
};

// Get and validate NextAiringEpisode and current episode
const getNextEpisodeInfo = (nextAiringEpisode) => {
  let currentEpisode;
  let timeUntilAiring;

  if (nextAiringEpisode != null) {
    currentEpisode = nextAiringEpisode.episode - 1;
    timeUntilAiring = formatDate(nextAiringEpisode.timeUntilAiring);
  } else {
    currentEpisode = 0;
    timeUntilAiring = "??";
  }
  return { currentEpisode, timeUntilAiring };
};

// TODO create export for this
// List of data to querry
const queryData = `
    id
    title {
      romaji
    }
    description
    coverImage {
      extraLarge
    }
    bannerImage
    episodes
    genres
    duration
    format
    nextAiringEpisode {
      episode
      timeUntilAiring
    }
    averageScore
    status
    trailer {
      id
      site
      thumbnail
    }
  `;

// Cancelling current query when another one is launched
// const source = axios.CancelToken.source();
let cancelToken;

const searchAnimeList = () => {
  // TODO Make number perPage a variable

  const animeList = ref([]);
  const isLoading = ref(false);

  const fetchData = async (sortBy, year, perPage = 4, searchValue) => {
    const url = "https://graphql.anilist.co";

    // Check if there are any previous pending requests
    console.log(typeof cancelToken);
    if (cancelToken) {
      cancelToken.cancel("Operation canceled due to new request.");
      console.log("query should be cancelled");
    }

    // Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    let variables;
    let query;

    // TODO Create a function for generating the query
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
        cancelToken: cancelToken.token,
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

      console.log("animelist: ", animeList.value);
      isLoading.value = false;
    } catch (err) {
      console.log(err.message);
      isLoading.value = false;
    }
  };

  return { isLoading, animeList, fetchData };
};

export default searchAnimeList;