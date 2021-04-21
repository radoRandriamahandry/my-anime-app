<template>
  <div class="card__wrapper overflow-hidden bg-white h-auto cursor-pointer">
    <!-- TODO check how to use slot component and slot name -->

    <!-- Default slot here -->
    <!-- Add Status and Score at hover -->
    <!-- Image -->
    <div class="card__image overflow-hidden filter saturate-50">
      <img :src="imageUrl" class="transition duration-500" />
    </div>
    <div class="description px-4">
      <!-- Title -->
      <div class="pt-2 text-sm ">
        {{ title }}
      </div>
      <!-- Schedule and episodes -->
      <div
        class="border-t border-secondary-100 grid content-center grid-cols-2"
      >
        <div class="font-semibold text-secondary-300 text-sm lowercase">
          {{ status }}
        </div>
        <div class="text-secondary-300 text-sm text-right">
          Score:
          <span class="text-primary font-semibold">{{ score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    status: {
      type: String,
    },
    score: {
      required: false,
    },
  },
};
</script>

<style>
.card__wrapper {
  display: grid;
  max-height: 325px;
  grid-template-rows: 3fr 1fr;
}

.card__wrapper:hover .card__image > img {
  @apply transform scale-105;
}

.card__wrapper:hover .card__image {
  @apply saturate-100;
}

.description {
  display: grid;
  grid-template-rows: 5fr 3fr;
  align-items: center;
}

/* // .card__image {
  //   width: 100%;
  //   height: auto;
  //   max-width: 491px;
  //   max-height: 352px;
  //   display: block;
  //   overflow: hidden;
  //   object-fit: cover;
  //   object-position: top;
  //   overflow: hidden;
  // } */
</style>
