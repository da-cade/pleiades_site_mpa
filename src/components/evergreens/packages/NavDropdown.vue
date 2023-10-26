<template>
  <div class="dropDownContainer relative flex content-center justify-center">
    <router-link class="group" :to="computedDestination"
      >{{ formattedName }}

      <div
        v-if="subroutes.length"
        class="routeContainer group-hover:grid left-0 right-0 absolute h-fit hidden"
        :style="generatedGridRows"
      >
        <NavItem
          v-for="route in subroutes"
          :key="route.name + '-routekey'"
          :routePath="`/${baseRoute}/${route.routeName}`"
          :routeName="route.name"
        />
      </div>
    </router-link>
  </div>
</template>


<script>
import NavItem from "./NavItem.vue";
import { generateGridItems } from "../../composables/generateGridItems.js";
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
    console.log(props.baseRoute);
    const formattedName = computed(() => {
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
</style>