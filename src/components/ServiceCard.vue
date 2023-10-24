<template>
  <router-link
    :to="{ name: 'service', params: { instance: service.routeName } }"
    class="cardBorder"
  >
    <div
      class="card-holder"
      :class="[direction == 'left' ? 'flex-row' : 'flex-row-reverse']"
    >
      <div class="text-wrapper">
        <h2 class="text-black text-4xl mb-3">
          {{ service.name }}
        </h2>
        <p class="text-black">
          {{ service.shortDescription }}
        </p>
      </div>

      <div class="img-wrapper">
        <img
          loading="lazy"
          class="image-icon d-none d-lg-flex"
          :id="service.image.split('/').pop()"
          :src="service.image"
          :alt="service.imageAlt"
        />
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
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
// @keyframes animatedgradient {
//   0% {
//     background-position: 0% 0%;
//   }
//   100% {
//     background-position: -150% 0;
//   }
// }

// .cardBorder {
//   display: block;
//   --borderWidth: 5px;
//   background: white;
//   position: relative;
//   border-radius: 25px;
// }

// .cardBorder::after {
//   content: "";
//   position: absolute;

//   border-radius: 25px;
//   z-index: -1;
//   background-size: 300% 300%;
//   background-position: 0 0;
//   background: none;
// }

// .cardBorder:hover::after {
//   top: calc(-1 * var(--borderWidth));
//   left: calc(-1 * var(--borderWidth));
//   height: calc(100% + var(--borderWidth) * 2);
//   width: calc(100% + var(--borderWidth) * 2);
//   background: linear-gradient(
//     90deg,
//     #e7484f,
//     #e7484f 16.65%,
//     #f68b1d 16.65%,
//     #f68b1d 33.3%,
//     #fced00 33.3%,
//     #fced00 49.95%,
//     #009e4f 49.95%,
//     #009e4f 66.6%,
//     #00aac3 66.6%,
//     #00aac3 83.25%,
//     #732982 83.25%,
//     #732982 100%,
//     #e7484f 100%
//   );
//   // background-position: 0% 0%;
//   animation: animatedgradient 5s linear 0s infinite;
// }

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
  max-width: 60%;
  align-items: center;
}

.img-wrapper-order-2 {
  order: 2;
}

.card-holder {
  padding: 2em;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
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