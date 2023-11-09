<template>
  <router-link
    class="navItem ease-in duration-100 flex p-1 h-fit max-w-full"
    :to="computedDestination"
  >
    <span class="">{{ route.displayName }}</span>
  </router-link>
</template>


<script>
import { computed } from "vue";
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      computedDestination: computed(() => {
        const destination = props.route.routeParams
          ? {
              name: props.route.routeName,
              params: { instance: props.route.routeParams },
            }
          : { name: props.route.routeName };
        return destination;
      }),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>