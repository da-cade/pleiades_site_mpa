<template>
  <h1 class="text-5 mb-4 text-white">{{ $route.name }}</h1>
  <div class="appsMenu grid grid-cols-2 gap-4">
    <AppCard class="" v-for="app in apps" :key="app.name" :app="app" />
  </div>
</template>


<script>
import { computed } from "vue";
import AppCard from "../components/AppCard.vue";
import * as template from "../templates/main.json";
export default {
  components: {
    AppCard,
  },
  setup() {
    const apps = computed(() => {
      return template.apps;
    });
    return { apps };
  },
};
</script>


<style lang="scss" scoped>
</style>