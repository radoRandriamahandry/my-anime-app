import { ref } from "@vue/reactivity";

// Create isSearching

// Find a way to get the search value
const searchTerm = ref("");

// Create a function that update searchTerm
const updateSearchTerm = (input) => {
  searchTerm.value = input;
};

const useSearch = () => {
  return { searchTerm, updateSearchTerm };
};

export default useSearch;
