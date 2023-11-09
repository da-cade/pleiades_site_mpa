<template>
  <div class="contentWrapper relative w-screen flex flex-col">
    <div
      id="progressBar"
      class="headerContainer sticky rounded-e-3xl z-10 bg-white"
    >
      <h2 class="text-5 text-black me-3">How It Works</h2>
    </div>
    <!-- <StepsWrapper /> -->
    <div class="contentColumn">
      <div class="detailsCol">
        <StepCard
          v-for="step in steps"
          :key="step + '-card'"
          :step="step"
          class="cardAttrs"
        />
      </div>

      <div class="stepsCol grid grid-rows-3">
        <PunchOut
          v-for="(step, i) in steps"
          :key="step + '-detail'"
          :title="i + 1"
          :titleClass="'font-black raleway text-10'"
          class="stepAttrs stepTitle"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import StepCard from "../components/evergreens/packages/Steps/StepCard.vue";
import PunchOut from "../components/evergreens/PunchOut.vue";
export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
  components: { PunchOut, StepCard },
  setup(props) {
    function progressBar() {
      const container = document.querySelector(".detailsCol");
      const rect = container.getBoundingClientRect();
      const winScroll = rect.top;
      var height = rect.top - rect.bottom;
      var scrolled = (winScroll / height) * 100;

      if (scrolled > 85) {
        document.getElementById("progressBar").style.width = "0%";
      } else {
        document.getElementById("progressBar").style.width = "60%";
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", progressBar);
    });
    return {};
  },
};
</script>


<style lang="scss" scoped>
.contentColumn {
  display: flex;
}

$height: 60vh;
$topStart: 100px;
$titleHeight: 60px;

.headerContainer {
  top: calc($topStart + 2.5vh);
  // max-width: 95%;
  padding: 0.5rem;
  height: $titleHeight;
  isolation: isolate;
  display: flex;
  justify-content: flex-end;
  transition: ease-in-out width 0.2s;
  h2 {
    white-space: nowrap;
  }
}

.detailsCol {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background: #d3dae2;
  padding: $height/10;
  width: 70%;
  gap: $height;
}

.stepsCol {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding-top: $height/10;
  padding-bottom: calc($height/10 + $height/2 - 10rem);
  width: 30%;
  gap: $height;
  background: rgb(209 213 219);
  mix-blend-mode: screen;
}

.cardAttrs {
  height: $height;
  top: calc($titleHeight + $topStart + $height/10);
  position: sticky;
  outline: solid 10px black;
}

.stepAttrs {
  top: calc($titleHeight + $height/2);
  position: sticky;
  margin: auto 0;
  // background-color: #fff;
  outline: solid 10px white;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
}
</style>