<template>
  <LandingBanner
    :color="'#ffbd34'"
    :subtitleOne="service.subtitleOne"
    :subtitleTwo="service.subtitleTwo"
    :description="service.pitch"
    :buttonMessage="service.callToAction"
  />
  <div
    class="contactUs relative bg-gray-500 bgImage"
    :style="`background-image: url(${service.image})`"
  >
    <div
      class="titleWrapper w-full flex justify-center absolute p-8 3xl:p-16 top-10"
    >
      <h1 id="#contact" class="text-black text-6 text-center">
        Get That Stuff Off Your To-Do List
      </h1>
    </div>
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
      console.log(route.params.instance);
      return template.services.find((s) => s.name == route.name);
    });
    console.log(service.value);
    return { service };
  },
};
</script>


<style lang="scss" scoped>
.bgImage {
  background-position: 0 0%;
}
</style>