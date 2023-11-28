<template>
  <div class="columnWrapper flex flex-col p-8 rounded-3xl bg-white">
    <h2 class="mb-4 text-5 mt-2 text-center">
      <b class="text-dark">We </b>
      <b class="dark-side">Use</b>
    </h2>

    <div
      :style="`max-height: calc(${maxHeight - rectHeight}px - 2rem)`"
      class="tech-column flex flex-col p-8 justify-between content-start"
    >
      <Vue3Marquee
        id="service-marquee"
        class="border-b-4"
        :clone="true"
        :duration="7"
        :vertical="!mobile"
      >
        <div class="marqueeSlogan max-w-lg flex lg:grid gap-8 font-black">
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
    <div ref="profileContainer" class="profiles">
      <div
        class="check-us-out w-100 bg-white text-dark p-8 right-side rounded-b-3xl"
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


<script>
import * as template from "../templates/main.json";
import Profile from "../components/evergreens/Profile.vue";
import { computed, onMounted, ref } from "vue";
import Technology from "../components/Technology.vue";
import { Vue3Marquee } from "vue3-marquee";
import { Appstate } from "../AppState";
export default {
  components: {
    Technology,
    Profile,
    Vue3Marquee,
  },
  props: {
    maxHeight: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const profileContainer = ref();
    const rectHeight = ref();
    onMounted(() => {
      const el = profileContainer.value;
      const rect = el.getBoundingClientRect();
      rectHeight.value = rect.bottom - rect.top;
    });
    return {
      profileContainer,
      rectHeight,
      technologies: computed(() => template.details.technologies),
      profiles: computed(() => template.details.profiles),
      mobile: computed(() => Appstate.value.mobile),
    };
  },
};
</script>


<style lang="scss" scoped>
.columnWrapper {
  flex-shrink: 1;
  max-height: 70%;
  // height: 50%;
}

.tech-column {
  display: flex;
}
</style>