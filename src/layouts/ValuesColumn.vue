<template>
  <div
    class="pitch-column rounded-3xl bg-white flex flex-col content-between items-center p-4 py-8 md:p-8 gap-4"
  >
    <div class="valueWrapper flex justify-center items-center flex-col">
      <h2 class="valueTitle text-5">
        <b class="text-dark">A </b>
        <b class="dark-side">Tailored</b>
        <b class="text-dark"> Experience</b>
      </h2>
      <div class="valueItem justify-center items-start">
        <p class="text-1">
          We specialize in creating custom websites for businesses and
          organizations of all sizes. We take pride in our ability to understand
          our clients' needs and goals, and use that understanding to craft
          visually stunning and highly functional websites. Our team of
          experienced designers and developers work closely with each client to
          ensure that their website is not only visually appealing, but also
          effectively communicates their brand and meets the needs of their
          target audience. Whether you need a simple brochure website or a
          complex e-commerce platform, we have the skills and expertise to bring
          your vision to life.
        </p>
      </div>
    </div>
    <div class="valueWrapper flex justify-center items-center flex-col">
      <h2 class="valueTitle text-5">
        <b class="text-dark">The </b>
        <b class="dark-side">Customer</b>
        <b> First</b>
      </h2>
      <div class="valueItem items-start justify-center">
        <p class="text-1">
          This means two things: the first is that the web is a place of
          constant change, where trends, styles, and technologies become
          outdated. Many companies are willing to sell a website that never
          changes, but if you are subscribed to any of our web-service programs,
          we'll make sure your website never looks outdated and make minor
          changes whenever you want at no extra charge. The second part of this
          is that we talk to you every step of the way in designing both
          websites and online strategies. And if somehow you don't like what
          we've made for you, we'll fix it for free.
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.pitch-column {
  height: min-content;
  @media (max-width: 1024px) {
    order: 1;
    // padding: 0;
  }
}

.valueWrapper {
  // padding: 2rem;
}

.valueTitle {
  // gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    gap: 1rem;
    // margin-bottom: 1rem;
    justify-content: flex-start;
  }
}

.valueItem {
  margin-bottom: 2rem;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>