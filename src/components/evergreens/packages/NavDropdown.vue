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
          :route="route"
          :routeFamily="routeName"
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
    routeName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formattedName = computed(() => {
      return props.routeName.charAt(0).toUpperCase() + props.routeName.slice(1);
    });

    const computedDestination = computed(() => {
      return props.subroutes.length
        ? `/${props.routeName}/all`
        : "/" + props.routeName;
    });
    const generatedGridRows = generateGridItems("rows", props.subroutes);
    return { generatedGridRows, computedDestination, formattedName };
  },
};
</script>


<style lang="scss" scoped>
</style>