<template>
  <div class="banner-headline-wrapper py-16 justify-center items-start">
    <span class="modak text-12 whitespace-nowrap">Big Solutions</span>
    <span class="alata text-8">For Small Business</span>
    <div class="banner-text">
      <p
        class="text-1 my-3 bg-opacity-40 bg-blue-950 p-3 rounded-3xl border-2 border-white"
      >
        With our combination of know-how and next-level creativity, our expert
        team of designers and digi-gurus can guide you through the noise. We are
        here to bring strategy, energy, and brand-new information to your
        business online, using SEO, good advertising, and really great design.
      </p>
    </div>
    <div class="buttonRow flex gap-4">
      <RainbowButton class="mt-3" :displayMessage="'Find out more!'" />
      <RainbowButton class="mt-3" :displayMessage="'Send a Message'" />
    </div>
  </div>
</template>


<script>
import RainbowButton from "./evergreens/RainbowButton.vue";
export default {
  components: { RainbowButton },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.banner-headline-wrapper {
  position: relative;
  z-index: 10;
  height: 80vh;
  color: white;
  display: flex;
  width: min-content;
  flex-direction: column;
}

.banner-text {
  // flex-basis: 70%;
}
</style>