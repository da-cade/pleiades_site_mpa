<template>
  <div
    class="card-holder"
    :class="[direction == 'left' ? 'flex-row' : 'flex-row-reverse']"
  >
    <div class="text-wrapper">
      <h2 class="text-black">
        {{ title }}
      </h2>
      <p class="text-black">
        {{ description }}
      </p>
    </div>

    <div class="img-wrapper">
      <img
        loading="lazy"
        class="image-icon d-none d-lg-flex"
        :id="image.split('/').pop()"
        :src="image"
        :alt="image.split('/').pop()"
      />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    direction: {
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
img {
  height: auto;
  max-width: 100%;
}

.text-wrapper {
  padding: 1em;
  @media (max-width: 480px) {
    padding: 0;
  }
}

.text-wrapper-order-1 {
  order: 1;
}

.img-wrapper {
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.img-wrapper-order-2 {
  order: 2;
}

.card-holder {
  padding: 2em;
  border-radius: 25px;
  backdrop-filter: blur(5px);
  display: flex;
  @media (max-width: 480px) {
    padding: 0;
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
  width: 100%;
}

// .dark-side {
//   background-color: black;
//   color: white;
//   font-size: 0.2em;
//   padding: 0.2em;
//   border-radius: 25px;
// }
</style>