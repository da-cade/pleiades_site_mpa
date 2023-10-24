<template>
  <div id="works" class="" v-scrollanimation>
    <div class="">
      <div
        class="col-12 justify-center items-center flex flex-column left-side"
      >
        <h1 class="text-center">Our Work</h1>
        <p class="text-center">Check out our past work.</p>
      </div>
      <div
        class="col-12 justify-center bg-black items-center flex w-md-100 g-0"
      >
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
          <swiper-slide>
            <div class="flex flex-col justify-center items-center h-64">
              <b>Want to show up here? </b
              ><a class="contact-link" href="#contact"> Contact Us</a>
              <b>to get started!</b>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="check-us-out w-100 bg-white text-dark p-5 right-side">
        <h2>Check out our profiles on:</h2>
        <div class="flex">
          <Profile
            v-for="(profile, i) in profiles"
            :key="i"
            :profile="profile"
          />
        </div>
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
import Profile from "../components/evergreens/Profile.vue";
import { computed } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PortfolioPiece,
    Profile,
  },
  setup() {
    return {
      modules: [Pagination],
      portfolio: computed(() => template.details.portfolio),
      profiles: computed(() => template.details.profiles),
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

h1 {
  font-size: 5em;
  font-weight: 900;
}

h2 {
  font-size: 3em;
  font-weight: 900;
}

p {
  font-size: 1.2em;
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
  padding: 5em;

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

.link-tag {
  background: rgba(255, 255, 255, 0.23);
  transition: all 0.5s;
  border-radius: 25px;
}

.link-tag:hover {
  background: white;
  color: white;
}

.link-tag:hover a {
  color: black;
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