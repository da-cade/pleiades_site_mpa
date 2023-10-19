<template>
  <div id="whyus" class="container d-block d-lg-flex justify-content-center">
    <div class="wrapper d-flex">
      <div class="row tech-column justify-content-center align-items-start">
        <div class="col-12 text-center">
          <div class="d-block mb-4">
            <b>We</b>
            <b class="dark-side">Use</b>
          </div>
        </div>

        <div
          class="col-6 col-lg-12 d-flex justify-content-center align-items-center"
          v-scrollanimation
        >
          <img
            loading="lazy"
            class="img-fill"
            src="../assets/img/vue.png"
            alt=""
          />
        </div>
        <div
          class="col-6 col-lg-12 d-flex justify-content-center align-items-center"
          v-scrollanimation
        >
          <img
            loading="lazy"
            class="img-fill"
            src="../assets/img/shopify.png"
            alt=""
          />
        </div>
        <div
          class="col-6 col-lg-12 d-flex justify-content-center align-items-center"
          v-scrollanimation
        >
          <img
            loading="lazy"
            class="img-fill"
            src="../assets/img/firebase.png"
            alt=""
          />
        </div>
        <div
          class="col-6 col-lg-12 d-flex justify-content-center align-items-center"
          v-scrollanimation
        >
          <img
            loading="lazy"
            class="img-fill"
            src="../assets/img/google_ads.svg.png"
            alt=""
          />
        </div>
        <div
          class="col-6 col-lg-12 d-flex justify-content-center align-items-center"
          v-scrollanimation
        >
          <img
            loading="lazy"
            class="img-fill azure"
            src="../assets/img/azure.png"
            alt=""
          />
        </div>
      </div>
      <div class="row pitch-column justify-content-between align-items-center">
        <div
          class="col-md-12 mb-5 d-flex flex-column justify-content-center align-items-center"
          v-scrollanimation
        >
          <div class="d-flex flex-wrap">
            <b>The Right </b>
            <b class="dark-side">Prices</b>
          </div>
          <p class="body-text">
            At Pleiades, we charge a fair price for our services. The complexity
            of online marketing is often intentionally exaggerated by agencies
            offering SEO and SEM services --- we don't do that. Our monthly
            reports tell you everything that we're doing and how it works, so
            that you can be a part of the process. When designing websites and
            apps, we're happy to work with your budget and your needs, whether
            that's creating a work of art online or giving you something quick
            and clean that you can run yourself.
            <a href="#contact">Find out more.</a>
          </p>
        </div>
        <div
          class="col-md-12 mb-5 d-flex flex-column justify-content-center align-items-center"
          v-scrollanimation
        >
          <div class="d-flex flex-wrap">
            <b>A</b>
            <b class="dark-side">Tailored</b>
            <b>Experience</b>
          </div>

          <p class="body-text">
            We specialize in creating custom websites for businesses and
            organizations of all sizes. We take pride in our ability to
            understand our clients' needs and goals, and use that understanding
            to craft visually stunning and highly functional websites. Our team
            of experienced designers and developers work closely with each
            client to ensure that their website is not only visually appealing,
            but also effectively communicates their brand and meets the needs of
            their target audience. Whether you need a simple brochure website or
            a complex e-commerce platform, we have the skills and expertise to
            bring your vision to life.
          </p>
        </div>
        <div
          class="col-md-12 d-flex flex-column justify-content-center align-items-center"
          v-scrollanimation
        >
          <div class="d-flex flex-wrap">
            <b class="">The</b>
            <b class="dark-side">Customer</b>
            <b>First</b>
          </div>
          <p class="body-text">
            This means two things: the first is that the web is a place of
            constant change, where trends, styles, and technologies become
            outdated. Many companies are willing to sell a website that never
            changes, but if you are subscribed to any of our web-service
            programs, we'll make sure your website never looks outdated and make
            minor changes whenever you want at no extra charge. The second part
            of our Customer First Policy means that we talk to you every step of
            the way in designing both websites and online strategies. And if
            somehow you don't like what we've made for you, we'll fix it for
            free.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.before-enter {
  opacity: 0;
  transform: translatex(70%);
  transition: all 0.5s ease;
}

.enter {
  opacity: 1;
  transition-delay: 0.3s;
  transform: translatex(0);
}

.container {
  // height: 100vh;
  // min-height: fit-content;
  margin-top: 15vh;
}

b {
  font-size: 3em;
  position: relative;
  z-index: 2;
  padding: 0.2em;
  text-align: center;

  @media (max-width: 280px) {
    font-size: 2em;
  }
}
.dark-side {
  background-color: black;
  color: white;

  border-radius: 25px;
  max-width: 100%;
}

p {
  font-size: 1.2em;

  @media (max-width: 280px) {
    font-size: 1em;
  }
}

.wrapper {
  padding: 3em;
  border-radius: 25px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  // align-items: center;
  align-self: center;
  @media (max-width: 1020px) {
    flex-direction: column;
    // height: 100%;
    // width: 100%;
    // border-radius: 25px;
  }
}

.tech-column {
  display: flex;
  padding: 2rem;
  @media (max-width: 1020px) {
    order: 2;
  }
}

.pitch-column {
  display: flex;
  padding: 2rem 4rem;
  @media (max-width: 1020px) {
    order: 1;
    padding: 0;
  }
}

.rounded-left {
  border-radius: 25px 0px 0px 25px;
}
.rounded-right {
  border-radius: 0px 25px 25px 0px;
}

.wrapper-2 h2 {
  font-size: 3em;

  @media (max-width: 280px) {
    font-size: 1em;
  }
}
.img-fill {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: auto;
  height: auto;
  max-height: 15vh;
  max-width: 25vh;
  // margin-top: 2em;
  @media (max-width: 900px) {
    max-height: 7vh;
  }
}

.azure {
  padding: 0.25rem;
}

.body-text {
  padding-top: 2.5vh;
}

.letter-circle {
  background: #ffb625a3;
  z-index: -1;
  width: 6vh;
  height: 6vh;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: -1vw;
}

#circle-2 {
  left: 2em;
  background: #0d5bd88f;
}

#circle-3 {
  right: 2em;
  background: #fd4715a0;
}
</style>