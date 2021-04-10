<template>
  <div>Anime carousel item {{ index }}</div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    activeSlide: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
