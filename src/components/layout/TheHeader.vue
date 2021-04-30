<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div
        class="relative flex justify-between h-16 sm:h-24 sm:justify-around md:justify-between sm:flex-col md:flex-row md:h-16"
      >
        <!-- Mobile menu button-->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <!-- Desktop menu -->
        <div
          class="flex-1 sm:flex-initial md:flex-1 flex items-center sm:justify-center md:flex-row md:items-stretch md:justify-start"
        >
          <div
            class="flex-shrink-0 ml-12 sm:ml-0 flex items-center sm:justify-center"
          >
            <p class="text-gray-600 font-bold uppercase">Your Anime</p>
          </div>

          <div class="hidden sm:flex sm:ml-6">
            <div class="flex h-full sm:space-x-0 md:space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="getRouteParameter(item.href)"
                :aria-current="item.current ? 'page' : undefined"
                class="grid"
                v-slot="{ isActive }"
              >
                <span
                  class="font-medium  text-sm px-4 grid items-center border-b-2"
                  :class="[
                    isActive
                      ? 'border-primary text-gray-800'
                      : 'text-gray-400 border-transparent hover:text-gray-500 hover:border-gray-300',
                  ]"
                  >{{ item.name }}
                </span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Right part -->
        <div class="sm:flex sm:justify-center md:flex-none">
          <SearchBar />
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 shadow-sm uppercase">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="getRouteParameter(item.href)"
          :aria-current="item.current ? 'page' : undefined"
          class="grid "
          v-slot="{ isActive }"
        >
          <span
            class="font-medium text-sm py-4 grid justify-center"
            :class="[
              isActive
                ? 'bg-primary text-white font-semibold'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-300',
            ]"
            >{{ item.name }}
          </span>
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref } from "vue"
import SearchBar from "@/components/SearchBar"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"
import { MenuIcon, XIcon } from "@heroicons/vue/outline"

export default {
  components: {
    SearchBar,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  props: ["searchValue"],
  setup() {
    const open = ref(false)

    const navigation = ref([
      { name: "Home", href: "home", current: true },
      { name: "Popular", href: "popularity", current: false },
      { name: "Trending", href: "trend", current: false },
      { name: "Favourite", href: "favourites", current: false },
    ])

    const getRouteParameter = (filter) => {
      if (filter === "home") {
        return { name: "Home" }
      } else {
        return { name: "AnimesByFilter", params: { filter: filter } }
      }
    }

    return {
      navigation,
      open,
      getRouteParameter,
    }
  },
}
</script>
