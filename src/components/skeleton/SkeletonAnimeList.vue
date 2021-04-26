<template>
  <div class="animate-pulse mb-9">
    <div class="my-11 p-4 bg-gray-300 max-w-sm"></div>
    <div class="grid overflow-hidden gap-5 grid-cols-fit-200">
      <div v-for="item in 5" :key="item">
        <div class="group grid h-80 overflow-hidden grid-rows-3/1 bg-white">
          <div class="bg-gray-300"></div>
          <div class="grid items-center grid-rows-5/3 px-4">
            <div class="p-2 bg-gray-300"></div>
            <div
              class="border-t border-secondary-100 grid content-center grid-cols-2"
            >
              <div class="p-2 bg-gray-300"></div>
              <div class="p-2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
