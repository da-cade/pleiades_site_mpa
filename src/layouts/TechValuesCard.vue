<template>
  <div id="whyus" class="block xl:flex justify-center">
    <div class="wrapper p-4 md:p-8 bg-off-white flex gap-4">
      <TechColumn :maxHeight="maxHeight" />
      <ValuesColumn ref="valuesColumn" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import TechColumn from "./TechColumn.vue";
import ValuesColumn from "./ValuesColumn.vue";
export default {
  components: {
    TechColumn,
    ValuesColumn,
  },
  setup() {
    const valuesColumn = ref();
    const maxHeight = ref();
    onMounted(() => {
      const el = valuesColumn.value.$el;
      const rect = el.getBoundingClientRect();
      maxHeight.value = rect.bottom - rect.top - 16;
      console.log(maxHeight.value);
    });
    return {
      valuesColumn,
      maxHeight,
    };
  },
};
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
  max-height: clamp(100%, 150vh, 200vh);
  display: flex;
  justify-content: center;
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