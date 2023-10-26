<template>
  <router-link
    class="navItem flex content-center justify-center p-1 h-fit max-w-full"
    :to="routePath"
  >
    <span>{{ routeName }}</span>
  </router-link>
</template>


<script>
export default {
  props: {
    routePath: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>