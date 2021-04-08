<template>
  <teleport to="body">
    <div v-if="showModal" class="backdrop" @click.self="tryClose">
      <div class="modal">
        <h2 class="modal__title">{{ anime.title }}</h2>

        <div class="modal__image">
          <img :src="anime.bannerImage" alt="" />
        </div>
        <div class="modal__meta">
          <!-- TODO -->
          <!-- Status scores -->
          <!-- studios genre  -->
          <!-- Date aired duration -->
          <div class="modal__status">Status: {{ anime.status }}</div>
          <div class="modal__score">
            Average Score: {{ anime.averageScore }}
          </div>
          <div class="modal__studios">Studios: Ghibli, Ufotable</div>
          <div class="modal__score">Genre: Action, Aventure, Historical</div>
          <div class="modal__date">Date aired: Oct 08, 2018 to ...</div>
          <div class="modal__duration">Duration: 23 min/ep</div>
        </div>
        <!-- Add score here -->
        <!-- TODO check if bannerImage is not NULL, else create new header add class modal without bannerImage -->
        <!-- <div
          class="modal__banner"
          :style="{ backgroundImage: `url(${anime.bannerImage})` }"
        ></div> -->

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

<style lang="scss" scoped>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  place-content: center;
  // overflow-y: auto;
}
.modal {
  width: 60%;
  padding: 20px;
  background: white;
  margin: auto;
  max-height: 98vh;
  // TODO customize the scroll bar
  overflow-y: auto;

  &__title {
    // margin-bottom: 0.7em;
  }

  &__meta {
    display: grid;
    grid-template-columns: 1fr auto;
    font-size: 12px;
    color: #888;
    div {
      // margin-bottom: 0.6em;
    }
  }

  // &__banner {
  //   width: 100%;
  //   background-size: 100% auto;
  //   background-repeat: no-repeat;
  //   height: 150px;
  // }
  &__image {
    max-height: 25em;
    overflow: hidden;
    // margin: 1em 0;
    margin-bottom: 0.7em;
    img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      // remove white space after image
      display: block;
    }
  }
}
</style>
