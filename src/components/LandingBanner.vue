<template>
  <div class="landingWrapper">
    <div
      class="getStartedBanner h-full relative flex items-center"
      :style="`background-color: ${color}`"
    >
      <div
        class="content-width-extra w-full flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div class="heroWrapper items-center text-7 xl:max-w-2xl">
          <h2 class="text-black raleway font-bold grid gap-2">
            <span class="text-white">{{ subtitleOne }}</span>

            {{ subtitleTwo }}
          </h2>
        </div>
        <div
          class="descriptionWrapper items-center xl:max-w-xl text-1 text-gray p-4 xl:p-8 rounded-3xl"
        >
          <p class="mb-12 text-1 font-medium">
            {{ description }}
          </p>
          <RainbowButton
            class="text-1"
            :to="'#contact'"
            :displayMessage="buttonMessage"
          />
        </div>
      </div>
    </div>
    <div v-if="title" class="titleWrapper w-full p-12 3xl:p-24 bg-gray-800">
      <h1 class="text-7 raleway font-semibold text-white">
        {{ title }}
      </h1>
    </div>
  </div>
</template>


<script>
import RainbowButton from "./evergreens/RainbowButton.vue";
export default {
  components: { RainbowButton },
  props: [
    "title",
    "subtitleOne",
    "subtitleTwo",
    "description",
    "buttonMessage",
    "color",
  ],
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.landingWrapper {
}

.getStartedBanner {
  height: calc(100vh - 90px);
}

.descriptionWrapper {
  outline: solid 10px #343a40;
  background-color: white;
}

.titleWrapper {
  // border-top: solid 10px #c0c7cf;
  border-bottom: solid 10px #c0c7cf;
}

.text-gray {
  color: #343a40;
}
</style>