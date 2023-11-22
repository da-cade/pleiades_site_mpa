<template>
  <Swiper
    :direction="mobile ? 'horizontal' : 'vertical'"
    :slidesPerView="1"
    :keyboard="{ enabled: true }"
    :modules="modules"
    navigation
    class="stepSwiper"
  >
    <swiper-slide
      v-for="(step, i) in steps"
      :key="step"
      class="flex flex-col lg:flex-row w-full h-screen"
    >
      <div class="detailsCol">
        <StepCard :step="step" class="cardAttrs" />
      </div>
      <div class="stepsCol">
        <PunchOut
          :title="i + 1"
          :titleClass="'font-black raleway text-10'"
          class="stepAttrs stepTitle"
        />
      </div>
      <!-- </div> -->
    </swiper-slide>
  </Swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/scss";
import "../styles.css";
import "swiper/scss/navigation";
import "swiper/scss/keyboard";
// import required modules
import StepCard from "../components/evergreens/packages/Steps/StepCard.vue";
import PunchOut from "../components/evergreens/PunchOut.vue";
import { computed } from "vue";
import { Appstate } from "../AppState";
export default {
  components: { StepCard, PunchOut, Swiper, SwiperSlide },
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      mobile: computed(() => Appstate.value.mobile),
      modules: [Keyboard, Navigation],
    };
  },
};
</script>


<style lang="scss" scoped>
@use "sass:list";

.swiper-button-prev {
  top: 10px;
}

.swiper-button-next {
  top: auto;
  bottom: 10px;
}

.swiper {
  width: 100%;
  height: 100%;
  overscroll-behavior: contain;
}

.stepSwiper {
  overscroll-behavior: contain;
  height: calc(100vh - 90px);
  width: 100%;
  mix-blend-mode: screen;
  @media screen and (max-width: 768px) {
    height: calc(120vh - 90px);
    width: 100vw;
    mix-blend-mode: normal;
  }
}

.swiper-slide {
  display: flex !important;
  height: 100%;
  width: 100%;
  align-items: center;
}

.contentColumn {
  display: flex;
  max-width: 100vw;
}

$breakpoints: (
  "min-width: 2000px",
  "max-width: 1999px",
  "max-width: 1536px",
  "max-width: 1280px",
  "max-width: 1024px",
  "max-width: 768px",
  "max-width: 640px"
);

.headerWrapper {
  // top: calc($topStart);
  // position: sticky;
  isolation: isolate;
  // height: $titleHeight;
  width: 100%;
}
.headerContainer {
  // max-width: 95%;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  transition: ease-in-out width 0.2s;
  h2 {
    white-space: nowrap;
  }
}

.detailsCol {
  display: flex;
  isolation: isolate;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 2rem 1rem;
  background: #ffffff;
  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
    width: 100%;
  }
}

.stepsCol {
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.cardAttrs {
  height: 70vh;
  width: 100%;
  outline: solid 10px black;
  padding: calc(1rem - 1rem);
  @media screen and (max-width: 768px) {
    background-size: cover;
    height: calc(100vh - 90px);
    padding: 1rem;
    gap: 1rem;
  }
}

.stepAttrs {
  // max-width: $circleDi;
  // min-width: $circleDi;
  // min-height: $circleDi;
  // max-height: $circleDi;
}
</style>