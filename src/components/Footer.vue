<template>
  <footer class="flex justify-between align-center bg-black p-12 w-full">
    <div class="flex flex-col h-full w-40 p-2">
      <router-link
        class="text-white"
        v-for="route in routes"
        :key="route"
        :to="route.routeName"
        >{{ route.name }}</router-link
      >
    </div>
  </footer>
</template>


<script>
import * as template from "../templates/main.json";
import { computed } from "vue";
export default {
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