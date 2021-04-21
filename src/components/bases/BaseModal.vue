<template>
  <teleport to="body">
    <!-- TODO import characters -->
    <div v-if="showModal" class="backdrop" @click.self="tryClose">
      <div class="modal rounded-lg overflow-hidden">
        <div class="max-h-96 overflow-hidden">
          <img class="block" :src="anime.bannerImage" alt="" />
        </div>

        <div class="p-8 pt-4">
          <h2 class="font-bold">{{ anime.title }}</h2>
          <div class="grid grid-cols-3 text-xs text-secondary-400 mb-4">
            <!-- <div class="grid grid-cols-2 text-xs text-secondary-400 mb-4"> -->
            <div class="">
              <span class="font-bold">Genre:</span> Action, Aventure, Historical
            </div>
            <div class="">
              <span class="font-bold">Studios:</span> Ghibli, Ufotable
            </div>
            <div class="">
              <span class="font-bold">Date aired:</span> Oct 08, 2018 to ...
            </div>
            <div class="">
              <span class="font-bold">Status: </span>
              <span class="text-primary">{{ anime.status }}</span>
            </div>
            <div class="">
              <span class="font-bold">Duration:</span> 23 min/ep
            </div>
            <div class="">
              <span class="font-bold">Score: </span>
              <span class="text-primary ">{{ anime.averageScore }}</span>
            </div>
          </div>
          <h3 class="font-bold">Synopsis</h3>
          <p class="leading-6 text-sm"><span v-html="anime.synopsis"></span></p>
          <div v-if="anime.videoTrailer != 'NC'">
            <h3 class="font-bold mt-4 mb-2">Trailer</h3>
            <div class="iframe__container">
              <iframe :title="anime.title" :src="anime.videoTrailer"></iframe>
            </div>
          </div>
        </div>
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
.iframe__container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}

.iframe__container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

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
  /* padding: 20px; */
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
}

.modal__image img {
  width: 100%;
  object-fit: cover;
  object-position: top;
  /* // remove white space after image */
  display: block;
}
</style>
