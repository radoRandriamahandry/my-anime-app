import { createApp } from "vue";
// import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

import "./styles/index.css";

// const store = createStore({
//   state() {
//     return {
//       counter: 0,
//     };
//   },
// });

const app = createApp(App);

app.use(router);
// app.use(store);

app.mount("#app");

// createApp(App)
//   .use(router)
//   .mount("#app");
