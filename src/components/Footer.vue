<template>
  <footer class="flex justify-between align-center bg-black p-12 w-full">
    <div class="flex flex-col h-full w-40 p-2">
      <NavItem
        class="text-white"
        v-for="route in routes"
        :key="route.routeName"
        :route="route"
      />
    </div>
  </footer>
</template>


<script>
import * as template from "../templates/main.json";
import { computed } from "vue";
import NavItem from "./evergreens/packages/NavMenus/NavItem.vue";
export default {
  components: { NavItem },
  setup() {
    return {
      routes: computed(() => template.navigation.footer),
    };
  },
};
</script>


<style lang="scss" scoped>
footer {
  height: 50vh;
}
</style>