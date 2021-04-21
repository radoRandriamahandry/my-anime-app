<template>
  <div
    class="group grid max-h-80 overflow-hidden grid-rows-3/1 bg-white h-auto cursor-pointer"
  >
    <!-- TODO check how to use slot component and slot name -->
    <div
      class="card__image overflow-hidden filter saturate-50 group-hover:saturate-100"
    >
      <img
        :src="imageUrl"
        class="transition duration-500 group-hover:transform group-hover:scale-105"
      />
    </div>
    <div class="grid items-center grid-rows-5/3 px-4">
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

<style></style>
