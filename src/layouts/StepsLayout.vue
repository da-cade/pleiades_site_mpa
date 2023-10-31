<template>
  <!-- <div class="contentColumn relative w-screen flex flex-col"> -->
  <!-- <div class="background-image"></div> -->

  <!-- <Step /> -->
  <div class="contentColumn bg-gray-300 w-screen p-8 flex flex-col gap-40">
    <div class="headerContainer rounded-e-3xl sticky w-3/5 z-30 bg-white">
      <h2 class="text-5xl text-black me-3">How It Works</h2>
    </div>

    <div class="stepsRow sticky flex w-full h-full gap-12">
      <div class="details">
        <div class="detailsCard">
          <h1>Howdy</h1>
          <p>
            Here's come descriptive information and a lot of it, boy does it go
            on and on and on and on and on and on and on and on
          </p>
        </div>
      </div>
      <div class="steps flex justify-center items-center">
        <div class="punchOut">
          <h1 class="text-9xl raleway font-extrabold">1</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.contentColumn {
  // background: transparent;
  // background: rgb(107 114 128);
}

.headerContainer {
  top: 2rem;
  padding: 0.5rem;
  height: 60px;
  isolation: isolate;
  display: flex;
  justify-content: flex-end;
}

.contentColumn {
  mix-blend-mode: lighten;
}

.stepsRow {
  display: flex;
  height: 90vh;
  top: calc(10%);
  mix-blend-mode: luminosity;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  // background: navy;
  width: 60%;
  mix-blend-mode: lighten;
}

.detailsCard {
  background: rgb(209 213 219);
  padding: 3rem;
  display: grid;
  gap: 4rem;
}

.steps {
  width: 40%;
}

.punchOut {
  color: white;
  mix-blend-mode: lighten;

  min-width: 20rem;
  min-height: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 100%;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    padding: 2rem;
    position: absolute;
    font-size: 2.5rem;
  }
}

// .background-image {
//   position: absolute;
//   top: 0;
//   left: 0;

//   width: 100%;
//   height: 100%;
//   background-color: white;
//   // background-image: url("../src/assets/img/spacebg.svg");
//   background-size: cover;
//   z-index: -1;
// }
</style>