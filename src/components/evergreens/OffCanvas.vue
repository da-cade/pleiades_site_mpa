<template >
  <Teleport to="body">
    <Transition name="nested">
      <div
        v-show="offCanvasOpen"
        ref="dialog"
        class="offcanvasDialogue h-screen w-screen fixed overflow-hidden inset-0"
      >
        <div class="offcanvasContent" :class="contentClasses">
          <div class="dismissRow pe-4 pt-4">
            <XIcon class="h-5 w-5" @click="closeOffcanvas" />
          </div>
          <div class="contentHeader">
            <slot name="offcanvas-header-slot" />
          </div>
          <div class="contentWrapper py-2">
            <slot name="offcanvas-content-slot" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


<script>
import { computed, ref, watch } from "vue";
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
    watch(
      () => Appstate.value.offCanvasOpen,
      (value, oldValue) => {
        if (oldValue !== value) {
          if (value) {
            const body = document.querySelector("body");
            const bgImage = document.querySelector(".bg-image");
            const app = document.getElementById("app");
            if (!Appstate.value.mobile) {
              var scrollbarWidth = window.innerWidth - body.clientWidth + "px";
              bgImage.style.width = `calc(100% - ${scrollbarWidth})`;
              body.style.paddingRight = scrollbarWidth;
              dialog.value.addEventListener("click", (e) => {
                if (e.target === e.currentTarget) {
                  closeOffcanvas();
                }
              });
            }
            // FIXME why was this here. Mobile
            // app.style.overflowY = "hidden";
            body.style.overflowY = "hidden";
          } else {
            const body = document.querySelector("body");

            const bgImage = document.querySelector(".bg-image");
            body.style.overflowY = "auto";
            bgImage.style.width = `100%`;

            body.style.paddingRight = "0px";
          }
        }
      }
    );

    function closeOffcanvas() {
      Appstate.value.offCanvasOpen = false;
      Appstate.value.contactOffcanvas = false;
      Appstate.value.mobileOffcanvas = false;
    }

    return {
      dialog,
      offCanvasOpen,
      closeOffcanvas,
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
  transform: translateX(-100%);
}

.offcanvasDialogue {
  background-color: rgba(0, 0, 0, 0.167);
  z-index: 51;
}

.dismissRow {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  .icon:hover {
    cursor: pointer;
  }
}

.offcanvasContent {
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
}

.contentWrapper {
  margin: 14px 0;
}

.contentWrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.contentWrapper::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.contentWrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}
</style>