<template>
  <div class="pageWrapper relative grid">
    <div class="w-full text-black relative bannerWrapper">
      <img :src="service.image" class="img-col" alt="" />
      <div class="absolute inset-0 p-5 h-full w-full">
        <h1 class="text-9 alata font-extrabold">{{ service.name }}</h1>
      </div>
    </div>
    <Vue3Marquee
      id="service-marquee"
      class="border-b-4 border-b-white bg-gray-500"
      :clone="true"
      :duration="7"
    >
      <div class="marqueeSlogan gap-4 font-black">
        <span
          class="marqueeText raleway text-4"
          v-for="i in textArray"
          :key="i"
          >{{ i }}</span
        >
        <img class="h-12 w-12" src="../assets/img/single-star.png" alt="" />
      </div>
    </Vue3Marquee>
    <div class="content-width my-64">
      <div class="rounded-3xl contentColumn p-5">
        <h2 class="text-5">What You Get</h2>
        <PunchOutCard
          v-for="offer in service.offers"
          :instance="offer"
          :key="offer"
        />
      </div>
    </div>
    <StepsLayout :steps="service.steps" />
    <div class="getStartedBanner w-full h-screen bg-gray-600"></div>
  </div>
</template>


<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import * as template from "../templates/main.json";
import PunchOutCard from "../components/PunchOutCard.vue";
import { Vue3Marquee } from "vue3-marquee";
import StepsLayout from "../layouts/StepsLayout.vue";
export default {
  components: { PunchOutCard, Vue3Marquee, StepsLayout },
  setup() {
    const route = useRoute();

    const service = computed(() => {
      return template.services.find(
        (s) => s.routeParams == route.params.instance
      );
    });

    const bgImage = computed(
      () => `background-image: url(${service.value.image})`
    );

    const textArray = computed(() => ["Level Up Your Brand"]);

    return { service, bgImage, textArray };
  },
};
</script>


<style lang="scss" scoped>
.bannerWrapper {
  background: #ffffffd9;
  display: flex;
  justify-content: center;
  height: calc(80vh - 100px);
  img {
    mix-blend-mode: multiply;
  }
}

// .pageWrapper:nth-last-child(1) {
//   margin-bottom: 30px;
// }

#service-marquee {
  mix-blend-mode: screen;
  // background: black;
}

.marqueeSlogan {
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  color: black;
}

.contentColumn {
  mix-blend-mode: screen;
  background: white;
}
</style>