<template >
  <Transition name="nested">
    <div
      v-if="offCanvasOpen"
      ref="dialog"
      class="offcanvasDialogue fixed overflow-hidden inset-0 z-50"
    >
      <div class="offcanvasContent bg-blue-950 w-1/4 p-3">
        <div class="dismissRow">
          <XIcon class="h-5 w-5" @click="toggleOffCanvas" />
        </div>
        <div class="contentHeader">
          <span class="text-3xl text-white alata">Start a Conversation</span>
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
  components: {
    XIcon,
  },
  setup() {
    const dialog = ref();
    const offCanvasOpen = computed(() => Appstate.value.offCanvasOpen);
    watchEffect(() => {
      if (dialog.value) {
        const body = document.querySelector("body");
        var scrollbarWidth = window.innerWidth - body.clientWidth + "px";
        body.style.overflowY = "hidden";
        body.style.paddingRight = scrollbarWidth;
        dialog.value.addEventListener("click", (e) => {
          if (e.target === e.currentTarget) {
            Appstate.value.offCanvasOpen = false;
          }
        });
      } else {
        console.log("watchy");
        const body = document.querySelector("body");
        body.style.overflowY = "auto";
        body.style.paddingRight = "0px";
      }
    });

    return {
      dialog,
      offCanvasOpen,
      toggleOffCanvas() {
        Appstate.value.offCanvasOpen = !Appstate.value.offCanvasOpen;
      },
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
}

.dismissRow {
  display: flex;
  color: white;
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
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
}
</style>