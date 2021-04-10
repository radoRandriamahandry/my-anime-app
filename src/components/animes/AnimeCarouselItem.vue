<template>
  <transition :name="transitionName" mode="out-in">
    <div
      v-if="isActive"
      :class="{ active: isActive, inactive: !isActive }"
      class="slide"
    >
      <div class="slide__content">Anime carousel item {{ index }}</div>
    </div>
  </transition>
</template>

<script>
import { onBeforeUpdate, ref } from "vue";
export default {
  props: {
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
    // const myTransition = ref(null);
    // if (props.transitionName) {
    //   myTransition.value = props.transitionName;
    // } else {
    //   myTransition.value = "fade";
    // }

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

<style lang="scss" scoped>
// Transition animation
// Transition animation
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  // transform: translateX(0px);
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
// GO TO NEXT SLIDE
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-next-enter-from {
  transform: translate(100%);
}
.slide-next-enter-to {
  transform: translate(0%);
}

.slide-next-leave-to {
  transform: translate(-100%);
}

// GO TO PREVIOUS SLIDE
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-prev-enter-from {
  transform: translate(-100%);
}

.slide-prev-enter-to {
  transform: translate(0%);
}

.slide-prev-leave-to {
  transform: translate(100%);
}

.inactive {
  display: none;
}

.slide {
  background: #555;
  color: white;
  // width: 60%;
  // margin: 0 10px;

  &__content {
    padding: 50px;
    text-align: center;
  }
}
</style>
