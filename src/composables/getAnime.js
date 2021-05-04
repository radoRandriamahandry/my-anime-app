import axios from "axios"

var query = `
query ($page: Int) {
  Page (page: $page, perPage: 10) {
    pageInfo {
      total
      currentPage      
    }
    media (type: ANIME, sort: SCORE_DESC, season: SPRING, seasonYear: 2021) {
      id
      title {
        romaji
      }
    }
  }
}
`

const variables = {
  // perPage: 10,
  page: 1,
}

const url = "https://graphql.anilist.co"

const getAnime = () => {
  const fetchData = async () => {
    try {
      const res = await axios.post(url, {
        query: query,
        variables: variables,
      })

      const media = { ...res.data }

      console.log(media)
    } catch (err) {
      console.log(err.message)
    }
  }
  return { fetchData }
}

export default getAnime
