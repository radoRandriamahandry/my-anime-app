<template>
  <transition :name="transitionName" mode="out-in">
    <!-- <transition :name="transitionName"> -->
    <div
      v-if="isActive"
      :class="{ active: isActive, inactive: !isActive }"
      class="slide"
    >
      <!-- TODO create anime slite component using slot -->
      <div class="slide__content">
        <!-- {{ anime.title }} -->
        <div class="slide__coverimage">
          <img :src="anime.imageUrl" alt="" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { onBeforeUpdate, ref } from "vue";
export default {
  props: {
    anime: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeSlide: {
      type: Number,
      required: true,
    },
    transitionName: {
      type: String,
    },
  },
  setup(props) {
    const isActive = ref(false);

    if (props.index == props.activeSlide) {
      isActive.value = true;
    }
    onBeforeUpdate(() => {
      if (props.index == props.activeSlide) {
        isActive.value = true;
      } else {
        isActive.value = false;
      }
    });

    return { isActive };
  },
};
</script>

<style scoped>
/* // Transition animation */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
/* // GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-next-enter-from {
  transform: translateX(100%);
}
.slide-next-enter-to {
  transform: translateX(0%);
}

.slide-next-leave-to {
  transform: translateX(-100%);
}

/* // GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-prev-enter-from {
  transform: translateX(-100%);
}

.slide-prev-enter-to {
  transform: translateX(0%);
}

.slide-prev-leave-to {
  transform: translateX(100%);
}

.slide {
  background: #333;
  color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -50%;
  top: 50%;
  margin-top: -50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide__content {
  width: 100%;
  /* // margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide__image image {
  object-fit: cover;
}
</style>
