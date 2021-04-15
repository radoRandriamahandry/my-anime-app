<template>
  <div class="card__wrapper  bg-white h-auto cursor-pointer">
    <!-- TODO check how to use slot component and slot name -->

    <!-- Default slot here -->

    <!-- Add Status and Score at hover -->

    <!-- Image -->
    <div class="card__image overflow-hidden filter saturate-50">
      <slot name="image" class=""></slot>
    </div>
    <div class="description px-4">
      <!-- Title -->
      <div class="pt-2  font-medium">
        <slot name="title"></slot>
      </div>
      <!-- Schedule and episodes -->
      <div class="border-t border-secondary-100 grid content-center">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.card__wrapper {
  display: grid;
  max-height: 400px;
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
  grid-template-rows: 2fr 1fr;
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
