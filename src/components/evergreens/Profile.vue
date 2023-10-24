<template>
  <a
    class="flex items-center p-3"
    target="blank"
    rel="nofollow"
    :href="profile.source"
  >
    <div
      class="logo-bg"
      :style="`background-image: url(${profile.image});`"
    ></div>
    <span class="text-dark fs-4">{{ profile.name }}</span>
  </a>
</template>


<script>
export default {
  props: {
    profile: {
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
.logo-bg {
  height: 70px;
  width: 70px;
  background-image: url("https://www.designrush.com/topbest/images/svg/designrush-new-logo.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>