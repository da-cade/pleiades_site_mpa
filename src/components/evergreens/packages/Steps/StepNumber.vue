<template>
  <PunchOut :title="title" />
</template>


<script>
import PunchOut from "../../PunchOut.vue";
export default {
  props: { title },
  setup() {
    return {};
    PunchOut;
  },
};
</script>


<style lang="scss" scoped>
</style>