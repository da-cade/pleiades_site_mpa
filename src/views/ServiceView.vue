<template>
  <div class="bg-white h-fit w-full text-black p-5 rounded-3xl">
    <h1 class="text-6xl mb-4">{{ service.name }}</h1>
    <p>{{ service.longDescription }}</p>
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
    const service = computed(() => {
      return template.routes.services.find(
        (s) => s.routeName == route.params.instance
      );
    });

    return { service };
  },
};
</script>


<style lang="scss" scoped>
</style>