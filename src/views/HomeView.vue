<template>
  <div class="content-width flex flex-col mt-8 gap-32">
    <Banner />
    <!-- <Eclipse /> -->
    <ServicesColumn />
    <TechValuesCard />
    <Portfolio />
    <ContactLayout />
  </div>
</template>


<script setup>
import Eclipse from "../components/Eclipse.vue";
import ServicesColumn from "../layouts/ServicesColumn.vue";
import TechValuesCard from "../layouts/TechValuesCard.vue";
import Portfolio from "../components/Portfolio.vue";
import ContactLayout from "../layouts/ContactLayout.vue";
import Banner from "../components/Banner.vue";
</script>


<style lang="scss" scoped>
</style>