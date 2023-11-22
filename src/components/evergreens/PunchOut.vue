<template>
  <div class="punchOut">
    <h3 class="title text-3 text-center p-2 md:p-4 xl:p-8" :class="titleClass">
      {{ title }}
    </h3>
    <!-- <div class="clouds"></div>
    <div class="ring"></div>
    <div class="up"></div> -->
  </div>
</template>


<script>
export default {
  props: {
    title: { type: [String, Number], required: true },
    titleClass: { type: String },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.punchOut {
  color: white;
  border-radius: 100%;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    position: absolute;
  }
}
</style>