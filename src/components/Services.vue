<template>
  <div id="services" class="row g-0 m-0" v-scrollanimation>
    <div class="col-12"><h1>Experts on the Web</h1></div>
  </div>
  <div class="container about-section" v-scrollanimation>
    <div class="row justify-content-center align-items-center p-5">
      <div class="col-12" v-scrollanimation>
        <div class="card-holder">
          <div class="text-wrapper">
            <b>Web </b>
            <b class="dark-side">Design</b>
            <p class="body-text">
              At Pleiades, we start with good design. Using industry best
              practices in UX and SEO, Pleiades Projectworks crafts websites
              that are both stylish and functional, which organically rank high
              on searches and unobtrusively communicate your brand to your
              customers. We take into consideration factors such as user
              experience, website speed, and mobile responsiveness, and we
              provide ongoing support and maintenance to ensure that your store
              is always running smoothly.
            </p>
          </div>
          <div class="img-wrapper">
            <img
              loading="lazy"
              class=""
              id="seo"
              src="../assets/img/custom.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-12" v-scrollanimation>
        <div class="card-holder">
          <div class="img-wrapper img-wrapper-2">
            <img
              loading="lazy"
              class=""
              id="seo"
              src="../assets/img/seo.png"
              alt=""
            />
          </div>

          <div class="text-wrapper text-wrapper-2">
            <b class="dark-side">SEO</b>
            <b> / Advertising</b>
            <p class="body-text">
              Running a business online can be complicated, and it works at its
              best when operating under one, cohesive plan. At Pleiades, we can
              handle anything from SEO to SEM, adwords, strategy, and
              brand-planning. We also specialize in Google Ads, and can create
              campaigns at nearly any budget. We work at your level, making sure
              you stay competitive in your areas of operation while also
              discovering new avenues that your competitors don't utilize.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12" v-scrollanimation>
        <div class="card-holder">
          <div class="text-wrapper">
            <b>Custom </b>
            <b class="dark-side">App</b>
            <b> Development</b>
            <p class="body-text">
              Pleiades is comprised of software engineers who have fun making
              things. What that means is that not only are we literate in the
              technologies that comprise the web, we can use them to create
              things that are entirely new. We've already created a few apps for
              our clients, and have lots more planned. We specialize in
              cost-effective, highly expandable web apps that live in the cloud.
              <a href="#contact">Talk to us about getting online. </a>
            </p>
          </div>
          <div class="img-wrapper">
            <img
              loading="lazy"
              class=""
              id="fullstack"
              src="../assets/img/coding.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  font-size: 10em;

  padding-bottom: 5vh;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 5em;
  }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 7em;
  }
}

.container {
  @media (max-width: 480px) {
    padding: 0;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.body-text {
  padding-top: 2.5vh;
}

.about-section {
  background: white;
  border-radius: 25px;
  width: 95vw;
}

.before-enter {
  opacity: 0;
  transform: translateY(30%);
  transition: all 0.5s ease;
}

.enter {
  opacity: 1;

  transform: translateY(0);
}
.card-holder {
  padding: 2em;
  border-radius: 25px;
  backdrop-filter: blur(5px);
  display: flex;
  @media (max-width: 480px) {
    padding: 0;
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
  width: 100%;
}

.dark-side {
  background-color: black;
  color: white;
  font-size: 0.2em;
  padding: 0.2em;
  border-radius: 25px;
}

.text-wrapper {
  height: 100%;
  padding: 1em;
  @media (max-width: 480px) {
    padding: 0;
  }
}

.text-wrapper-2 {
  order: 1;
}

.text-wrapper b {
  font-size: 3em;

  position: relative;

  @media (max-width: 280px) {
    font-size: 2em;
  }
}

.text-wrapper p {
  font-size: 1.2em;

  @media (max-width: 280px) {
    font-size: 1em;
  }
}

.img-wrapper {
  display: flex;
  flex-grow: 1;
  align-items: center;
  // height: 100%;
}

.img-wrapper-2 {
  order: 2;
}

img {
  height: auto;
  max-width: 100%;

  // @media (max-width: 740px) {
  //   height: auto;
  //   max-width: 100%;
  // }
}

#seo {
  // padding-top: 5vh;
  // height: 50%;
}
</style>