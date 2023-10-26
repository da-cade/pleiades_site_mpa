<template>
  <div
    class="pitch-column rounded-3xl bg-white flex flex-col content-between items-center md:p-4 xl:p-8 gap-4"
  >
    <div
      class="col-md-12 xl:px-24 xl:p-8 mb-4 flex flex-column justify-center items-center"
      v-scrollanimation
    >
      <div class="flex flex-wrap">
        <b class="text-dark">The Right </b>
        <b class="dark-side">Prices</b>
      </div>
      <p class="body-text">
        At Pleiades, we charge a fair price for our services. The complexity of
        online marketing is often intentionally exaggerated by agencies offering
        SEO and SEM services — we don't do that. Our monthly reports tell you
        everything that we're doing and how it works, so that you can be a part
        of the process.
      </p>
      <br />
      <p>
        When designing websites and apps, we're happy to work with your budget
        and your needs, whether that's creating a work of art online or giving
        you something quick and clean that you can run yourself.
        <a href="/services/all">Find out more.</a>
      </p>
    </div>
    <div
      class="col-md-12 xl:px-24 xl:p-8 mb-5 flex flex-column justify-center items-center"
      v-scrollanimation
    >
      <div class="flex flex-wrap">
        <b class="text-dark">A</b>
        <b class="dark-side">Tailored</b>
        <b class="text-dark">Experience</b>
      </div>

      <p class="body-text">
        We specialize in creating custom websites for businesses and
        organizations of all sizes. We take pride in our ability to understand
        our clients' needs and goals, and use that understanding to craft
        visually stunning and highly functional websites. Our team of
        experienced designers and developers work closely with each client to
        ensure that their website is not only visually appealing, but also
        effectively communicates their brand and meets the needs of their target
        audience. Whether you need a simple brochure website or a complex
        e-commerce platform, we have the skills and expertise to bring your
        vision to life.
      </p>
    </div>
    <div
      class="col-md-12 xl:px-24 xl:p-8 flex flex-column justify-center items-center"
      v-scrollanimation
    >
      <div class="flex flex-wrap">
        <b class="text-dark">The</b>
        <b class="dark-side">Customer</b>
        <b>First</b>
      </div>
      <p class="body-text">
        This means two things: the first is that the web is a place of constant
        change, where trends, styles, and technologies become outdated. Many
        companies are willing to sell a website that never changes, but if you
        are subscribed to any of our web-service programs, we'll make sure your
        website never looks outdated and make minor changes whenever you want at
        no extra charge. The second part of our Customer First Policy means that
        we talk to you every step of the way in designing both websites and
        online strategies. And if somehow you don't like what we've made for
        you, we'll fix it for free.
      </p>
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
  @media (max-width: 1020px) {
    order: 1;
    padding: 0;
  }
}
</style>