<template>
  <LandingBanner
    :color="'#ffbd34'"
    :subtitleOne="service.subtitleOne"
    :subtitleTwo="service.subtitleTwo"
    :description="service.pitch"
    :buttonMessage="service.callToAction"
  />
  <div class="contactWrapper">
    <div class="titleWrapper p-8 lg:p-16 bg-white">
      <h1 id="#contact" class="text-black text-center text-6">
        Schedule Your Free Audit Today
      </h1>
    </div>
    <div
      class="contactUs bg-white bgImage w-screen"
      :style="`background-image: url(${service.image})`"
    >
      <ContactLayoutHero class="contactLayout content-width" />
    </div>
    <!-- <MobileStepsLayout v-else /> -->
  </div>
</template>


<script>
import { computed } from "vue";
import LandingBanner from "../components/LandingBanner.vue";
import * as template from "../templates/main.json";
import { useRoute } from "vue-router";
import ContactLayoutHero from "../layouts/ContactLayoutHero.vue";
export default {
  components: { LandingBanner, ContactLayoutHero },
  setup() {
    const route = useRoute();
    const service = computed(() => {
      return template.services.find((s) => s.name == route.name);
    });
    console.log(service.value);
    return { service };
  },
};
</script>


<style lang="scss" scoped>
.bgImage {
  background-position: 50% 0%;
  background-size: contain;
  @media screen and (max-width: 768px) {
    background-position: 25% 0;
  }
}
</style>