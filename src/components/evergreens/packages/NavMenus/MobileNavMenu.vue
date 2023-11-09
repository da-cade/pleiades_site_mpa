<template>
  <div class="navItemsContainer w-full justify-start content-start alata">
    <MobileNavDropdown
      class="w-full justify-start text-5"
      v-for="route in routes"
      :key="route.path"
      :route="route"
    />
  </div>
</template>


<script>
import MobileNavDropdown from "./MobileNavDropdown.vue";
import { computed, onBeforeMount, ref } from "vue";
import { generateGridItems } from "../../../composables/generateGridItems.js";
import * as template from "../../../../templates/main.json";
import { Appstate } from "../../../../AppState";
export default {
  components: { MobileNavDropdown },
  setup() {
    const routes = computed(() => template.navigation.header);
    const baseRoutes = routes.value.map((r) => r.routeName);
    const generatedGridRows = generateGridItems("rows", baseRoutes);

    return {
      routes,
      generatedGridRows,
      mobile: computed(() => Appstate.value.mobile),
      offCanvasOpen: computed(() => Appstate.value.offCanvasOpen),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>