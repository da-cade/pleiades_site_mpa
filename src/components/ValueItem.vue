<template>
  <div
    class="instanceWrapper flex justify-center gap-4 lg:p-16 items-center flex-col"
  >
    <h2 class="instanceTitle text-5 gap-2">
      <b
        v-for="word in formattedTitle"
        :key="word"
        :class="word == instance.boldWord ? 'dark-side' : 'text-dark'"
        >{{ word }}</b
      >
    </h2>
    <div class="instanceItem justify-center items-start lg:p-8 bg-white">
      <p class="text-1">
        {{ instance.body }}
      </p>
    </div>
    <a class="text-1 w-full p-4 pt-0" :href="instance.ctaDestination">
      <div
        class="goTo flex justify-start items-center gap-2 md:hidden w-full pt-0 underline underline-offset-4"
      >
        <LeftHandArrowIcon class="h-8 w-8" />
        <span class="text-2 text-black">Find Out More</span>
      </div>
    </a>
  </div>
</template>


<script>
import { computed } from "vue";
import LeftHandArrowIcon from "./evergreens/icons/LeftHandArrowIcon.vue";
export default {
  components: { LeftHandArrowIcon },
  props: { instance: { type: Object, required: true } },
  setup(props) {
    return {
      formattedTitle: computed(() => props.instance.title.split(" ")),
    };
  },
};
</script>


<style lang="scss" scoped>
.instanceTitle {
  // gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    gap: 1rem;
    // margin-bottom: 1rem;
    justify-content: flex-start;
  }
}

.instanceItem {
  margin-bottom: 2rem;
  padding: 1rem;
  outline: solid 4px #343a40;
  border-radius: 24px;
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.goTo {
  color: #ffb725;
}
</style>