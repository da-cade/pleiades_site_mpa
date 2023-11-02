<template>
  <router-link
    class="navItem ease-in duration-100 bg-opacity-90 flex content-center justify-center p-1 h-fit w-full max-w-full"
    :to="routePath"
  >
    <span class="">{{ routeName }}</span>
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
.navItem {
  color: white;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));

  &:hover {
    color: black;
    background: rgb(227, 227, 227);
  }
}
</style>