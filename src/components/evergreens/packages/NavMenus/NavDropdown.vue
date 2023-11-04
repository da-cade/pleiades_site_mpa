<template>
  <div class="dropDownContainer relative flex content-center justify-center">
    <router-link
      class="group navParentLabel p-2"
      :to="{ name: baseRoute.routeName }"
      >{{ formattedName }}

      <div
        v-if="subroutes.length"
        class="routeWrapper pt-4 group-hover:block left-0 right-0 absolute h-fit hidden"
      >
        <div class="routeContainer 3xl:mx-24 grid" :style="generatedGridRows">
          <NavItem
            v-for="route in subroutes"
            :key="route.path + '-routekey'"
            :route="route"
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
    subroutes: {
      type: Array,
      required: true,
    },
    baseRoute: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formattedName = computed(() => {
      console.log(props);
      return props.baseRoute.charAt(0).toUpperCase() + props.baseRoute.slice(1);
    });

    const computedDestination = computed(() => {
      const path = `/${props.baseRoute}/`;
      if (props.subroutes.length) {
        if (props.baseRoute == "about") {
          return path + props.subroutes[0].routeName;
        } else {
          return path + "all";
        }
      } else {
        return path;
      }
    });
    const generatedGridRows = generateGridItems("rows", props.subroutes);
    return { generatedGridRows, computedDestination, formattedName };
  },
};
</script>


<style lang="scss" scoped>
.navParentLabel {
  border-radius: 12px;
  &:hover {
    background: rgb(227, 227, 227);
  }
}

.routeContainer {
  // top: 2rem;
  // border: inset 3px black;
  border-radius: 24px;

  .navItem {
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