<template>
  <div class="pageWrapper content-width my-6 md:my-24 flex flex-col gap-4">
    <ContactView />
    <ContactLayout />
  </div>
</template>


<script>
import ContactLayout from "../layouts/ContactLayout.vue";
import ContactView from "../views/ContactView.vue";
export default {
  components: { ContactLayout, ContactView },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>