<template>
  <div class="flex justify-center items-center" v-scrollanimation>
    <img loading="lazy" class="img-fill" :src="pathToImage" :alt="imageAlt" />
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    pathToImage: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.img-fill {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: auto;
  height: auto;
  max-height: 10em;
  max-width: 15em;
  // margin-top: 2em;
  @media (max-width: 900px) {
    max-height: 7rem;
  }
  @media (min-width: 1800px) {
  }
}

.azure {
  padding: 0.25rem;
}
</style>