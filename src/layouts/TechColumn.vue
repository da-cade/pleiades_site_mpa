<template>
  <div class="flex flex-grow flex-col">
    <div class="text-dark flex mb-4">
      <b class="text-dark">We</b>
      <b class="dark-side">Use</b>
    </div>
    <div class="tech-column flex h-full flex-col justify-between content-start">
      <Technology
        v-for="t in technologies"
        :key="t.name"
        :name="t.name"
        :pathToImage="t.image"
        :imageAlt="t.alt"
      />
    </div>
  </div>
</template>


<script setup>
import * as template from "../templates/main.json";
import { computed } from "vue";
import Technology from "../components/Technology.vue";
const technologies = computed(() => template.details.technologies);
</script>


<style lang="scss" scoped>
.tech-column {
  display: flex;
  padding: 2rem;
  @media (max-width: 1020px) {
    order: 2;
  }
}
</style>