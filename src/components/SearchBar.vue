<template>
  <div class="grid place-items-center p-4">
    <input
      class="w-1/4 border-b border-secondary-300 text-center outline-none p-1"
      type="text"
      placeholder="Live search"
      @focus="searchFocus"
    />
  </div>
</template>

<script>
export default {
  setup(props, context) {
    const searchFocus = () => {
      // console.log("Focus on live search");
      context.emit("focusOnSearch");
    };

    return { searchFocus };
  },
};
</script>

<style></style>
