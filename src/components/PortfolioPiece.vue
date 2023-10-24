<template>
  <div
    class="portfolioWrapper flex m-auto h-full rounded-3xl w-4/5 items-center justify-center"
    :style="`background-image: url(${portfolioPiece.image});`"
  >
    <div class="portfolioStripe w-full flex justify-around">
      <div class="h-full w-1/2">
        <img
          class="img-standard"
          :src="portfolioPiece.logo"
          :alt="portfolioPiece.imageAlt"
        />
      </div>
      <div class="flex justify-center items-center flex-column">
        <ul class="text-white list-disc p-2">
          <li v-for="(point, i) in portfolioPiece.talkingPoints" :key="i">
            {{ point }}
          </li>
        </ul>
        <div class="link-tag">
          <a target="blank" :href="portfolioPiece.source">{{
            portfolioPiece.callToAction
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    portfolioPiece: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.portfolioWrapper {
  background-position: center;
  background-size: cover;
}

.portfolioStripe {
  height: 30vh;
  background: rgba(0, 0, 0, 0.73);
  backdrop-filter: blur(4px);
  @media (max-width: 1020px) {
    height: auto;
  }
}
</style>