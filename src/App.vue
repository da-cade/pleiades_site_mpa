<script>
import Navbar from "./components/Navbar.vue";
import Fab from "./components/evergreens/Fab.vue";
import OffCanvas from "./components/evergreens/OffCanvas.vue";
import ContactForm from "./components/ContactForm.vue";

import { ref } from "vue";
import { Appstate } from "./AppState";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Fab,
    OffCanvas,
    ContactForm,
    Footer,
  },
  setup() {
    return {
      toggleOffCanvas() {
        Appstate.value.offCanvasOpen = !Appstate.value.offCanvasOpen;
      },
    };
  },
};
</script>

<template>
  <Navbar />
  <!-- <main> -->
  <RouterView />
  <!-- </main> -->
  <Fab @click="toggleOffCanvas" />
  <!-- <OffCanvas>
    <template #offcanvas-content-slot>
      <ContactForm class="bg-white p-4 rounded-3xl" />
    </template>
  </OffCanvas> -->
  <Footer />
</template>


<style scoped>
</style>
