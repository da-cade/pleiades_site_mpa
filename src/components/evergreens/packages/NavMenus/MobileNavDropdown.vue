<template>
  <div class="dropDownContainer relative md:content-center md:justify-center">
    <div class="dropDownWrapper md:text-1 text-4 flex">
      <router-link
        class="group navParentLabel w-full md:w-fit p-3 pb-1"
        :to="{ name: route.routeName }"
        >{{ route.routeName }}

        <div
          v-if="route.children.length && !mobile"
          class="routeWrapper pt-4 group-hover:block left-0 right-0 absolute h-fit hidden"
        >
          <div
            class="routeContainer rounded-3xl md:mx-24 grid"
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
      <div
        class="dropDown text-white w-2/5 flex justify-end pe-3 items-center"
        @click="showDropdown = !showDropdown"
        v-if="route.children.length && mobile"
      >
        <DownChevronIcon
          class="h-10 w-10 chevronIcon"
          :class="showDropdown ? 'rotated' : ''"
        />
      </div>
    </div>

    <div
      class="mobileRouteContainer"
      v-if="route.children.length && mobile"
      :class="showDropdown ? 'uncollapseMenu' : 'collapseMenu'"
    >
      <Transition name="dropdown">
        <div class="routeWrapper" v-if="showDropdown">
          <NavItem
            v-for="routeChild in route.children"
            :key="routeChild.routeName + '-routekey'"
            :route="routeChild"
            class="content-center text-3 w-full justify-center"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>


<script>
import NavItem from "./NavItem.vue";
import { generateGridItems } from "../../../composables/generateGridItems.js";
import { computed, ref } from "vue";
import { Appstate } from "../../../../AppState";
import DownChevronIcon from "../../icons/DownChevronIcon.vue";
export default {
  components: {
    NavItem,
    DownChevronIcon,
  },
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const showDropdown = ref(false);
    const generatedGridRows = generateGridItems("rows", props.route.children);
    return {
      generatedGridRows,
      mobile: computed(() => Appstate.value.mobile),
      showDropdown,
    };
  },
};
</script>


<style lang="scss" scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all ease 0.25s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}

.chevronIcon {
  transition: all linear 0.2s;
}

.rotated {
  // transform: rotateY(-180deg);
  transform: rotateX(-180deg);
}

.collapseMenu {
  max-height: 0px;
  // opacity: 0;
  // display: none;
}

.uncollapseMenu {
  max-height: 500px;
  // opacity: 1;
  // display: block;
}

.navParentLabel {
  &:hover {
    color: black;
    background: white;
  }
  @media screen and (min-width: 1024px) {
    border-radius: 12px;
    // color: white;
  }
}

.mobileRouteContainer {
  transition: all ease-in-out 0.25s;
  .navItem {
    color: white;
    justify-content: start;
    padding: 0 2rem;
    // background: rgb(198, 195, 195);
  }
}

.routeContainer {
  border-radius: 24px;

  .navItem {
    color: white;
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