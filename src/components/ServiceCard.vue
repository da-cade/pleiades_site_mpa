<template>
  <router-link
    :to="{ name: 'service', params: { instance: service.routeName } }"
    class="cardBorder hover:shadow-lg hover:-translate-y-2 duration-300 ease-out"
  >
    <div
      class="card-holder bg-white"
      :class="[direction == 'left' ? 'desktop-row' : 'desktop-row-reverse']"
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

.cardBorder {
  display: block;

  background: white;
  position: relative;
  border-radius: 25px;
}

.card-holder {
  flex-direction: row;
  @media (min-width: 1280px) {
    flex-direction: column;
  }
}

.desktop-row {
  @media (max-width: 1280px) {
    flex-direction: row;
  }
}

.desktop-row-reverse {
  @media (max-width: 1280px) {
    flex-direction: row-reverse;
  }
}

.text-wrapper {
  padding: 1em;
  @media (max-width: 480px) {
    padding: 0;
  }
  @media (min-width: 1280px) {
    order: 2;
  }
}

.img-wrapper {
  display: flex;
  flex-grow: 1;
  // max-width: 60%;
  align-items: center;
  @media (min-width: 1280px) {
    order: 1;
  }
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
</style>