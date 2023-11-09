<template>
  <div class="content-width">
    <h1 class="text-6 raleway font-extrabold my-12 text-white">
      {{ $route.name }}
    </h1>
    <div class="servicesMenu flex flex-col gap-4 bg-off-white p-4 rounded-3xl">
      <div class="rounded-3xl p-24 flex w-full bg-white bubble-edge">
        <p class="text-2 alata">
          We offer a lot of services at Pleiades, because there's a lot that
          people need. We go above and beyond in everything that we do; that
          means meaningful results for you in anything that can be measured.
          We'll work with your budget to craft a menu of solutions that's right
          for both you and your goals, and talk to you every step of the way so
          that you know what's happening under the hood. If you're just getting
          started on the web, *schedule a call* with us to talk about where you
          want to go.
        </p>
      </div>
      <ServiceCard
        class=""
        v-for="(service, i) in services"
        :key="service.name"
        :service="service"
        :direction="i % 2 == 0 ? 'left' : 'right'"
      />
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import * as template from "../templates/main.json";
export default {
  components: {
    ServiceCard,
  },
  setup() {
    return {
      services: computed(() => template.services),
    };
  },
};
</script>


<style lang="scss" scoped>
.card-holder {
  padding: 2em;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 480px) {
    padding: 0;
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
  width: 100%;
}
</style>