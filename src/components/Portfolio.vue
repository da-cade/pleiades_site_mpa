<template>
  <div id="works" class="">
    <div class="py-12 bg-white rounded-3xl">
      <div
        class="justify-center items-center flex flex-col left-side p-4 md:p-8 gap-4"
      >
        <h1 class="text-center text-6">
          <b>Our </b>
          <b class="dark-side">Work</b>
        </h1>
        <h2 class="text-center text-2">Check out our portfolio</h2>
      </div>
      <div class="justify-center bg-black items-center flex w-md-100 g-0">
        <swiper
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="portfolioPiece in portfolio"
            :key="portfolioPiece.name"
            class="h-64"
          >
            <PortfolioPiece :portfolioPiece="portfolioPiece" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
// import required modules
import { Pagination } from "swiper/modules";
import * as template from "../templates/main.json";
import PortfolioPiece from "./PortfolioPiece.vue";
import { computed } from "vue";
import RainbowButton from "./evergreens/RainbowButton.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PortfolioPiece,
    RainbowButton,
  },
  setup() {
    return {
      modules: [Pagination],
      portfolio: computed(() => template.details.portfolio),
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 1em;
  text-decoration: none;
  color: white;
  font-weight: 500;
}

.contact-link {
  color: white;

  border: 1px white solid;
  padding: 1em;
  margin: 1em;
  border-radius: 25px;
}

.before-enter {
  opacity: 0;
  transform: translateY(30%);
  transition: all 0.5s ease;
}

.enter {
  opacity: 1;
  transition-delay: 0.1s;
  transform: translateY(0);
}

.container {
  margin-top: 15vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 25px;
  color: black;

  width: 95%;

  @media (max-width: 480px) {
    background: none;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
}

.swiper-slide {
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
  height: 50vh;
  justify-content: center;
}

ul {
  padding-top: 1em;
  color: white;
  font-size: 0.8em;
}

.left-side {
  background-color: white;
  border-radius: 25px 25px 0px 0px;
  color: black;
  width: 100%;

  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
  }
}

.right-side {
  background-color: black;
  border-radius: 0px 0px 25px 25px;

  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    border-radius: 0px 0px 25px 25px;
  }
}

.check-us-out {
  min-height: 15vh;
  span {
    color: black;
  }
}

.img-brand {
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 1em;
  }
}

.img-brand img {
  width: 75%;
}

.deb {
  width: 40%;
  background-color: #5e0149;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding-bottom: 3em;
  padding-top: 3em;
  @media (max-width: 480px) {
    margin-top: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
    width: 70%;
  }
}
</style>