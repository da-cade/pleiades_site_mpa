<script>
import Navbar from "./components/Navbar.vue";
import Fab from "./components/evergreens/Fab.vue";

import { computed, ref } from "vue";
import { Appstate } from "./AppState";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Fab,
    Footer,
  },
  setup() {
    return {
      toggleContactCanvas() {
        Appstate.value.offCanvasOpen = !Appstate.value.offCanvasOpen;
        Appstate.value.contactOffcanvas = !Appstate.value.contactOffcanvas;
      },
      mobile: computed(() => Appstate.value.mobile),
    };
  },
};
</script>

<template>
  <Navbar />
  <!-- <main> -->
  <RouterView />
  <!-- </main> -->
  <!-- <Fab v-if="!mobile" @click="toggleContactCanvas" /> -->

  <Footer />
</template>


<style lang="scss" scoped>
</style>
