<template>
  <div class="eclipse">
    <img id="logo" src="../assets/img/white-logo-no-background.png" alt="" />
    <!-- <div id="lightMoon" class="light-circle"></div> -->
    <div id="darkMoon" class="dark-circle"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // let lightMoon = document.getElementById("lightMoon");
    let darkMoon = document.getElementById("darkMoon");
    let logo = document.getElementById("logo");

    window.addEventListener("scroll", function (e) {
      let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // lightMoon.style.opacity = Math.max(0, Math.min(1, -scroll / 500 + 1));
      darkMoon.style.opacity = Math.max(0, Math.min(1, -scroll / 2500 + 1));
      logo.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 1));

      let moonheight = scroll * 0.75;
      darkMoon.style.marginTop = moonheight.toString() + "px";
    });
  },
};
</script>

<style lang="scss" scoped>
.light-circle,
.dark-circle {
  width: 90vw;
  height: 90vw;
  border-radius: 50% 50% 50% 50%;
  z-index: -1;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 0px 15px rgb(255, 255, 255));
  animation: glow 5s infinite;
  transition: all 1ms;
  transition: margin 1ms;

  @media (max-width: 480px) {
    top: 50%;
    left: 50%;
    width: 35vh;
    height: 35vh;
    // transition: all 1000ms;
    // transition: margin 200ms;

    transform: translate(-50%, -50%);
  }

  /* Media Query for low resolution  Tablets, Ipads */
  // @media (min-width: 481px) and (max-width: 767px) {
  // }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50vw;
    height: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Media Query for Laptops and Desktops */
  // @media (min-width: 1025px) and (max-width: 1280px) {
  // }
}
.dark-circle {
  background-color: white;
  //   transition: all 1000ms;
  //   transition: margin 200ms;
}

.eclipse {
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  // offset: right 1px;
}

.eclipse img {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: -2;
  //   transition: all 0.25s;
  width: 33%;
  border-radius: 25px;

  @media (max-width: 480px) {
    top: 50%;
    left: 50%;
    width: 50%;

    transform: translate(-50%, -50%);
  }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 40vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>