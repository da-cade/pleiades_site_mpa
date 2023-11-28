<template>
  <div
    class="detailsCard justify-start lg:justify-around coverBg"
    :style="`background-image: url(${step.image}); background-position: ${step.imagePosition}`"
    :aria-label="step.imageAlt"
  >
    <!-- <img class="img" :src="step.image" :alt="step.imageAlt" /> -->
    <div class="detailsTitle">
      <h3 class="text-8 bg-white p-2 lg:p-4 raleway font-extrabold">
        {{ step.title }}
      </h3>
    </div>
    <div class="detailsInfo bg-white p-4 lg:p-8 rounded-3xl">
      <p class="text-1">
        {{ step.body }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    step: {
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
.coverBg {
  background: white;
  background-position: 50% 10%;
}

.detailsCard {
  margin: auto 0;
  width: 100%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  padding: 2rem;

  img {
    // flex-shrink: 1;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
  }

  // &:nth-last-child(1) {
  //   z-index: 11;
  // }

  .detailsTitle {
    width: fit-content;

    // background: white;
    mix-blend-mode: screen;
    h1 {
      color: black;
    }
    @media (max-width: 768px) {
      height: 20%;
      display: flex;
      align-items: center;
    }
  }
}

.detailsInfo {
  box-shadow: 6px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>