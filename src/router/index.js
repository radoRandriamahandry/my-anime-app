import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import AnimeDetails from "../pages/AnimeDetails.vue"
import AnimesByFilter from "../pages/AnimesByFilter.vue"

import useSearch from "@/composables/search/useSearch"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/anime/:id",
    name: "AnimeDetails",
    component: AnimeDetails,
    props: true,
  },

  {
    path: "/animes/:filter",
    name: "AnimesByFilter",
    component: AnimesByFilter,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Reset search value before change route
const { updateSearchTerm } = useSearch()
router.beforeEach((to, from, next) => {
  updateSearchTerm("")
  next()
})

export default router
