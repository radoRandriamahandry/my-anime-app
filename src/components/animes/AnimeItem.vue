<template>
  <!-- TODO get example from idbm and myAnimeList -->
  <div class="card">
    <img :src="anime.imageUrl" :alt="anime.title" class="card__image" />

    <div class="card__info">
      <div class="card__description">
        <div>
          <div class="card__title">{{ anime.title }}</div>
          <div class="card__anime-genre">
            <ul>
              <li v-for="genre in anime.genres" :key="genre">
                {{ genre }}
              </li>
            </ul>
          </div>
        </div>
        <!-- some info and title or episode -->
        <!-- anime genre -->

        <div class="card__episode-info">
          <div>Format : {{ anime.format }}</div>
          <div>{{ anime.episodes }}ep / {{ anime.duration }}mn</div>
        </div>
      </div>

      <div class="card__footer">
        Add state airing and date here
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["anime"],
  components: {},

  setup() {},
};
</script>

<style lang="scss">
@import "@/styles/abstracts/fonts";

.card {
  width: 337px;
  height: 390px;
  background: white;

  &__image {
    width: 337px;
    height: 241px;
    object-fit: cover;
    object-position: top;
  }

  &__info {
    display: grid;
    grid-template-rows: 105px 40px;
    font-size: $font-size;
  }
  &__description {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    // gap: 4px;
    justify-content: space-around;
  }
  &__title {
    font-weight: bold;
  }
  & li {
    list-style: none;
    display: inline-block;
    margin-right: 6px;
  }

  &__episode-info {
    display: flex;
    justify-content: space-between;
  }

  &__footer {
    border-top: solid 0.5px #eee;
    // justify-self: center;
    padding: 5px 15px;
    // align-self: center;
  }
}
</style>
