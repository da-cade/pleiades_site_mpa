<template>
  <div
    class="banner-headline-wrapper gap-2 md:gap-4 xl:gap-8 py-4 md:py-8 xl:py-16 justify-center items-start"
  >
    <span class="modak text-12 bigTitle">Big Solutions</span>
    <span class="alata text-8">For Small Business</span>
    <div class="banner-text">
      <p
        class="text-1 my-3 bg-opacity-40 bg-blue-950 p-4 rounded-3xl border-2 border-white"
      >
        With our combination of know-how and next-level creativity, our expert
        team of designers and digi-gurus can guide you through the noise. We are
        here to bring strategy, energy, and brand-new information to your
        business online, using SEO, good advertising, and really great design.
      </p>
    </div>
    <div class="buttonRow flex gap-4">
      <RainbowButton
        :to="'Our Services'"
        class="mt-3 text-1"
        :displayMessage="'Find Out More'"
      />
      <RainbowButton
        :to="'Contact'"
        class="mt-3 text-1"
        :displayMessage="'Get Started'"
      />
    </div>
  </div>
</template>


<script>
import { useRouter } from "vue-router";
import RainbowButton from "./evergreens/RainbowButton.vue";
export default {
  components: { RainbowButton },
  setup() {
    return {
      router: useRouter(),
    };
  },
};
</script>


<style lang="scss" scoped>
.banner-headline-wrapper {
  position: relative;
  z-index: 10;
  color: white;
  display: flex;
  flex-direction: column;
  // max-height: 80vh;
  @media screen and (min-width: 768px) {
    // max-height: 90vh;
    width: min-content;
  }
}

.bigTitle {
  line-height: 1;
  @media screen and (min-width: 1024px) {
    white-space: nowrap;
  }
}
</style>