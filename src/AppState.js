import { ref } from "vue";

export const Appstate = ref({
  offCanvasOpen: false,
  mobileOffcanvas: false,
  contactOffcanvas: false,
  mobile: window.screen.width <= 769,
  breakpoints: [1999, 1536, 1280, 1024, 768, 640]
})