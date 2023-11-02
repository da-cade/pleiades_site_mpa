<template>
  <div class="punchOut">
    <h2 class="title" :style="titleStyle">{{ title }}</h2>
    <div class="clouds"></div>
    <div class="ring"></div>
    <div class="up"></div>
  </div>
</template>


<script>
export default {
  props: {
    title: { type: [String, Number], required: true },
    titleStyle: { type: String },
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
  max-width: 20rem;
  max-height: 20rem;
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