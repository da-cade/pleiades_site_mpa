<template>
  <div class="card-holder">
    <div class="text-wrapper">
      <b>Web </b>
      <b class="dark-side">Design</b>
      <p class="body-text">
        {{ description }}
      </p>
    </div>
    <img
      loading="lazy"
      class="image-icon d-none d-lg-flex"
      :id="image.split('/').pop()"
      :src="image"
      :alt="image.split('/').pop()"
    />
  </div>
</template>


<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    imagePosition: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>