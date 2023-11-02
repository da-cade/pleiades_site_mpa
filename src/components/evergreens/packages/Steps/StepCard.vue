<template>
  <div
    class="detailsCard"
    :style="`background-image: url(${step.image}); background-position: ${step.imagePosition}`"
    :aria-label="imageAlt"
  >
    <!-- <img class="img" :src="step.image" :alt="step.imageAlt" /> -->
    <div class="detailsTitle">
      <h1 class="text-9xl raleway font-extrabold">{{ step.title }}</h1>
    </div>
    <div class="detailsInfo bg-white p-4 rounded-3xl">
      <p>
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
.detailsCard {
  background: white;
  margin: auto 0;
  background-position: 50% 10%;
  width: 100%;
  // max-height: 90vh;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // justify-content: space-between;
  top: 5vh;
  height: 50vh;
  padding: 2rem;
  // gap: 2rem;

  img {
    flex-shrink: 1;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
  }

  &:nth-last-child(1) {
    z-index: 11;
  }

  .detailsTitle {
    width: fit-content;
    padding: 1rem;
    background: white;
    mix-blend-mode: screen;
    h1 {
      color: black;
    }
  }
}

.detailsInfo {
  box-shadow: 6px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}
</style>