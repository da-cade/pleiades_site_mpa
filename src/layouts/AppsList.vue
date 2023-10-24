<template>
  <div class="appsMenu grid grid-cols-2 gap-4">
    <h1 class="text-6xl mb-4">{{ $route.name }}</h1>
    <AppCard class="" v-for="app in apps" :key="app.name" :app="app" />
  </div>
</template>


<script>
import { computed } from "vue";
import * as template from "../templates/main.json";
import AppCard from "../components/AppCard.vue";
export default {
  components: {
    AppCard,
  },
  setup() {
    console.log(template.routes.apps);
    return {
      apps: computed(() => template.routes.apps),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>