<template>
  <router-link
    class="navItem flex content-center justify-center p-1 h-fit max-w-full"
    :to="{ name: route.name }"
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
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>