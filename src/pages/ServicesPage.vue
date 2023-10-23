<template>
  <h1 class="text-3xl">{{ $route.name }}</h1>
  <div class="servicesMenu" v-if="$route.name == 'Services'"></div>
  <router-view v-else></router-view>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>