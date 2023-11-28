<template>
  <div class="contactWrapper">
    <div :id="anchorId"></div>
    <div class="titleWrapper p-8 lg:p-16 bg-white">
      <h2 class="text-black text-center text-6">
        {{ description }}
      </h2>
    </div>
    <div
      class="contactUs bg-white bgImage"
      :style="`background-image: url(${backgroundImage})`"
    >
      <ContactLayoutHero class="contactLayout content-width" />
    </div>
    <!-- <MobileStepsLayout v-else /> -->
  </div>
</template>


<script>
import ContactLayoutHero from "./ContactLayoutHero.vue";
export default {
  components: { ContactLayoutHero },
  props: ["anchorId", "backgroundImage", "description"],
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.titleWrapper {
  padding-top: 100px;
}
</style>