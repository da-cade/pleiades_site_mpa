<template>
  <nav
    id="nav"
    class="bg-black sticky top-0 right-0 left-0 z-50 flex w-full h-auto"
  >
    <div class="image-container max-w-sm">
      <router-link id="navlogo" class="d-mflex" :to="{ name: 'home' }">
        <img
          class="navbar-brand"
          src="../assets/img/white-logo-no-background.png"
          alt=""
        />
      </router-link>
    </div>
    <NavMenu />
  </nav>
</template>


<script>
import { onMounted, ref } from "vue";
import NavMenu from "./evergreens/packages/NavMenu.vue";
import { navTuck } from "./composables/navTuck.js";
export default {
  components: { NavMenu },
  name: "App",
  setup() {
    onMounted(() => {
      let nav = document.getElementById("nav");
      console.log(nav);
      navTuck(nav);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
#nav {
  transition: top 0.5s ease;
}

.navbar {
  background-color: black;
  margin: auto;
  font-weight: 900;
  // outline: 0.1em solid rgba(255, 255, 255, 0.302);
  // transition: all 500ms;
  // @media (max-width: 1500px) {
  // max-height: 70px;
  // }
  // @media (max-width: 820px) {
  //   margin-top: 0;
  //   width: 100vw;
  //   margin-left: 0;
  //   margin-right: 0;
  //   border-radius: 0;
  //   outline: none;
  // }
}

.navItem {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  a {
    position: relative;
  }
  @media (max-width: 820px) {
    display: none;
  }
}

.navItem > a::after,
.navbar-toggler > span::after {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: #ffb725;
  opacity: 0;
  transition: opacity 200ms, transform 200ms;
}

.navItem > a:hover {
  color: white;
}

.navItem > a:hover::after,
.navItem > a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

.navbar-toggler {
  outline: none;
  border: none;
  font-size: 1.2em;
  span {
    color: rgba(255, 255, 255, 0.713);
    position: relative;
    padding-bottom: 3px;
  }

  // @media (max-width: 380px) {
  //   font-size: 0.8em;
  //   height: 40px;
  //   width: 30%;
  // }
}

.navbar-toggler:hover,
.navbar-toggler:focus {
  span {
    color: white !important;
  }
  span::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
}

a {
  // font-weight: 500;
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.713);
  text-decoration: none;
  transition: 0.12s;
}

#navlogo {
  opacity: 1;
}

.navbar-brand {
  // padding: 1em;
  // width: 65%;

  // @media (max-width: 380px) {
  //   width: 50%;
  // }
  // @media (max-width: 1020px) {
  //   width: 15em;
  // }
  max-width: 100%;
  max-height: 100%;
  flex-shrink: 1;
}

.text-bg-dark {
  background-color: black;
  background: black;
  color: black;
}

.contact-form {
  background-color: white;
  padding: 2em;
}

.contact-info {
  background-color: black;
  padding: 2em;
  color: white;
  border-radius: 2px;
  @media (max-width: 820px) {
    padding: 2em;
  }
}

textarea {
  width: 100%;
  height: 15vh;

  @media (max-width: 480px) {
    width: 100%;
  }
}

.offcanvas {
  max-height: 90vh;
  margin-top: 10vh;

  @media (max-width: 280px) {
    border-radius: 0;
    max-height: 100vh;
    margin-top: 0;
  }
}

.btn-close {
  background: none;
  background-color: black;
  opacity: 1;
  color: white;
  font-size: 1.2em;
  border-radius: 25px;
  padding: 0.5em;
  width: 100%;
  margin-top: 10vh;

  @media (max-width: 280px) {
    width: 100%;
  }
}

.navbar-toggler {
  span {
    color: rgba(255, 255, 255, 0.713);
    position: relative;
    padding-bottom: 3px;
  }

  @media (max-width: 380px) {
    font-size: 0.8em;
    height: 40px;
    width: 30%;
  }
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>