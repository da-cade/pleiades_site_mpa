<template>
  <div
    class="dropDownContainer text-1 relative flex content-center justify-center"
  >
    <router-link
      class="group navParentLabel p-2"
      :to="{ name: route.routeName }"
      >{{ route.routeName }}

      <div
        v-if="route.children.length"
        class="routeWrapper pt-4 group-hover:block left-0 right-0 absolute h-fit hidden"
      >
        <div
          class="routeContainer mx-4 md:mx-8 3xl:mx-16 grid"
          :style="generatedGridRows"
        >
          <NavItem
            v-for="routeChild in route.children"
            :key="routeChild.routeName + '-routekey'"
            :route="routeChild"
            class="content-center w-full justify-center"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import NavItem from "./NavItem.vue";
import { generateGridItems } from "../../../composables/generateGridItems.js";
import { computed } from "vue";
export default {
  components: {
    NavItem,
  },
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const generatedGridRows = generateGridItems("rows", props.route.children);
    return { generatedGridRows };
  },
};
</script>


<style lang="scss" scoped>
.navParentLabel {
  font-family: geo-light;
  font-weight: 400;
  border-radius: 12px;
  // color: var(--color-4);
  color: rgb(239, 239, 239);
  &:hover {
    color: black;
    background: white;
  }
}

.routeContainer {
  // top: 2rem;
  // border: inset 3px black;
  border-radius: 24px;

  .navItem {
    color: white;
    font-family: geo-light;
    background: rgb(34, 34, 34);
    opacity: 0.95;
    padding: 0.5rem;
    &:hover {
      background: white;
      color: black;
    }
    &:nth-child(1) {
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
    }
    &:nth-last-child(1) {
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
    }
  }
}
</style>