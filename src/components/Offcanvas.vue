<template>
  <div
    class="offcanvas d-flex justify-content-center align-items-center offcanvas-end"
    tabindex="-1"
    id="offcanvasDarkNavbar"
    aria-labelledby="offcanvasDarkNavbarLabel"
  >
    <!-- <button
      type="button"
      class="btn-close d-flex justify-content-center align-items-center mb-5"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button> -->
    <div class="container justify-content-center align-items-center d-flex">
      <div class="row justify-content-center align-items-center w-100 g-0">
        <div
          class="col-12 contact-info justify-content-center align-items-center d-flex flex-column mb-5"
        >
          <span>Pleiades Projectworks LLC</span>
          <p><b>Email: </b>info@pleiadesprojectworks.com</p>
          <p>Monday - Friday</p>
          <p>9 - 5</p>
        </div>
        <div
          class="col-12 contact-form d-flex justify-content-center align-items-center d-flex flex-column w-100"
        >
          <contact-form />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, watchEffect } from "vue";
import ContactForm from "./ContactForm.vue";
export default {
  components: { ContactForm },
  props: {
    canvasOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    // onMounted(() => {
    //   let offcanvas = document.querySelector(".offcanvas");
    //   offcanvas.addEventListener("show.bs.offcanvas", () => {
    //     let body = document.querySelector("body");
    //     body.style.paddingRight = "15px";
    //     console.log(body, "open");
    //   });
    //   offcanvas.addEventListener("hide.bs.offcanvas", () => {
    //     let body = document.querySelector("body");
    //     body.style.paddingRight = "-5px";
    //     console.log(body, "close");
    //   });
    // });
    return {};
  },
};
</script>


<style lang="scss" scoped>
.offcanvas {
  z-index: 1041 !important;
  margin-top: 0 !important;
  max-height: 100vh !important;
  overflow-y: auto;
}
</style>