<template>
  <div class="contentWrapper relative w-screen flex flex-col">
    <div class="headerContainer rounded-e-3xl sticky w-3/5 z-30 bg-white">
      <h2 class="text-5xl text-black me-3">How It Works</h2>
    </div>
    <div class="contentColumn">
      <div class="detailsCol">
        <div class="detailsCard">
          <img class="img" src="../assets/img/custom.png" alt="" />
          <h1>Howdy</h1>
          <p>
            Here's come descriptive information and a lot of it, boy does it go
            on and on and on and on and on and on and on and on
          </p>
        </div>
        <div class="detailsCard">
          <img class="img" src="../assets/img/custom.png" alt="" />
          <h1>Howdy</h1>
          <p>
            Here's come descriptive information and a lot of it, boy does it go
            on and on and on and on and on and on and on and on
          </p>
        </div>
        <div class="detailsCard">
          <img class="img" src="../assets/img/custom.png" alt="" />
          <h1>Howdy</h1>
          <p>
            Here's come descriptive information and a lot of it, boy does it go
            on and on and on and on and on and on and on and on
          </p>
        </div>
      </div>

      <div class="stepsCol gap-12">
        <div class="punchOut">
          <h1 class="text-9xl raleway font-extrabold">1</h1>
        </div>
        <div class="punchOut">
          <h1 class="text-9xl raleway font-extrabold">1</h1>
        </div>
        <div class="punchOut">
          <h1 class="text-9xl raleway font-extrabold">1</h1>
        </div>
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
.contentColumn {
  display: flex;
  // border: inset 20px rgb(209 213 219);
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
  // mix-blend-mode: lighten;
}

.detailsCol {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #d3dae2;
  gap: 12rem;
  padding: 4rem;
  min-height: 90vh;
  width: 60%;
}

.detailsCard {
  position: sticky;
  background: white;
  width: 100%;
  border-radius: 24px;
  padding: 4rem 8rem;
  display: grid;
  top: 10%;
  gap: 2rem;
}

.stepsCol {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 90vh;
  background: rgb(209 213 219);
  mix-blend-mode: screen;
  width: 40%;
}

.punchOut {
  color: white;
  top: 10%;
  position: sticky;
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