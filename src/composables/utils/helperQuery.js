export const animeDetails = `
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
`

// Set the type of query search or filter
export const setQueryRequest = (
  sortBy,
  year,
  perPage,
  dataToQuery,
  isSearch
) => {
  let variables
  let query

  if (isSearch) {
    variables = {
      page: 1,
      perPage: perPage,
      // seasonYear: year,
      sort: sortBy,
      search: isSearch,
    }
    query = `
      query ($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
        Page (page: $page, perPage: $perPage) {
          media (type: ANIME, sort: $sort,search: $search) {
            ${dataToQuery}
          }
        }
      }    
    `
  }
  if (!isSearch) {
    variables = {
      page: 1,
      perPage: perPage,
      seasonYear: year,
      sort: sortBy,
    }
    query = `
      query ($page: Int, $perPage: Int, $seasonYear: Int, $sort: [MediaSort]) {
        Page (page: $page, perPage: $perPage) {
          media (type: ANIME, sort: $sort, season: SPRING, seasonYear: $seasonYear) {
            ${dataToQuery}
          }
        }
      }    
    `
  }

  return { variables, query }
}
