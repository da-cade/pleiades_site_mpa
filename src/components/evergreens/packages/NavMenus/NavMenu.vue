<template>
  <div
    v-if="!mobile"
    class="navItemsContainer w-full justify-center content-center p-1 grid alata"
    :style="generatedGridCols"
  >
    <NavDropdown v-for="route in routes" :key="route.path" :route="route" />
  </div>

  <div v-else @click="toggleMobileMenu" class="mobileNav">
    <HamburgerIcon class="mobileNavButton text-white w-10 h-10" />
  </div>

  <div v-if="offCanvasOpen" class="mobileNavMenu"></div>
</template>


<script>
import NavDropdown from "./NavDropdown.vue";
import { computed, onBeforeMount, ref } from "vue";
import { generateGridItems } from "../../../composables/generateGridItems.js";
import * as template from "../../../../templates/main.json";
import HamburgerIcon from "../../icons/HamburgerIcon.vue";
import { Appstate } from "../../../../AppState";
export default {
  components: { NavDropdown, HamburgerIcon },
  setup() {
    const routes = computed(() => template.navigation.header);
    const baseRoutes = routes.value.map((r) => r.routeName);
    console.log(baseRoutes);
    const generatedGridCols = generateGridItems("columns", baseRoutes);

    return {
      routes,
      generatedGridCols,
      mobile: computed(() => Appstate.value.mobile),
      offCanvasOpen: computed(() => Appstate.value.offCanvasOpen),
      toggleMobileMenu() {
        Appstate.value.mobileOffcanvas = !Appstate.value.mobileOffcanvas;
        Appstate.value.offCanvasOpen = !Appstate.value.offCanvasOpen;
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.mobileNav {
  display: flex;
  align-items: center;
}
</style>