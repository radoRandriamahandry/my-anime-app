import { ref } from "@vue/reactivity";
import axios from "axios";
// import dateFns from "date-fns";

// const formatDate = (seconds) => {
//   const helperDate = dateFns.addSeconds(new Date(0), seconds);
//   return dateFns.format(helperDate, "jj:hh:mm:ss");
// };

const variables = {
  page: 1,
  perPage: 8,
};

const query = `
query ($page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    media (type: ANIME, sort: SCORE_DESC, season: SPRING, seasonYear: 2021) {
      id
      title {
        romaji
      }
      coverImage {
        extraLarge
      }
      episodes
      genres
      duration
      format
      nextAiringEpisode {
        episode
        timeUntilAiring
      }
    }
  }
}
`;

//           title: anime.title,
//           id: anime.mal_id,
//           score: anime.score,
//           startDate: anime.start_date,
//           type: anime.type,
//           rank: anime.rank,
//           imageUrl: anime.image_url,

const url = "https://graphql.anilist.co";

const animeList = ref([]);

const getAnimeList = () => {
  const fetchData = async () => {
    try {
      const res = await axios.post(url, {
        query: query,
        variables: variables,
      });

      // Temporary animeList for formatting the final animeList
      const tempAnimeList = [...res.data.data.Page.media];

      tempAnimeList.forEach((anime) => {
        // console.log("Next episode : ", nextEpisodeAiringAt);

        // console.log(currentEpisode);
        // let tempCurrentEpisode =
        //   anime.nextAiringEpisode.episode > 0
        //     ? anime.nextAiringEpisode.episode - 1
        //     : 0;
        // let tempTimeUntilAiring =
        //   anime.nextAiringEpisode.timeUntilAiring > 0
        //     ? anime.nextAiringEpisode.timeUntilAiring
        //     : "Unknown";

        // check if Next Airing Episode is defined
        let tempCurrentEpisode;
        let tempTimeUntilAiring;
        if (anime.nextAiringEpisode != null) {
          tempCurrentEpisode = anime.nextAiringEpisode.episode - 1;
          tempTimeUntilAiring = anime.nextAiringEpisode.timeUntilAiring;
        } else {
          tempCurrentEpisode = 0;
          tempTimeUntilAiring = "Unknown";
        }

        const tempAnime = {
          id: anime.id,
          title: anime.title.romaji,
          imageUrl: anime.coverImage.extraLarge,
          episodes: anime.episodes,
          genres: [...anime.genres],
          duration: anime.duration,
          format: anime.format,
          currentEpisode: tempCurrentEpisode,
          timeUntilAiring: tempTimeUntilAiring,
          // check number of released episode
        };
        animeList.value.push(tempAnime);
      });

      console.log(animeList.value);
    } catch (err) {
      console.log(err.message);
    }
  };
  return { animeList, fetchData };
};

// export default getAnime;
export default getAnimeList;
