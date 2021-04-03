<template>
  <!-- <div id="nav"><router-link to="/">Home</router-link></div> -->
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss"></style>
