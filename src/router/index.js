import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import AnimeDetails from "../pages/AnimeDetails.vue"
import AnimesByFilter from "../pages/AnimesByFilter.vue"

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

export default router
