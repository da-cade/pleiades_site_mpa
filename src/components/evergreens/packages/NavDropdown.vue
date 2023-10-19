<template>
  <div class="dropDownContainer relative flex content-center justify-center">
    <router-link class="group" :to="{ name: routeTree.name }"
      >{{ routeTree.name }}

      <div
        v-if="routeChildren.length"
        class="routeContainer group-hover:grid left-0 right-0 absolute h-fit hidden"
        :style="generatedGridRows"
      >
        <NavItem
          v-for="route in routeChildren"
          :key="route.path + '-key'"
          :route="route"
        />
      </div>
    </router-link>
  </div>
</template>


<script>
import NavItem from "./NavItem.vue";
import { computed } from "vue";
export default {
  components: {
    NavItem,
  },
  props: {
    routeTree: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const routeChildren = computed(() => {
      return props.routeTree.children
        ? props.routeTree.children
        : props.routeTree;
    });
    const generatedGridRows = computed(() => {
      return `grid-template-rows: repeat(${
        routeChildren.value.length ? routeChildren.value.length : ""
      }, minmax(0, 1fr));`;
    });

    return { routeChildren, generatedGridRows };
  },
};
</script>


<style lang="scss" scoped>
</style>