<template>
  <div
    class="navItemsContainer w-full justify-center content-center p-1 grid alata"
    :style="generatedGridCols"
  >
    <NavDropdown v-for="route in routes" :key="route.path" :route="route" />
  </div>
</template>


<script>
import NavDropdown from "./NavDropdown.vue";
import { computed, onBeforeMount, ref } from "vue";
import { generateGridItems } from "../../../composables/generateGridItems.js";
import * as template from "../../../../templates/main.json";
import { Appstate } from "../../../../AppState";
export default {
  components: { NavDropdown },
  setup() {
    const routes = computed(() => template.navigation.header);
    const baseRoutes = routes.value.map((r) => r.routeName);
    const generatedGridCols = generateGridItems("columns", baseRoutes);

    return {
      routes,
      generatedGridCols,
      mobile: computed(() => Appstate.value.mobile),
      offCanvasOpen: computed(() => Appstate.value.offCanvasOpen),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>