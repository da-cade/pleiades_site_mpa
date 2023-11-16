<template>
  <div
    class="detailsCard coverBg"
    :style="`background-image: url(${step.image}); background-position: ${step.imagePosition}`"
    :aria-label="step.imageAlt"
  >
    <!-- <img class="img" :src="step.image" :alt="step.imageAlt" /> -->
    <div class="detailsTitle">
      <h1 class="text-8 raleway font-extrabold">{{ step.title }}</h1>
    </div>
    <div class="detailsInfo bg-white p-4 rounded-3xl">
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
  justify-content: space-around;
  padding: 2rem;

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