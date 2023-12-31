<template>
  <div class="pageWrapper w-full relative grid gap-40">
    <LandingBanner
      :title="service.name"
      :subtitleOne="service.subtitleOne"
      :subtitleTwo="service.subtitleTwo"
      :description="service.pitch"
      :buttonMessage="service.callToAction"
      :color="'#ffbd34'"
    />

    <div id="whatYouGet" class="content-width">
      <div class="rounded-3xl contentColumn p-5">
        <h2 class="text-5">What You Get</h2>
        <PunchOutCard
          v-for="offer in service.offers"
          :instance="offer"
          :key="offer"
        />
      </div>
    </div>
    <StepsLayoutAlternate :steps="service.steps" />

    <div class="contactWrapper">
      <Vue3Marquee
        id="service-marquee"
        class="border-t-4 border-t-white bg-gray-800"
        :clone="true"
        :duration="7"
      >
        <div class="marqueeSlogan gap-8 lg:gap-16 font-black">
          <span
            class="marqueeText raleway font-bold text-5"
            v-for="i in textArray"
            :key="i"
            >{{ i }}</span
          >
          <img
            class="h-12 w-12 invert"
            src="https://imagedelivery.net/Id169OYcKaUZq2ukOAQIsw/75cdb46b-3081-4e67-5278-b76b284cb400/large"
            alt=""
          />
        </div>
      </Vue3Marquee>
      <div class="titleWrapper p-8 lg:p-16 bg-white">
        <h2 id="#contact" class="text-black text-center text-6">
          Give Us a Shout
        </h2>
      </div>
      <div
        class="contactUs bg-white bgImage"
        :style="`background-image: url(${service.image})`"
      >
        <ContactLayoutHero class="contactLayout content-width" />
      </div>
      <!-- <MobileStepsLayout v-else /> -->
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import * as template from "../templates/main.json";
import PunchOutCard from "../components/PunchOutCard.vue";
import { Vue3Marquee } from "vue3-marquee";
import StepsLayoutAlternate from "../layouts/StepsLayoutAlternate.vue";
// import MobileStepsLayoutAlternate from "../layouts/MobileStepsLayoutAlternate.vue";
import { Appstate } from "../AppState";
import RainbowButton from "../components/evergreens/RainbowButton.vue";
import ContactLayoutHero from "../layouts/ContactLayoutHero.vue";
import LandingBanner from "../components/LandingBanner.vue";
import { useMeta } from "vue-meta";
export default {
  components: {
    PunchOutCard,
    Vue3Marquee,
    StepsLayoutAlternate,
    // MobileStepsLayout,
    RainbowButton,
    ContactLayoutHero,
    LandingBanner,
  },
  setup() {
    useMeta({
      title: "Explore Our Services, Like SEO, App & Web Design, and More",
      htmlAttrs: { lang: "en" },
    });
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

    return {
      service,
      bgImage,
      textArray,
      mobile: computed(() => Appstate.value.mobile),
    };
  },
};
</script>


<style lang="scss" scoped>
.bannerWrapper {
  background: #ffffffd9;
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
  img {
    mix-blend-mode: multiply;
  }
}

.bgImage {
  background-size: contain;
  background-position: 50% 0%;
  @media screen and (max-width: 768px) {
    background-position: 25% 0;
  }
}

#service-marquee {
  mix-blend-mode: luminosity;
  // background: black;
}

.marqueeSlogan {
  display: flex;
  align-items: center;
  // color: #ffbd34;
  color: white;
  padding: 2rem 1rem;
  @media screen and (min-width: 1024px) {
    padding: 4rem 2rem;
  }
}

.contentColumn {
  mix-blend-mode: screen;
  background: white;
}

.getStartedBanner {
  height: calc(80vh - 90px);
  background-color: #ffbd34;
  border-bottom: solid 10px #c0c7cf;
}

.descriptionWrapper {
  outline: solid 10px #343a40;
  background-color: white;
}

.text-gray {
  color: #343a40;
}
</style>