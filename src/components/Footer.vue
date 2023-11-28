<template>
  <footer
    id="footer"
    class="flex flex-col md:flex-row align-center bg-black p-4 md:p-12 w-full"
  >
    <div class="footer-section gap-4 grid">
      <div
        class="navGroup md:order-2 flex flex-col md:flex-row flex-wrap justify-between"
      >
        <NavItem
          class="w-fit navColor content-center bg-black justify-left"
          v-for="route in routes"
          :key="route.routeName"
          :route="route"
        />
      </div>
      <div class="max-w-xs md:max-w-md xl:max-w-md md:order-1">
        <img
          src="https://imagedelivery.net/Id169OYcKaUZq2ukOAQIsw/0075590e-ae84-4dbc-03de-8bff5e113f00/public"
          alt=""
        />
      </div>

      <small class="legaleeze text-white flex flex-col">
        <span>Pleiades Projectworks, LLC</span>
        <span>All Rights Reserved © 2022-2025 </span>
        <span>Pleiades Projectworks is a Web Design Company since 2022 </span>
      </small>
    </div>
    <div class="footer-section p-4 md:px-16">
      <div class="contact-info text-white text-1">
        <!-- <h1 class="text-3">Do an animation here</h1> -->
        <p class="">info@pleiadesprojectworks.com</p>
        <p>Monday - Friday</p>
        <p>9 - 5</p>
      </div>

      <div class="socials">
        <LinkedInIcon class="text-white h-8 w-8 hover:cursor-pointer" />
      </div>
    </div>
  </footer>
</template>


<script>
import * as template from "../templates/main.json";
import { computed } from "vue";
import NavItem from "./evergreens/packages/NavMenus/NavItem.vue";
import { generateGridItems } from "./composables/generateGridItems";
import LinkedInIcon from "./evergreens/icons/LinkedInIcon.vue";
export default {
  components: { NavItem, LinkedInIcon },
  setup() {
    const footer = computed(() => template.navigation.footer);

    const routes = footer.value.routes;
    // const routeGroups = [];
    // while (routes.length > 0) {
    //   let chunk = routes.splice(0, 4);
    //   routeGroups.push(chunk);
    // }
    // const generatedGridCols = generateGridItems("columns", routeGroups);
    return { routes };
  },
};
</script>


<style lang="scss" scoped>
footer {
}

.footer-section {
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
  &:nth-last-child(1) {
    gap: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      order: 1;
    }
    * {
      text-align: right;
    }
  }
}

.legaleeze {
  order: 4;
}

.brand-box {
  width: calc(50% - 3rem);
}
.knockoutBar {
  // background-image: url("../assets/img/star-bar.png");
  width: 3rem;
  background-color: white;
}

.navColor {
  color: white;
  &:hover {
    color: var(--color-4);
  }
}
</style>