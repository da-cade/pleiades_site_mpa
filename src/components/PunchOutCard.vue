<template>
  <div class="instanceWrapper">
    <div class="cardWrapper p-5 bg-transparent flex gap-4">
      <PunchOut :title="instance.title" class="circleSize" />
      <div class="bodyWrapper flex flex-col justify-center mb-4 p-2">
        <div class="bodyContent rounded-3xl bg-gray-300 p-4">
          <h4 class="text-2 mb-3">{{ instance.subtitle }}</h4>
          <p class="text-1">{{ instance.body }}</p>
        </div>
      </div>
    </div>
    <div class="boundaryLine bg-black h-2 w-full px-4 rounded-3xl"></div>
  </div>
</template>


<script>
import PunchOut from "./evergreens/PunchOut.vue";
export default {
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  components: {
    PunchOut,
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
$breakpoints: (
  "min-width: 2000px",
  "max-width: 1999px",
  "max-width: 1536px",
  "max-width: 1280px",
  "max-width: 1024px",
  "max-width: 768px",
  "max-width: 640px"
);

@each $b in $breakpoints {
  $i: index($breakpoints, $b);
  $circleDi: #{20 - $i}rem;
  @media (#{$b}) {
    .circleSize {
      min-height: $circleDi;
      min-width: $circleDi;
      max-height: $circleDi;
      max-width: $circleDi;
    }
  }
}
</style>