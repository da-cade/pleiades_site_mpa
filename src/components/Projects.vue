<template>
  <div id="works" class="container" v-scrollanimation>
    <div class="row">
      <div
        class="col-12 justify-center items-center d-flex flex-column left-side"
      >
        <h1 class="text-center">Our Work</h1>
        <p class="text-center">Check out our past work.</p>
      </div>
      <div
        class="col-12 justify-center bg-black items-center d-flex w-md-100 g-0"
      >
        <swiper
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide class="">
            <div class="row justify-center items-center card-slide">
              <div class="col-md-6 img-brand">
                <img src="/src/assets/img/portsches-logo.webp" alt="" />
              </div>
              <div
                class="col-md-6 d-flex justify-center items-center flex-column"
              >
                <ul>
                  <li>Custom Web Design</li>
                  <li>Google Workspace Solutions</li>
                  <li>Vue.js Diamond Picker</li>
                </ul>
                <div class="link-tag">
                  <a target="blank" href="https://portschesfinejewelry.com/"
                    >Check out the site!</a
                  >
                </div>
              </div>
            </div>
            <div class="port"></div>
          </swiper-slide>

          <swiper-slide>
            <div class="row justify-center items-center card-slide">
              <div class="col-md-6 img-brand deb">
                <img src="/src/assets/img/debdye.png" alt="" />
              </div>
              <div
                class="col-md-6 d-flex justify-center items-center flex-column"
              >
                <ul>
                  <li>Static Webpage</li>
                  <li>Vue.js Framework</li>
                  <li>Business Site</li>
                  <li>Custom Web Design</li>
                </ul>
                <div class="link-tag">
                  <a target="blank" href="https://debbiedyetcservices.com/#/"
                    >Check out the site!</a
                  >
                </div>
              </div>
            </div>
            <div class="deb-bg"></div> </swiper-slide
          ><swiper-slide>
            <div class="d-flex flex-column justify-center items-center">
              <b>Want to show up here? </b
              ><a class="contact-link" href="#contact"> Contact Us</a>
              <b>to get started!</b>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="check-us-out w-100 bg-white p-5 right-side">
        <h2>Check out our profiles on:</h2>
        <div class="">
          <a
            class="d-flex items-center p-3"
            target="blank"
            rel="nofollow"
            href="https://www.designrush.com/agency/profile/pleiades-projectworks"
          >
            <div class="design-rush"></div>
            <span class="fs-4">Design Rush</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 1em;
  text-decoration: none;
  color: white;
  font-weight: 500;
}

h1 {
  font-size: 5em;
  font-weight: 900;
}

h2 {
  font-size: 3em;
  font-weight: 900;
}

p {
  font-size: 1.2em;
}
.port {
  background: url("../assets/img/port-site.png");
  background-position: center;
  background-size: cover;
  width: 50vw;
  height: 50vh;
  // border-radius: 25px;
  position: absolute;
  @media (max-width: 480px) {
    width: 79vw;
  }
}

.deb-bg {
  background: url("../assets/img/deb-site.png");
  background-position: center;
  background-size: cover;
  width: 50vw;
  height: 50vh;
  border-radius: 25px;
  position: absolute;
  @media (max-width: 480px) {
    width: 79vw;
  }
}

.card-slide {
  height: 30vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.73);
  backdrop-filter: blur(4px);
  border-radius: 25px;
  @media (max-width: 1020px) {
    height: auto;
  }
}

.contact-link {
  color: white;

  border: 1px white solid;
  padding: 1em;
  margin: 1em;
  border-radius: 25px;
}

.before-enter {
  opacity: 0;
  transform: translateY(30%);
  transition: all 0.5s ease;
}

.enter {
  opacity: 1;
  transition-delay: 0.1s;
  transform: translateY(0);
}

.container {
  margin-top: 15vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 25px;
  color: black;

  width: 95%;

  @media (max-width: 480px) {
    background: none;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
}

.swiper-slide {
  height: 50vh;
  justify-content: center;
}

ul {
  padding-top: 1em;
  color: white;

  font-size: 0.8em;
}

.left-side {
  background-color: white;
  border-radius: 25px 25px 0px 0px;
  color: black;
  width: 100%;
  padding: 5em;

  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
  }
}

.right-side {
  background-color: black;
  border-radius: 0px 0px 25px 25px;

  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    border-radius: 0px 0px 25px 25px;
  }
}

.check-us-out {
  min-height: 15vh;
  span {
    color: black;
  }
}

.design-rush {
  height: 70px;
  width: 70px;
  background-image: url("https://www.designrush.com/topbest/images/svg/designrush-new-logo.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.link-tag {
  background: rgba(255, 255, 255, 0.23);
  transition: all 0.5s;
  border-radius: 25px;
}

.link-tag:hover {
  background: white;
  color: white;
}

.link-tag:hover a {
  color: black;
}

.img-brand {
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 1em;
  }
}

.img-brand img {
  width: 75%;
}

.deb {
  width: 40%;
  background-color: #5e0149;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding-bottom: 3em;
  padding-top: 3em;
  @media (max-width: 480px) {
    margin-top: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
    width: 70%;
  }
}
</style>