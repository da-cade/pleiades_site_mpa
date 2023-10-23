<template>
  <div
    class="navItemsContainer w-full justify-center content-center p-1 grid"
    :style="generatedGridCols"
  >
    <NavDropdown
      class=""
      v-for="route in navRoutes"
      :key="route.path"
      :routeTree="route"
    />
  </div>
</template>


<script>
import NavDropdown from "./NavDropdown.vue";
import { computed, onBeforeMount, ref } from "vue";
import { routes } from "../../../router.js";
import { generateGridItems } from "../../composables/generateGridItems.js";
export default {
  components: { NavDropdown },
  setup() {
    const navRoutes = computed(() => routes.slice(1, routes.length));
    // const generatedGridCols = computed(() => {
    //   return `grid-template-columns: repeat(${navRoutes.value.length}, minmax(0, 1fr));`;
    // });
    const generatedGridCols = generateGridItems("columns", navRoutes.value);
    console.log(navRoutes.value);

    return { navRoutes, generatedGridCols };
  },
};
</script>


<style lang="scss" scoped>
</style>