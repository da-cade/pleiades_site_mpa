<template>
  <metainfo> </metainfo>
  <Navbar />
  <!-- <main> -->
  <RouterView />
  <!-- </main> -->
  <!-- <Fab v-if="!mobile" @click="toggleContactCanvas" /> -->

  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Fab from "./components/evergreens/Fab.vue";

import { computed, ref } from "vue";
import { Appstate } from "./AppState";
import Footer from "./components/Footer.vue";
import { useMeta } from "vue-meta";
export default {
  components: {
    Navbar,
    Fab,
    Footer,
  },
  setup() {
    useMeta({
      title:
        "Pleiades Projectworks | Experts in SEO, Google Ads, Web Design serving Boise, Idaho and the Treasure Valley",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Pleiades offers expert and affordable web design, SEO, and brand development services for small and medium business in Boise and the rest of Idaho",
        },
      ],
    });
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

<style lang="scss" scoped>
</style>
