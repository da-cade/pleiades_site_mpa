<template>
  <router-link
    class="navItem ease-in duration-100 bg-opacity-90 flex content-center justify-center p-1 h-fit w-full max-w-full"
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
        console.log(destination, props.route.routeParams);
        return destination;
      }),
    };
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