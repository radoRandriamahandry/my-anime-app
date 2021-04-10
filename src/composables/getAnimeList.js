import { ref } from "@vue/reactivity";
import axios from "axios";

import format from "date-fns/format";
import addSeconds from "date-fns/addSeconds";

// Format Data
const formatDate = (seconds) => {
  const helperDate = addSeconds(new Date(0), seconds);
  return format(helperDate, "do E, HH:mm");
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

// Variables for page info

const getAnimeList = (sortBy, year, perPage = 4) => {
  // TODO Make number perPage a variable
  const variables = {
    page: 1,
    perPage: perPage,
    seasonYear: year,
    sort: sortBy,
  };

  // TODO create a variable for sort
  const query = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $sort: [MediaSort]) {
      Page (page: $page, perPage: $perPage) {
        media (type: ANIME, sort: $sort, season: SPRING, seasonYear: $seasonYear) {
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
        }
      }
    }
    `;

  const url = "https://graphql.anilist.co";
  const animeList = ref([]);

  const fetchData = async () => {
    try {
      const res = await axios.post(url, {
        query: query,
        variables: variables,
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
        };

        animeList.value.push(tempAnime);
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return { animeList, fetchData };
};

export default getAnimeList;
