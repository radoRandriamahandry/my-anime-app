<template>
  <div
    class="absolute bg-transparent inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  >
    <div
      class="flex items-center space-x-2 border rounded-md p-1 focus-within:border-primary"
    >
      <SearchIcon class="h-4 w-4 text-gray-500" />
      <input
        type="text"
        placeholder="Live search"
        v-model.trim="inputValue"
        class="text-sm bg-transparent outline-none placeholder-gray-400 focus:placeholder-gray-300"
      />
    </div>
  </div>
</template>

<script>
import { watch, ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";

export default {
  components: {
    SearchIcon,
  },
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
