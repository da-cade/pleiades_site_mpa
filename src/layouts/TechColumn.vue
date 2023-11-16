<template>
  <div class="flex h-full flex-col rounded-3xl bg-white">
    <h1 class="mb-4 text-5 mt-10 text-center">
      <b class="text-dark">We </b>
      <b class="dark-side">Use</b>
    </h1>

    <div class="tech-column flex flex-col justify-between content-start">
      <Vue3Marquee
        id="service-marquee"
        class="border-b-4"
        :clone="true"
        :duration="7"
        :vertical="!mobile"
      >
        <div class="marqueeSlogan flex md:grid gap-8 font-black">
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
      <div
        class="check-us-out w-100 bg-white text-dark p-5 right-side rounded-b-3xl"
      >
        <h2 class="text-1">Check out our profiles on:</h2>
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
import { Appstate } from "../AppState";
const technologies = computed(() => template.details.technologies);
const profiles = computed(() => template.details.profiles);
const mobile = computed(() => Appstate.value.mobile);
</script>


<style lang="scss" scoped>
.tech-column {
  display: flex;
  // max-height: 100vh;
  padding: 2rem;
  @media (min-width: 1536px) {
    max-height: 80vh;
  }
  @media (max-width: 1024px) {
    max-height: 90vh;
  }
}

.marqueeSlogan {
}
</style>