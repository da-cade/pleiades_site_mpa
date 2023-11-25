<template>
  <div
    class="pitch-column rounded-3xl bg-white flex flex-col content-between items-center p-4 py-8 md:p-8 gap-4"
  >
    <ValueItem
      class=""
      v-for="value in values"
      :key="value"
      :instance="value"
    />
  </div>
</template>


<script>
import { computed } from "vue";
import ValueItem from "../components/ValueItem.vue";
import * as template from "../templates/main.json";
export default {
  components: { ValueItem },
  setup() {
    return {
      values: computed(() => template.details.values),
    };
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