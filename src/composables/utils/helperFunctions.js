import addSeconds from "date-fns/addSeconds"
import format from "date-fns/format"

// Format Data
export const formatDate = (seconds) => {
  const helperDate = addSeconds(new Date(0), seconds)
  return format(helperDate, "do E, HH:mm")
}

export const formatTrailerUrl = (trailer) => {
  return trailer ? `https://www.youtube.com/embed/${trailer.id}` : "NC"
}

// Validate data
// export const validateEpisodes = (episodes) => {
//   if (episodes) {
//     return episodes;
//   } else {
//     return "??";
//   }
// };

// export const validateScore = (score) => {
//   return score ? score : "NC";
// };

// Get and validate NextAiringEpisode and current episode
export const getNextEpisodeInfo = (nextAiringEpisode) => {
  let currentEpisode
  let timeUntilAiring

  if (nextAiringEpisode != null) {
    currentEpisode = nextAiringEpisode.episode - 1
    timeUntilAiring = formatDate(nextAiringEpisode.timeUntilAiring)
  } else {
    currentEpisode = 0
    timeUntilAiring = "??"
  }
  return { currentEpisode, timeUntilAiring }
}
