<template>
  <div class="grid place-items-center p-4">
    <!-- <input
      class="w-1/4 border-b border-secondary-300 text-center outline-none p-1"
      type="text"
      placeholder="Live search"
      v-model="inputValue"
    /> -->
    <input
      class="w-1/4 border-b border-secondary-300 text-center outline-none p-1"
      type="text"
      placeholder="Live search"
      v-model.trim="inputValue"
    />
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  props: ["searchValue"],
  setup(props, context) {
    const inputValue = ref("");

    watch(inputValue, () => {
      context.emit("searchValueChanged", inputValue);
    });

    // const handleSearch = () => {
    //   context.emit("searchValueChanged", inputValue);
    // };
    return { inputValue };
  },
};
</script>

<style></style>
