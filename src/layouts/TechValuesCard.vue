<template>
  <div id="whyus" class="block xl:flex justify-center">
    <div class="wrapper p-3 md:p-8 bg-off-white flex gap-4">
      <TechColumn />
      <ValuesColumn />
    </div>
  </div>
</template>

<script setup>
import TechColumn from "./TechColumn.vue";
import ValuesColumn from "./ValuesColumn.vue";
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

.wrapper {
  border-radius: 25px;
  height: 100%;
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