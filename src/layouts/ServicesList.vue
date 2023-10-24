<template>
  <h1 class="text-6xl mb-3">{{ $route.name }}</h1>
  <div class="servicesMenu flex flex-col gap-4">
    <ServiceCard
      class="bg-white rounded-3xl"
      v-for="(service, i) in services"
      :key="service.name"
      :service="service"
      :direction="i % 2 == 0 ? 'left' : 'right'"
    />
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
      services: computed(() => template.routes.services),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>