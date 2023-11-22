<template>
  <div class="instanceWrapper flex justify-center items-start flex-col p-4">
    <h2 class="instanceTitle text-3 gap-2">
      {{ instance.question }}
    </h2>
    <div class="instanceItem justify-center items-start">
      <p class="text-1">
        {{ instance.answer }}
      </p>
      <br />
      <a
        v-if="instance.link.linkText != ''"
        class="text-1"
        :href="instance.ctaDestination"
        >{{ instance.callToAction }}</a
      >
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
export default {
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
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>