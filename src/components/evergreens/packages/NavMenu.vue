<template>
  <div
    class="navItemsContainer w-full justify-center content-center p-1 grid alata"
    :style="generatedGridCols"
  >
    <NavDropdown
      v-for="route in navRoutes"
      :key="route.path"
      :subroutes="navObject[route]"
      :routeName="route"
    />
  </div>
</template>


<script>
import NavDropdown from "./NavDropdown.vue";
import { computed, onBeforeMount, ref } from "vue";
import { generateGridItems } from "../../composables/generateGridItems.js";
import * as template from "../../../templates/main.json";
export default {
  components: { NavDropdown },
  setup() {
    const navRoutes = computed(() => Object.keys(template.routes));
    // const generatedGridCols = computed(() => {
    //   return `grid-template-columns: repeat(${navRoutes.value.length}, minmax(0, 1fr));`;
    // });
    console.log(navRoutes.value);
    const generatedGridCols = generateGridItems("columns", navRoutes.value);

    return {
      navRoutes,
      navObject: computed(() => template.routes),
      generatedGridCols,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>