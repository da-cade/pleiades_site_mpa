<template>
  <div class="bannerWrapper coverBg p-8" :aria-label="about.imageAlt">
    <img :src="about.coverImg" class="clipStars" alt="" />
    <!-- <div class="contentContainer flex h-full w-full rounded-3xl"> -->
    <!-- <div class="w-50 h-full"></div>
      <div class="w-50 h-full"> -->
    <!-- <div class="clipStars"></div> -->
    <!-- <div
          class="clipStars"
          :style="`background-image: url(${about.coverImg}); background-position: ${about.coverImgPosition}`"
        >
          <img class="" src="../assets/img/stars/14.svg" alt="" /> -->

    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
  <div class="content-width mt-8">
    <h1 class="text-5 text-white mb-4">What We're About</h1>
    <ValuesColumn />
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
  </svg>
</template>


<script>
import { computed } from "vue";
import ValuesColumn from "../layouts/ValuesColumn.vue";
import * as template from "../templates/main.json";
export default {
  components: {
    ValuesColumn,
  },
  setup() {
    return {
      about: computed(() => {
        console.log(template.about.find((p) => p.name == "What's Our Deal?"));
        return template.about.find((p) => p.name == "What's Our Deal?");
      }),
    };
  },
};
</script>


<style lang="scss" scoped>
.bannerWrapper {
  // background: #ffffffd9;
  // display: flex;
  // justify-content: center;
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(red, yellow);
  // clip-path: url(#pleiadesStars);
}

.coverBg {
  // background: white;
  // background-size: cover;
  // background-position: 50% 10%;
}

.clipStars {
  clip-path: url(#pleiadesStars);
  height: 100%;
}
</style>