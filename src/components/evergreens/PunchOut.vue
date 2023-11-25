<template>
  <div class="punchOut">
    <h3 class="title text-3 text-center p-2 md:p-4 xl:p-8" :class="titleClass">
      {{ title }}
    </h3>
    <!-- <div class="clouds"></div>
    <div class="ring"></div>
    <div class="up"></div> -->
  </div>
</template>


<script>
export default {
  props: {
    title: { type: [String, Number], required: true },
    titleClass: { type: String },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
@use "sass:list";

.punchOut {
  color: white;
  border-radius: 100%;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    position: absolute;
  }
}

$breakpoints: (
  "min-width: 2000px",
  "max-width: 1999px",
  "max-width: 1536px",
  "max-width: 1280px",
  "max-width: 1024px"
);

@each $b in $breakpoints {
  $count: list.length($breakpoints);
  @media (#{$b}) {
    $i: index($breakpoints, $b);
    $circleDi: #{25 - $i * 2.5}rem;

    .punchOut {
      max-width: $circleDi;
      min-width: $circleDi;
      min-height: $circleDi;
      max-height: $circleDi;
    }
  }
}

@media screen and (max-width: "max-width: 768px") {
  .punchOut {
    max-width: 25rem;
    min-width: 25rem;
    min-height: 25rem;
    max-height: 25rem;
  }
}
@media screen and (max-width: "max-width: 640px") {
  .punchOut {
    max-width: 22rem;
    min-width: 22rem;
    min-height: 22rem;
    max-height: 22rem;
  }
}
</style>