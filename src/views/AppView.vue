<template>
  <div class="bg-white h-fit w-full text-black p-5 rounded-3xl">
    <h1 class="text-5 mb-4">{{ app.name }}</h1>
    <p>{{ app.longDescription }}</p>
  </div>
</template>


<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import * as template from "../templates/main.json";
export default {
  setup() {
    const route = useRoute();
    console.log(route.params);
    const app = computed(() => {
      return template.routes.apps.find(
        (s) => s.routeName == route.params.instance
      );
    });

    return { app };
  },
};
</script>


<style lang="scss" scoped>
</style>