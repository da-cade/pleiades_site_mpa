<template>
  <div class="instanceWrapper">
    <div class="cardWrapper p-5 bg-transparent flex gap-4">
      <div class="punchOut">
        <h2 class="title">{{ instance.title }}</h2>
      </div>
      <div class="bodyWrapper flex flex-col justify-center mb-4 p-2">
        <div class="bodyContent rounded-3xl bg-gray-300 p-4">
          <h3 class="text-2xl mb-3">{{ instance.subtitle }}</h3>
          <p class="">{{ instance.body }}</p>
        </div>
      </div>
    </div>
    <div class="boundaryLine bg-black h-2 w-full px-4 rounded-3xl"></div>
  </div>
</template>


<script>
export default {
  props: {
    instance: {
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
.punchOut {
  color: white;
  min-width: 20rem;
  min-height: 20rem;
  border-radius: 100%;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    padding: 2rem;
    position: absolute;
    font-size: 2.5rem;
  }
}
</style>