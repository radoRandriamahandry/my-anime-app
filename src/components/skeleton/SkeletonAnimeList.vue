<template>
  <div class="mb-9">
    <div class="animate-pulse my-11 p-4 bg-gray-300 max-w-sm rounded-md"></div>
    <div class="grid overflow-hidden gap-5 grid-cols-fit-200">
      <div v-for="item in 5" :key="item">
        <div class="group grid h-80 overflow-hidden grid-rows-3/1 bg-white">
          <div class="animate-pulse bg-gray-300 "></div>
          <div class="grid items-center grid-rows-5/3 px-4">
            <div class="animate-pulse p-2 bg-gray-300 rounded-md"></div>
            <div class="grid gap-x-4 grid-cols-2">
              <div class="animate-pulse p-2 bg-gray-300 rounded-md"></div>
              <div class="animate-pulse p-2 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
