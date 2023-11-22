<template>
  <Swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :keyboard="{ enabled: true }"
    :modules="modules"
    :mousewheel="{ sensitivity: 0.5, thresholdDelta: 14, forceToAxis: true }"
    navigation
    class="mySwiper"
    :class="toggleScrollable"
    ref="swiper"
  >
    <swiper-slide
      class="bgImage w-full h-full aboutSlide"
      :style="`background-image: url(${about.coverImg}); background-position: ${about.imagePosition}`"
    >
      <Swiper
        class="mySwiper2 swiper-v"
        :direction="'horizontal'"
        :mousewheel="{
          sensitivity: 0.5,
          thresholdDelta: 14,
          forceToAxis: true,
        }"
        navigation
        :modules="modules"
      >
        <swiper-slide
          class="w-full h-full aboutSlide"
          :style="`background-image: url(${about.coverImg}); background-position: ${about.imagePosition}`"
        >
          <div class="aboutTitle">
            <h1 class="text-12 raleway font-extrabold">Some Stories</h1>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex items-start bg-white w-full h-full"
          v-for="story in stories"
          :key="story"
          ><StoryItem class="" :instance="story" />
        </swiper-slide>
      </Swiper>

      <!-- <div class="detailsInfo bg-white p-4 rounded-3xl">
        <p class="text-1">
          {{ about.body }}
        </p>
      </div> -->
    </swiper-slide>

    <swiper-slide>
      <Swiper
        class="mySwiper2 swiper-v"
        :direction="'horizontal'"
        :mousewheel="{
          sensitivity: 0.5,
          thresholdDelta: 14,
          forceToAxis: true,
        }"
        navigation
        :modules="modules"
      >
        <swiper-slide
          class="bgImage w-full h-full aboutSlide"
          :style="`background-image: url(${about.coverImg2}); background-position: ${about.imagePosition2}`"
        >
          <div class="aboutTitle">
            <h1 class="text-12 raleway font-extrabold">How We Do Things</h1>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex items-start bg-white w-full h-full"
          v-for="value in values"
          :key="value"
          ><ValueCard class="mt-24" :instance="value" />
        </swiper-slide>
      </Swiper>
    </swiper-slide>

    <swiper-slide class="">
      <Swiper
        class="mySwiper2 swiper-v"
        :direction="'horizontal'"
        :slidesPerView="1"
        :mousewheel="{
          sensitivity: 0.5,
          thresholdDelta: 14,
          forceToAxis: true,
        }"
        navigation
        :modules="modules"
      >
        <swiper-slide
          class="bgImage bg-contain w-full h-full aboutSlide"
          :style="`background-image: url(${about.coverImg3}); background-position: ${about.imagePosition3}`"
        >
          <div class="aboutTitle">
            <h1 class="text-12 raleway font-extrabold">FAQ</h1>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex items-start bg-white lg:p-16 w-full h-full"
          v-for="qset in faqs"
          :key="qset"
        >
          <div class="faqPair mt-4">
            <FaqItem class="" :instance="qset[0]" />
            <FaqItem class="" :instance="qset[1]" />
          </div>
          <!-- <FaqItem class="mt-24" :instance="qset" /> -->
        </swiper-slide>
      </Swiper>
    </swiper-slide>
  </Swiper>

  <!-- <div class="aboutWrapper grid gap-40">
    <div class="bannerWrapper coverBg" :aria-label="about.imageAlt">
      <img :src="about.coverImg" class="clipStars" alt="" />
      <div class="contentContainer flex h-full w-full rounded-3xl">
        <div class="w-full h-full">
          <div class="clipStars"></div>
          <div
            class="clipStars bgImage"
            :style="`background-image: url(${about.coverImg}); background-position: ${about.coverImgPosition}`"
          >
            <img class="" src="../assets/img/stars/14.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <svg
    version="1.1"
    id="7-stars-svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <g>
      <clipPath id="pleiadesStars" clipPathUnits="objectBoundingBox">
        <path
          d="M391.72,1079.15c500.37-68.05,555.53-123.23,623.58-623.57c68.07,500.34,123.22,555.52,623.59,623.57
		c-500.37,68.05-555.52,123.23-623.59,623.58C947.25,1202.37,892.09,1147.2,391.72,1079.15z"
        />
        <path
          d="M1304.17,527.66c189.65-25.79,210.56-46.7,236.36-236.35c25.8,189.65,46.7,210.56,236.36,236.35
		c-189.66,25.79-210.56,46.7-236.36,236.35C1514.73,574.37,1493.82,553.46,1304.17,527.66z"
        />
        <path
          d="M142,1571.65c189.66-25.79,210.56-46.7,236.36-236.35c25.8,189.64,46.7,210.55,236.36,236.35
		c-189.66,25.79-210.56,46.71-236.36,236.35C352.56,1618.36,331.66,1597.44,142,1571.65z"
        />
        <path
          d="M1310.57,1501.69c85.25-11.59,94.64-21,106.24-106.23c11.59,85.23,20.99,94.63,106.23,106.23
		c-85.24,11.59-94.63,20.99-106.23,106.23C1405.21,1522.68,1395.81,1513.28,1310.57,1501.69z"
        />
        <path
          d="M1096.31,425.64c85.25-11.59,94.64-21,106.24-106.23c11.59,85.23,20.99,94.63,106.23,106.23
		c-85.24,11.59-94.63,20.99-106.23,106.23C1190.95,446.63,1181.56,437.23,1096.31,425.64z"
        />
        <path
          d="M524.96,1406.46c85.25-11.59,94.64-21,106.24-106.23c11.59,85.23,20.99,94.63,106.23,106.23
		c-85.24,11.59-94.63,20.99-106.23,106.23C619.6,1427.45,610.2,1418.05,524.96,1406.46z"
        />
        <path
          d="M522.65,760.91c85.25-11.6,94.65-21,106.24-106.24c11.59,85.24,20.99,94.64,106.23,106.24
		c-85.24,11.59-94.64,20.99-106.23,106.22C617.29,781.9,607.89,772.5,522.65,760.91z"
        />
      </clipPath>
    </g>
  </svg> -->
</template>


<script>
import { computed, onMounted, ref } from "vue";
import ValuesColumn from "../layouts/ValuesColumn.vue";
import * as template from "../templates/main.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/scss";
import "../styles.css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/mousewheel";
import "swiper/scss/keyboard";
import ValueCard from "../components/ValueItem.vue";
import FaqItem from "../components/FaqItem.vue";
import StoryItem from "../components/StoryItem.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    ValuesColumn,
    ValueCard,
    FaqItem,
    StoryItem,
  },
  setup() {
    const toggleScrollable = ref("");
    const swiper = ref();
    function touchingTop() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          toggleScrollable.value = "swiper-no-mousewheel";
        } else {
          toggleScrollable.value = "";
        }
      });
    }
    onMounted(() => {
      touchingTop();
    });

    const faqs = computed(() => {
      let qs = template.details.questions;
      let newArr = [];
      for (let index = 0; index < qs.length; index += 2) {
        newArr.push([qs[index], qs[index + 1]]);
      }
      console.log(newArr);
      return newArr;
    });

    return {
      about: computed(() => {
        return template.about.find((p) => p.name == "What's Our Deal?");
      }),
      faqs,
      stories: computed(() => template.details.stories),
      values: computed(() => template.details.values),
      modules: [Keyboard, Mousewheel, Pagination, Navigation],
      toggleScrollable,
      swiper,
    };
  },
};
</script>


<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  overscroll-behavior: contain;
}

.mySwiper {
  overscroll-behavior: contain;
  height: calc(100vh - 100px);
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
}

.aboutSlide {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.aboutTitle {
  width: fit-content;
  padding: 4rem;
  background: white;
  mix-blend-mode: screen;
  h1 {
    color: black;
  }
}

// .bannerWrapper {
//   // background: #ffffffd9;
//   // display: flex;
//   // justify-content: center;
//   width: 100%;
//   height: calc(100vh - 100px);
//   // background-image: linear-gradient(red, yellow);
//   // clip-path: url(#pleiadesStars);
// }

// .coverBg {
//   // background: white;
//   // background-size: cover;
//   // background-position: 50% 10%;
// }

// .clipStars {
//   // clip-path: url(#pleiadesStars);
//   height: 100%;
// }
</style>