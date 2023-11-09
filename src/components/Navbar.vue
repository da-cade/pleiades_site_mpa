<template>
  <nav id="nav" class="responsive-navbar">
    <div class="image-container">
      <router-link id="navlogo" class="d-mflex" :to="{ name: 'home' }">
        <img
          class="navbar-brand"
          src="../assets/img/white-logo-no-background.png"
          alt=""
        />
      </router-link>
    </div>
    <NavMenu v-if="!mobile" id="navMenu" />
    <div v-else @click="toggleMobileMenu" class="hamburgerWrapper">
      <HamburgerIcon class="mobileNavButton text-white w-10 h-10" />
    </div>
  </nav>

  <OffCanvas :contentClasses="mobile ? 'mobileOffcanvas' : 'contactOffcanvas'">
    <template #offcanvas-header-slot>
      <div
        v-if="contactOffcanvas"
        class="contact-info p-4 pt-0 justify-center items-center flex flex-col w-full"
      >
        <div class="imgWrapper w-3/4">
          <img
            src="../assets/img/Color logo with background - true square.png"
            alt=""
          />
        </div>
        <p>info@pleiadesprojectworks.com</p>
        <p>Monday - Friday</p>
        <p>9 - 5</p>
      </div>
    </template>
    <template #offcanvas-content-slot>
      <ContactForm v-if="contactOffcanvas" class="bg-white rounded-3xl" />
      <MobileNavMenu v-if="mobileOffcanvas" />
    </template>
  </OffCanvas>
</template>


<script>
import { computed, onMounted, ref, watch } from "vue";
import NavMenu from "./evergreens/packages/NavMenus/NavMenu.vue";
import MobileNavMenu from "./evergreens/packages/NavMenus/MobileNavMenu.vue";
import { navTuck } from "./composables/navTuck.js";
import OffCanvas from "./evergreens/OffCanvas.vue";
import ContactForm from "./ContactForm.vue";
import { Appstate } from "../AppState";
import HamburgerIcon from "./evergreens/icons/HamburgerIcon.vue";
import { useRoute } from "vue-router";
export default {
  components: { NavMenu, MobileNavMenu, OffCanvas, ContactForm, HamburgerIcon },
  name: "App",
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      (value, oldValue) => {
        if (value != oldValue && Appstate.value.offCanvasOpen) {
          toggleMobileMenu();
        }
      }
    );
    function toggleMobileMenu() {
      Appstate.value.mobileOffcanvas = !Appstate.value.mobileOffcanvas;
      Appstate.value.offCanvasOpen = !Appstate.value.offCanvasOpen;
    }

    return {
      mobile: computed(() => Appstate.value.mobile),
      contactOffcanvas: computed(() => Appstate.value.contactOffcanvas),
      mobileOffcanvas: computed(() => Appstate.value.mobileOffcanvas),
      toggleMobileMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
#nav {
  transition: top 0.5s ease;
}

.responsive-navbar {
  background-color: black;
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  width: 100%;
}

.image-container {
  max-width: 30%;
}

@media (max-width: 1024px) {
  .image-container {
    max-width: 80%;
  }
  #navMenu {
  }
}
@media (max-width: 768px) {
  .responsive-navbar {
    justify-content: space-around;
  }
}
@media (max-width: 640px) {
}
@media (min-width: 2000px) {
}

.hamburgerWrapper {
  display: flex;
  align-items: center;
}

// .navItem {
//   display: flex;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   flex-grow: 1;
//   a {
//     position: relative;
//   }
//   @media (max-width: 820px) {
//     display: none;
//   }
// }
</style>