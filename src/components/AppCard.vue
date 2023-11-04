<template>
  <router-link
    :to="{ name: 'app', params: { instance: app.routeParams } }"
    class="appCard rounded-3xl"
  >
    <div
      class="text-wrapper bg-black p-3 flex justify-center w-full rounded-t-3xl"
    >
      <h2 class="text-white text-4xl">
        {{ app.name }}
      </h2>
    </div>

    <div class="img-wrapper">
      <img
        loading="lazy"
        class="rounded-b-3xl"
        :id="app.coverImg.split('/').pop()"
        :src="app.coverImg"
        :alt="app.coverImgAlt"
      />
      <div class="img-overlay p-3 text-white">
        <p class="">
          {{ app.shortDescription }}
        </p>
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    app: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.appCard {
}

.appCard:hover,
.appCard:focus {
  .img-overlay {
    inset: 0;
    opacity: 1;
  }
}

.text-wrapper {
  // background: #6b92b2;
}

.img-wrapper {
  position: relative;
  z-index: 1;
}

.img-overlay {
  position: absolute;
  inset: 100% 0 0 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.799);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  z-index: 2;
  transition: all ease 250ms;
}
</style>