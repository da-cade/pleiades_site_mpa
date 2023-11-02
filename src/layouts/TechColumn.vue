<template>
  <div class="flex h-full flex-col rounded-3xl bg-white">
    <div class="text-dark flex justify-center my-4">
      <b class="text-dark">We</b>
      <b class="dark-side">Use</b>
    </div>
    <div class="tech-column flex h-full flex-col justify-between content-start">
      <Vue3Marquee
        id="service-marquee"
        class="border-b-4"
        :clone="true"
        :duration="7"
        :vertical="true"
      >
        <div class="marqueeSlogan gap-8 font-black">
          <Technology
            v-for="t in technologies"
            :key="t.name"
            :name="t.name"
            :pathToImage="t.image"
            :imageAlt="t.alt"
          />
        </div>
      </Vue3Marquee>
    </div>
    <div class="profiles">
      <div class="check-us-out w-100 bg-white text-dark p-5 right-side">
        <h2>Check out our profiles on:</h2>
        <div class="flex">
          <Profile
            v-for="(profile, i) in profiles"
            :key="i"
            :profile="profile"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import * as template from "../templates/main.json";
import Profile from "../components/evergreens/Profile.vue";
import { computed } from "vue";
import Technology from "../components/Technology.vue";
import { Vue3Marquee } from "vue3-marquee";
const technologies = computed(() => template.details.technologies);
const profiles = computed(() => template.details.profiles);
</script>


<style lang="scss" scoped>
.tech-column {
  display: flex;
  max-height: 100vh;
  padding: 2rem;
  @media (max-width: 768px) {
    max-height: 200vh;
  }
  @media (max-width: 1020px) {
    order: 2;
  }
}

.marqueeSlogan {
  display: grid;
}
</style>