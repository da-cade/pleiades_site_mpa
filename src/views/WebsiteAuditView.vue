<template>
  <LandingBanner
    :color="'#ffbd34'"
    :subtitleOne="service.subtitleOne"
    :subtitleTwo="service.subtitleTwo"
    :description="service.pitch"
    :buttonMessage="service.callToAction"
  />
  <ContactWrapper
    :anchorId="'#contact'"
    :backgroundImage="service.image"
    :description="'Schedule Your Free Audit Today'"
  />
</template>


<script>
import { computed } from "vue";
import LandingBanner from "../components/LandingBanner.vue";
import * as template from "../templates/main.json";
import { useRoute } from "vue-router";
import ContactLayoutHero from "../layouts/ContactLayoutHero.vue";
import { useMeta } from "vue-meta";
import ContactWrapper from "../layouts/ContactWrapper.vue";
export default {
  components: { LandingBanner, ContactLayoutHero, ContactWrapper },
  setup() {
    useMeta({
      title: "Get the Insights You Need With a Free Website Audit",
      htmlAttrs: { lang: "en" },
    });
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