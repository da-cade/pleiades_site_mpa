<template>
  <div
    class="portfolioWrapper flex m-auto h-full rounded-3xl w-4/5 items-center justify-center"
    :style="`background-image: url(${portfolioPiece.image});`"
  >
    <div
      class="portfolioStripe w-full flex items-center justify-around flex-col md:flex-row"
    >
      <div class="h-full w-3/4 md:w-1/2">
        <img
          v-if="portfolioPiece.logo"
          class="img-standard"
          :src="portfolioPiece.logo"
          :alt="portfolioPiece.imageAlt"
        />
        <h2 class="text-7 text-white" v-else>This Could Be You</h2>
      </div>
      <div
        class="flex justify-center py-3 md:py-8 items-center md:items-start flex-col"
      >
        <ul class="text-white text-1 list-disc p-2">
          <li v-for="(point, i) in portfolioPiece.talkingPoints" :key="i">
            {{ point }}
          </li>
        </ul>
        <RainbowButton
          :displayMessage="portfolioPiece.callToAction"
          :to="portfolioPiece.destination"
        />
      </div>
    </div>
  </div>
</template>


<script>
import RainbowButton from "./evergreens/RainbowButton.vue";
export default {
  components: { RainbowButton },
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
  min-height: 30vh;
  background: rgba(0, 0, 0, 0.73);
  backdrop-filter: blur(4px);
  @media (max-width: 1020px) {
    height: auto;
  }
}

.link-tag {
  background: rgba(255, 255, 255, 0.53);
  transition: all 0.2s;
  border-radius: 25px;
  padding: 0.5em;
  color: #0e70bc;
}

.link-tag:hover {
  background: white;
}

.link-tag:hover a {
  color: black;
}
</style>