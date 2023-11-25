<template>
  <div
    class="detailsCard gap-4 justify-start lg:justify-around coverBg h-full"
    :style="`background-image: url(${instance.image}); background-position: ${instance.imagePosition}`"
    :aria-label="instance.imageAlt"
  >
    <div class="detailsTitle">
      <h1 class="text-8 bg-white p-2 lg:p-4 raleway font-extrabold">
        {{ instance.title }}
      </h1>
    </div>
    <div class="detailsInfo bg-white p-4 lg:p-8 rounded-3xl">
      <p class="text-1">
        {{ instance.body }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: { instance: { type: Object, required: true } },
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
  display: flex;
  flex-direction: column;

  img {
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
  }

  .detailsTitle {
    width: fit-content;
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
  outline: solid 4px #343a40;
}
</style>