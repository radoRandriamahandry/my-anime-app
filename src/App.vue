<template>
  <!-- <div id="nav"><router-link to="/">Home</router-link></div> -->
  <TheHeaderTest />
  <router-view />
</template>

<script>
// import TheHeader from "./components/layout/TheHeader";
import TheHeaderTest from "./components/layout/TheHeaderTest";
export default {
  components: {
    // TheHeader,
    TheHeaderTest,
  },
};
</script>

<style></style>
