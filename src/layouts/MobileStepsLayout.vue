<template>
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
    </swiper-slide>
  </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>