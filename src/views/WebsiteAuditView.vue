<template>
  <LandingBanner
    :color="'#ffbd34'"
    :subtitleOne="service.subtitleOne"
    :subtitleTwo="service.subtitleTwo"
    :description="service.pitch"
    :buttonMessage="service.callToAction"
  />
  <div
    class="contactUs bg-gray-500 bgImage"
    :style="`background-image: url(${service.image})`"
  >
    <h1 id="#contact" class="text-black text-6 text-center p-8 3xl:p-16">
      Schedule Your Free Audit Today
    </h1>
    <ContactLayoutHero class="contactLayout content-width h-screen" />
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
  background-position: 0% 0%;
  @media screen and (max-width: 768px) {
    background-position: 25% 0;
  }
}
</style>