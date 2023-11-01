<template>
  <div class="pageWrapper relative grid">
    <div class="bg-white w-full text-black relative bannerWrapper">
      <img :src="service.image" class="img-col" alt="" />
      <div class="absolute inset-0 p-5 h-full w-full">
        <h1 class="text-7xl modak">{{ service.name }}</h1>
      </div>
    </div>
    <Vue3Marquee
      id="service-marquee"
      class="border-b-4 border-b-white bg-gray-500"
      :clone="true"
      :duration="7"
    >
      <div class="marqueeSlogan gap-4 font-black">
        <span class="marqueeText raleway" v-for="i in textArray" :key="i">{{
          i
        }}</span>
        <img class="h-12 w-12" src="../assets/img/single-star.png" alt="" />
      </div>
    </Vue3Marquee>
    <div class="content-width my-64">
      <div class="rounded-3xl contentColumn p-5">
        <h2 class="text-5xl">What You Get</h2>
        <PunchOutCard
          v-for="block in service.blocks"
          :instance="block"
          :key="block"
        />
      </div>
    </div>
    <StepsLayout />
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
      return template.pages.services.find(
        (s) => s.routeName == route.params.instance
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
  display: flex;
  justify-content: center;
  height: 70vh;
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
  font-size: 2.5rem;
  color: black;
}

.contentColumn {
  mix-blend-mode: screen;
  background: white;
}
</style>