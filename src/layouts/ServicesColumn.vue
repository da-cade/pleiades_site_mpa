<template>
  <div class="about-wrapper bg-off-white rounded-3xl p-8">
    <div id="services" class="text-6xl sm:mb-4 xl:mb-8" v-scrollanimation>
      <span class="text-black alata">We Can Do That</span>
    </div>
    <div class="about-section">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ServiceCard
          v-for="(service, i) in services"
          :key="service.name"
          :direction="i % 2 == 0 ? 'left' : 'right'"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import * as template from "../templates/main.json";
const services = computed(() => template.services.slice(0, 4));
</script>

<style lang="scss" scoped>
@keyframes slideIn {
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.body-text {
  padding-top: 2.5vh;
}

.about-section {
  border-radius: 25px;
}

.before-enter {
  opacity: 0;
  transform: translateY(30%);
  transition: all 0.5s ease;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>