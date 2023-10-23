<template>
  <div
    class="w-full banner-headline-wrapper bubble-edge flex flex-col justify-center items-star p-36"
  >
    <span class="banner-headline text-9xl">Big Solutions</span>
    <span class="text-9xl">For Small Business</span>
    <h2></h2>
  </div>
</template>


<script>
export default {
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

.banner-headline {
  font-family: modak;
  // border-bottom: solid 3px white;
}
</style>