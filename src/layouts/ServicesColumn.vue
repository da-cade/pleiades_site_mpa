<template>
  <div id="services" class="m-0" v-scrollanimation>
    <div class=""><h1>Experts on the Web</h1></div>
  </div>
  <div class="about-section" v-scrollanimation>
    <div class="p-5">
      <ServiceCard
        :title="'Web Design'"
        :description="`At Pleiades, we start with good design. Using industry best
              practices in UX and SEO, Pleiades Projectworks crafts websites
              that are both stylish and functional, which organically rank high
              on searches and unobtrusively communicate your brand to your
              customers. We take into consideration factors such as user
              experience, website speed, and mobile responsiveness, and we
              provide ongoing support and maintenance to ensure that your store
              is always running smoothly.`"
        :image="'../src/assets/img/custom.png'"
        :direction="'left'"
      />
      <ServiceCard
        :title="'SEO'"
        :description="`Running a business online can be complicated, and it works at its
              best when operating under one, cohesive plan. At Pleiades, we can
              handle anything from SEO to SEM, adwords, strategy, and
              brand-planning. We also specialize in Google Ads, and can create
              campaigns at nearly any budget. We work at your level, making sure
              you stay competitive in your areas of operation while also
              discovering new avenues that your competitors don't utilize.`"
        :image="'../src/assets/img/seo.png'"
        :direction="'right'"
      />
      <ServiceCard
        :title="'App Development'"
        :description="`Pleiades is comprised of software engineers who have fun making
              things. What that means is that not only are we literate in the
              technologies that comprise the web, we can use them to create
              things that are entirely new. We've already created a few apps for
              our clients, and have lots more planned. We specialize in
              cost-effective, highly expandable web apps that live in the cloud.`"
        :image="'../src/assets/img/coding.png'"
        :direction="'left'"
      />
      <ServiceCard
        :title="'Ads and Marketing'"
        :description="`Pleiades is comprised of software engineers who have fun making
              things. What that means is that not only are we literate in the
              technologies that comprise the web, we can use them to create
              things that are entirely new. We've already created a few apps for
              our clients, and have lots more planned. We specialize in
              cost-effective, highly expandable web apps that live in the cloud.`"
        :image="'../src/assets/img/coding.png'"
        :direction="'right'"
      />
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "../components/ServiceCard.vue";
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
</style>