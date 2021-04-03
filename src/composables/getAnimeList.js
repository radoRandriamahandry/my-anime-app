import { ref } from "vue";
import jikanjs from "jikanjs";

// Load anime list
// TODO Add isPending and error value

const getAnimeList = () => {
  const animeList = ref(null);

  const loadAnime = async () => {
    try {
      // TODO check what option we have with the page parameter
      const res = await jikanjs.loadTop("anime", 1, "upcoming");
      // console.log(typeof res);
      // console.log(res.top);
      animeList.value = res.top.map((anime) => {
        return {
          title: anime.title,
          id: anime.mal_id,
          score: anime.score,
          startDate: anime.start_date,
          type: anime.type,
          rank: anime.rank,
          imageUrl: anime.image_url,
        };
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return { animeList, loadAnime };
};

export default getAnimeList;
