<template>
  <router-link
    :to="computedDestination"
    class="cardBorder hover:shadow-lg hover:-translate-y-2 duration-300 ease-out"
  >
    <div
      class="card-holder bg-white"
      :class="[direction == 'left' ? 'desktop-row' : 'desktop-row-reverse']"
    >
      <div class="img-wrapper">
        <img
          loading="lazy"
          class="image-icon d-lg-flex"
          :id="service.image.split('/').pop()"
          :src="service.image"
          :alt="service.imageAlt"
        />
      </div>
      <div class="text-wrapper">
        <h2 class="text-black text-4 mb-3">
          {{ service.name }}
        </h2>
        <p class="text-black text-1">
          {{ service.shortDescription }}
        </p>
      </div>
    </div>
    <div
      class="goTo flex items-center gap-2 md:hidden w-full p-8 pt-0 underline underline-offset-4"
    >
      <LeftHandArrowIcon class="h-8 w-8" />
      <span class="text-2 text-black">{{ service.callToAction }}</span>
    </div>
  </router-link>
</template>


<script>
import { computed } from "vue";
import LeftHandArrowIcon from "./evergreens/icons/LeftHandArrowIcon.vue";
export default {
  components: { LeftHandArrowIcon },
  props: {
    service: {
      type: Object,
      required: true,
    },
    direction: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const computedDestination = computed(() => {
      const destination = props.service.routeParams
        ? {
            name: "service",
            params: { instance: props.service.routeParams },
          }
        : { name: props.service.name };
      return destination;
    });

    return {
      computedDestination,
    };
  },
};
</script>


<style lang="scss" scoped>
// @keyframes animatedgradient {
//   0% {
//     background-position: 0% 0%;
//   }
//   100% {
//     background-position: -150% 0;
//   }

// }

.goTo {
  color: #ffb725;
}

.cardBorder {
  display: block;
  background: white;
  position: relative;
  border-radius: 25px;
}

.card-holder {
  flex-direction: row;
  @media (min-width: 1280px) {
    flex-direction: column;
  }
}

.desktop-row {
  @media (max-width: 1280px) {
    flex-direction: row;
  }
}

.desktop-row-reverse {
  @media (max-width: 1280px) {
    flex-direction: row-reverse;
  }
}

.text-wrapper {
  padding: 2rem;
  @media (min-width: 1280px) {
    order: 2;
    padding: 4rem;
  }
  @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    padding: 2rem;
  }
  @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 3) and (min-resolution: 288dpi) and (orientation: landscape) {
    padding: 2rem;
  }
}

.img-wrapper {
  display: flex;
  padding: 0.5rem;
  img {
    min-height: 30vh;
    @media screen and (min-width: 1024px) {
      min-height: 40vh;
    }
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
  }
  flex-grow: 1;
  // max-width: 60%;
  align-items: center;
  @media (min-width: 1280px) {
    order: 1;
  }
}

.card-holder {
  padding: 2em;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 480px) {
    padding: 0;
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    // margin-bottom: 50px;
  }
  width: 100%;
}
</style>