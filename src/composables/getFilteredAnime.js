import { ref } from "vue";
import axios from "axios";

const query = `
    query ($search: String) {
      Page (page: 1, perPage: 10) {
        media (type: ANIME, search: $search, sort: POPULARITY_DESC) {
          id
          title {
            romaji
          }
        }
      }
    }
  `;

const url = "https://graphql.anilist.co";

const animeList = ref([]);
const isLoading = ref(false);

const fetchData = async (searchValue) => {
  const variables = {
    search: searchValue,
  };

  try {
    isLoading.value = true;

    const res = await axios.post(url, {
      query: query,
      variables: variables,
    });
    // Temporary cache the axios result
    const tempAnimeList = [...res.data.data.Page.media];

    tempAnimeList.forEach((data) => {
      const anime = {
        title: data.title.romaji,
        id: data.id,
      };
      animeList.value.push(anime);
    });

    isLoading.value = false;
  } catch (err) {
    console.log(err.message);
    isLoading.value = false;
  }
};

const getFilteredAnime = () => {
  return { animeList, isLoading, fetchData };
};

export default getFilteredAnime;
