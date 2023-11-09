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
    <NavMenu id="navMenu" />
  </nav>

  <OffCanvas :contentClasses="mobile ? 'mobileOffcanvas' : 'contactOffcanvas'">
    <template #offcanvas-header-slot>
      <div
        v-if="contactOffcanvas"
        class="contact-info p-4 justify-center items-center flex flex-column w-full"
      >
        <div class="imgWrapper w-3/4">
          <img
            src="../assets/img/Color logo with background - true square.png"
            alt=""
          />
        </div>
        <p>
          <span class="">Email: </span>
          info@pleiadesprojectworks.com
        </p>
        <p>Monday - Friday</p>
        <p>9 - 5</p>
      </div>
      <h1 v-if="mobileOffcanvas" class="">Howdy</h1>
    </template>
    <template #offcanvas-content-slot>
      <ContactForm v-if="!mobile" class="bg-white rounded-3xl" />
    </template>
  </OffCanvas>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import NavMenu from "./evergreens/packages/NavMenus/NavMenu.vue";
import { navTuck } from "./composables/navTuck.js";
import OffCanvas from "./evergreens/OffCanvas.vue";
import ContactForm from "./ContactForm.vue";
import { Appstate } from "../AppState";
export default {
  components: { NavMenu, OffCanvas, ContactForm },
  name: "App",
  setup() {
    return {
      mobile: computed(() => Appstate.value.mobile),
      contactOffcanvas: computed(() => Appstate.value.contactOffcanvas),
      mobileOffcanvas: computed(() => Appstate.value.mobileOffcanvas),
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