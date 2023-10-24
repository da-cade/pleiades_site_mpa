<template>
  <div
    class="w-full banner-headline-wrapper bubble-edge flex flex-col justify-center items-star p-36"
  >
    <span class="modak text-9xl">Big Solutions</span>
    <span class="alata text-7xl">For Small Business</span>
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
  // background: #091624;
  height: 105vh;
  color: white;
  // mix-blend-mode: multiply;
}

.bubble-edge {
  --mask: linear-gradient(to top, #0000 44px, #000 0),
    radial-gradient(44px, #000 98%, #0000) bottom/81.40px 88px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>