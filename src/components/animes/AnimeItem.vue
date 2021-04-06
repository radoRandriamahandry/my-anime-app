<template>
  <!-- TODO get example from idbm and myAnimeList -->
  <div class="card">
    <div>
      <img :src="anime.imageUrl" :alt="anime.title" class="card__image" />
    </div>

    <div class="card__info">
      <div class="card__title">{{ anime.title }}</div>
      <div class="card__genre">
        <ul>
          <li v-for="genre in anime.genres" :key="genre">
            {{ genre }}
          </li>
        </ul>
      </div>
      <!-- <div class="card__episode card__flex">
        <div>Format : {{ anime.format }}</div>
        <div>
          duration : {{ anime.duration
          }}<span v-if="anime.duration != '??'">mn</span>
        </div>
      </div> -->

      <div class="card__schedule card__flex">
        <div>Ep. {{ anime.currentEpisode }}/{{ anime.episodes }}</div>
        <div class="card__time">Next. {{ anime.timeUntilAiring }}</div>
      </div>
    </div>
    <div class="card__footer">
      <div class="card__flex">
        <div class="card__status">{{ anime.status }}</div>
        <div class="card__score">
          Score :
          <span class="card__score--number">{{ anime.averageScore }}</span>
        </div>
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
@import "@/styles/abstracts/colors";

.card {
  background: white;
  height: 384px;
  display: grid;
  color: $primary-font;
  grid-template-rows: 240px 3fr 1fr;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  }

  &__flex {
    display: flex;
    justify-content: space-between;
  }

  &__image {
    width: 100%;
    height: auto;
    max-width: 491px;
    max-height: 352px;
    display: block;
    overflow: hidden;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
  }

  &__info {
    font-size: $font-size;
    padding: 0 15px;
    color: $light-grey;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__status {
    text-transform: lowercase;
    // padding: 2px 5px;
    // border: 1px solid $clr-primary;
    // background: $clr-primary;
    color: $clr-primary;
    font-weight: bold;
    border-radius: 45px;
  }

  &__title {
    // margin-top: 0.4em;
    font-size: $font-size;
    color: $primary-font;
    font-weight: bold;
  }
  &__genre {
    margin: 0.5em 0 0.5em 0;
    li {
      list-style: none;
      display: inline-block;
      margin-right: 4px;
      margin-bottom: 2px;
      padding: 2px 4px;
      border: 1px solid $secondary;
      border-radius: 45px;
      color: $light-grey;
      font-size: 12px;
      // font-weight: bold;
    }
  }

  &__score {
    // color: $primary;
    &--number {
      font-weight: bold;
    }
  }

  &__footer {
    border-top: solid 0.5px #eee;
    font-size: $font-size;
    display: grid;
    padding: 0 15px;
    align-items: center;
    background: white;
  }
}
</style>
