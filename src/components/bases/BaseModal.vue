<template>
  <teleport to="body">
    <!-- TODO import characters -->
    <div v-if="showModal" class="backdrop" @click.self="tryClose">
      <div class="modal">
        <div class="modal__image">
          <img :src="anime.bannerImage" alt="" />
        </div>
        <h2 class="modal__title">{{ anime.title }}</h2>
        <div class="modal__meta">
          <div class="modal__status">Status: {{ anime.status }}</div>
          <div class="modal__score">
            Average Score: {{ anime.averageScore }}
          </div>
          <div class="modal__studios">Studios: Ghibli, Ufotable</div>
          <div class="modal__score">Genre: Action, Aventure, Historical</div>
          <div class="modal__date">Date aired: Oct 08, 2018 to ...</div>
          <div class="modal__duration">Duration: 23 min/ep</div>
        </div>

        <h3 class="modal__subtitle">Synopsis</h3>
        <p class="modal__synopsis"><span v-html="anime.synopsis"></span></p>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    anime: {
      type: Object,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, context) {
    const tryClose = () => {
      context.emit("close");
    };
    return { tryClose };
  },
};
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  place-content: center;
  /* // overflow-y: auto; */
}
.modal {
  width: 60%;
  padding: 20px;
  background: white;
  margin: auto;
  max-height: 98vh;
  /* // TODO customize the scroll bar */
  overflow-y: auto;
}
/* // &__title {
  //   // margin-bottom: 0.7em;
  // } */

.modal__meta {
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 12px;
  color: #888;
  margin-bottom: 1em;

  /* // div {
    //   // margin-bottom: 0.6em;
    // } */
}
.modal__subtitle {
  font-size: inherit;
  /* // margin-bottom: 0.1em;
    // font-weight: inherit; */
}

.modal__synopsis {
  line-height: 1.5em;
  font-size: 13px;
}

.modal__image {
  max-height: 25em;
  overflow: hidden;
  /* // margin: 1em 0; */
  margin-bottom: 0.7em;
}
.modal__image img {
  width: 100%;
  object-fit: cover;
  object-position: top;
  /* // remove white space after image */
  display: block;
}
</style>
