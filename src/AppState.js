import { ref } from "vue";

export const Appstate = ref({
  offCanvasOpen: false,
  mobileOffcanvas: false,
  contactOffcanvas: false,
  mobile: window.screen.width <= 769,
})