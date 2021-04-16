<template>
  <div class="grid place-items-center p-4">
    <input
      class="w-1/4 border-b border-secondary-300 text-center outline-none p-1"
      type="text"
      placeholder="Live search"
      v-model="inputValue"
    />
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  setup(_, context) {
    const inputValue = ref("");
    watch(inputValue, () => {
      context.emit("searchValueChanged", inputValue.value);
    });

    return { inputValue };
  },
};
</script>

<style></style>
