<template>
  <router-link
    class="navItem flex content-center justify-center p-1 h-fit max-w-full"
    :to="`/${routeFamily}/${route.routeName}`"
  >
    <span>{{ route.name }}</span>
  </router-link>
</template>


<script>
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
    routeFamily: {
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