<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="content-width flex flex-col gap-20">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
