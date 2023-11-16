<template>
  <div class="contentWrapper relative w-full flex flex-col">
    <div class="headerWrapper z-10">
      <div id="progressBar" class="headerContainer rounded-e-3xl bg-white">
        <h2 class="text-5 text-black me-3">How It Works</h2>
      </div>
    </div>
    <!-- <StepsWrapper /> -->
    <div class="contentColumn w-full">
      <div class="detailsCol ps-2 md:pe-4 xl:pe-8">
        <StepCard
          v-for="step in steps"
          :key="step + '-card'"
          :step="step"
          class="cardAttrs"
        />
      </div>

      <div class="stepsCol">
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
import { computed, onMounted, onUnmounted } from "vue";
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
  setup() {
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
    onUnmounted(() => {
      window.removeEventListener("scroll", progressBar);
    });
    return {};
  },
};
</script>




<style lang="scss" scoped>
@use "sass:list";
.contentColumn {
  display: flex;
  max-width: 100vw;
}

$breakpoints: (
  "min-width: 2000px",
  "max-width: 1999px",
  "max-width: 1536px",
  "max-width: 1280px",
  "max-width: 1024px",
  "max-width: 768px",
  "max-width: 640px"
);

@each $b in $breakpoints {
  $count: list.length($breakpoints);
  @media (#{$b}) {
    $i: index($breakpoints, $b);

    $height: #{75}vh;
    $topStart: #{120}px;
    $titleHeight: #{120 - $i * 5}px;
    $padding: #{4 - $i * 0.4rem};
    $circleDi: #{25 - $i * 2.5}rem;
    .headerWrapper {
      top: calc($topStart);
      position: sticky;
      isolation: isolate;
      height: $titleHeight;
      width: 100%;
    }
    .headerContainer {
      // max-width: 95%;
      padding: 0.5rem;
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
      padding: calc($topStart + $titleHeight) $padding;
      padding-right: 12px;
      max-width: 70%;
      min-width: 70%;
      gap: $height;
    }

    .stepsCol {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      padding-top: calc($topStart + $titleHeight);
      padding-bottom: calc($topStart + $titleHeight - $circleDi/2 + $height/2);
      min-width: 30%;
      gap: $height;
      background: rgb(209 213 219);
      mix-blend-mode: screen;
    }

    .cardAttrs {
      height: $height;
      top: calc($titleHeight + $topStart);
      position: sticky;
      // width: calc($height/2);
      outline: solid 10px black;
      padding: calc($padding - 1rem);
    }

    .stepAttrs {
      top: calc($topStart + $titleHeight - $circleDi/2 + $height/2);
      position: sticky;
      margin: auto 0;
      // background-color: #fff;
      outline: solid 10px white;
      max-width: $circleDi;
      min-width: $circleDi;
      min-height: $circleDi;
      max-height: $circleDi;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
}

// .headerContainer {
//       top: calc($topStart + 2.5vh);
//       padding: 0.5rem;
//       isolation: isolate;
//       display: flex;
//       justify-content: flex-end;
//       transition: ease-in-out width 0.2s;
//       h2 {
//         white-space: nowrap;
//       }
//     }

//     .detailsCol,
//     .stepsCol {
//       display: grid;
//       grid-template-rows: repeat(6, minmax(0, 1fr));
//     }

//     .detailsCol {
//       display: flex;
//       flex-direction: column;
//       position: relative;
//       align-items: center;
//       background: #d3dae2;
//       padding: calc($height/10);
//       width: 70%;
//       gap: $height;
//     }

//     .stepsCol {
//       display: grid;
//       flex-direction: column;
//       position: relative;
//       align-items: center;
//       padding-top: calc($height/2);
//       padding-bottom: calc($height/2 - $circleDi);
//       width: 30%;
//       gap: $height;
//       background: rgb(209 213 219);
//       mix-blend-mode: screen;
//     }

//     .cardAttrs {
//       height: $height;
//       top: calc($height/2);
//       position: sticky;
//       width: 100%;
//       outline: solid 10px black;
//     }

//     .stepAttrs {
//       position: sticky;
//       top: calc($height/2 + $circleDi/2);
//       max-height: $circleDi;
//       max-width: $circleDi;
//       min-height: $circleDi;
//       min-width: $circleDi;
//       outline: solid 10px white;
//       margin: auto 0;
//       // top: calc($titleHeight + $height/2);
//       outline: solid 10px white;
//       &:nth-last-child(1) {
//         margin-bottom: 0;
//       }
//     }
//   }
</style>