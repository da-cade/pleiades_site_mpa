<template>
  <div
    class="content-width flex flex-col my-8 xl:my-16 gap-8 md:gap-16 2xl:gap-32"
  >
    <Banner />
    <!-- <Eclipse /> -->
    <ServicesColumn />
    <TechValuesCard />
    <Portfolio />
    <div class="contactWrapper mb-12 flex flex-col items-center h-full">
      <h1 class="text-white text-8 mb-6">Contact Us</h1>
      <ContactLayout />
    </div>
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