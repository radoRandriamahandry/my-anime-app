import { ref } from "vue";
import jikanjs from "jikanjs";

// TODO add isPending status

const anime = ref(null);

const fetchData = async (id) => {
  try {
    const res = await jikanjs.loadAnime(id);
    console.log("Res : ", res);
    // TODO add validation and error handling
    anime.value = {
      title: res.title,
      synopsis: res.synopsis,
      episodes: res.episodes,
      aired: res.aired,
      airing: res.airing,
      score: res.score,
      scoredBy: res.scored_by,
      favorites: res.favorites,
      rank: res.rank,
      popularity: res.popularity,
      type: res.type,
      genres: [...res.genres],
      status: res.status,
      studios: [...res.studios],
      premiered: res.premiered,
      broadcast: res.broadcast,
      duration: res.duration,
      rating: res.rating,
      opening: [...res.opening_themes],
      ending: [...res.ending_themes],
    };
    // return anime;
  } catch (err) {
    console.error(err.message);
  }
};

const getAnime = () => {
  return { anime, fetchData };
};

export default getAnime;
