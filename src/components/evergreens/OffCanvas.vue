<template >
  <Transition name="nested">
    <div
      v-show="offCanvasOpen"
      ref="dialog"
      class="offcanvasDialogue h-screen w-screen fixed overflow-hidden inset-0"
    >
      <div class="offcanvasContent" :class="contentClasses">
        <div class="dismissRow">
          <XIcon class="h-5 w-5 text-black" @click="toggleOffCanvas" />
        </div>
        <div class="contentHeader">
          <slot name="offcanvas-header-slot" />
        </div>
        <div class="contentBody">
          <slot name="offcanvas-content-slot" />
        </div>
        <div class="contentEnd"></div>
      </div>
    </div>
  </Transition>
</template>


<script>
import { computed, ref, watchEffect } from "vue";
import { Appstate } from "../../AppState.js";
import XIcon from "./icons/XIcon.vue";
export default {
  props: {
    contentClasses: {
      type: String,
      required: false,
    },
  },
  components: {
    XIcon,
  },
  setup() {
    const dialog = ref();
    const offCanvasOpen = computed(() => Appstate.value.offCanvasOpen);
    watchEffect(() => {
      if (Appstate.value.offCanvasOpen) {
        const body = document.querySelector("body");
        const bgImage = document.querySelector(".bg-image");
        if (!Appstate.value.mobile) {
          var scrollbarWidth = window.innerWidth - body.clientWidth + "px";
          bgImage.style.width = `calc(100% - ${scrollbarWidth})`;
          body.style.paddingRight = scrollbarWidth;
          dialog.value.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) {
              Appstate.value.offCanvasOpen = false;
            }
          });
        }
        body.style.overflowY = "hidden";
      } else {
        const body = document.querySelector("body");
        const bgImage = document.querySelector(".bg-image");
        body.style.overflowY = "auto";
        bgImage.style.width = `100%`;
        body.style.paddingRight = "0px";
      }
    });

    return {
      dialog,
      offCanvasOpen,
      toggleOffCanvas() {
        Appstate.value.offCanvasOpen = !Appstate.value.offCanvasOpen;
        Appstate.value.contactOffcanvas = false;
        Appstate.value.mobileOffcanvas = false;
      },
      mobile: computed(() => Appstate.value.mobile),
    };
  },
};
</script>


<style lang="scss" scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

.nested-enter-active .offcanvasContent,
.nested-leave-active .offcanvasContent {
  transition: all 300ms ease;
}

.nested-enter-active .offcanvasContent {
  transition-delay: 25ms;
}

.nested-enter-from .offcanvasContent,
.nested-leave-to .offcanvasContent {
  transform: translateX(100%);
}

.offcanvasDialogue {
  background-color: rgba(0, 0, 0, 0.167);
  z-index: 51;
}

.dismissRow {
  display: flex;
  color: black;
  width: 100%;
  justify-content: flex-end;
  .icon:hover {
    cursor: pointer;
  }
}

.offcanvasContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: calc(100vh - 20px);
  position: absolute;
  // margin: 10px auto;
  // outline: solid 10px #ffb625da;
  top: 0;
  right: 0;
}
</style>