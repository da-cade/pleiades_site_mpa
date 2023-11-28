<template>
  <nav id="nav" class="responsive-navbar px-8 lg:px-0">
    <div class="image-container">
      <router-link id="home" class="flex" :to="{ name: 'home' }">
        <img
          class="navbar-brand"
          src="https://imagedelivery.net/Id169OYcKaUZq2ukOAQIsw/0075590e-ae84-4dbc-03de-8bff5e113f00/public"
          alt=""
        />
      </router-link>
    </div>
    <NavMenu v-if="!mobile" id="navMenu" />
    <div v-else @click="toggleMobileMenu" class="hamburgerWrapper">
      <HamburgerIcon class="mobileNavButton text-white w-10 h-10" />
    </div>
  </nav>

  <!-- <OffCanvas :contentClasses="mobile ? 'mobileOffcanvas' : 'contactOffcanvas'">
    <template #offcanvas-header-slot>
      <div
        v-if="contactOffcanvas"
        class="contact-info p-4 pt-0 justify-center items-center flex flex-col w-full"
      >
        <div class="imgWrapper w-3/4">
          <img
            src="https://imagedelivery.net/Id169OYcKaUZq2ukOAQIsw/61295c0d-268b-4d2f-9584-ed7975818d00/public"
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
  </OffCanvas> -->
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

    onMounted(() => {
      // navTuck();
    });

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
  justify-content: space-between;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  width: 100%;
}

@media (max-width: 768px) {
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