import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AnimeDetails from "../pages/AnimeDetails.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
