<template>
  <a
    v-if="to.startsWith('http')"
    :href="to"
    target="blank"
    class="rainbow rainbow-5"
    >{{ displayMessage }}</a
  >

  <router-link
    v-else-if="to.startsWith('#')"
    :to="{ hash: to }"
    class="rainbow rainbow-5"
    >{{ displayMessage }}</router-link
  >
  <router-link
    v-else
    :to="{ name: to, params: params }"
    class="rainbow rainbow-5"
    >{{ displayMessage }}</router-link
  >
</template>


<script>
export default {
  props: {
    displayMessage: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
    params: {
      type: Object,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
@keyframes slidebg {
  from {
    background-position: 0;
  }
  to {
    background-position: var(--w);
  }
}

.rainbow {
  --w: 10rem;
  width: var(--w);
  display: flex;
  justify-content: center;
  min-width: fit-content;
  background-color: #343a40;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 8px 16px;
}

.rainbow-5:hover {
  color: black;
  background-image: linear-gradient(
    to right,
    #e7484f,
    #e7484f 16.65%,
    #f68b1d 16.65%,
    #f68b1d 33.3%,
    #fced00 33.3%,
    #fced00 49.95%,
    #009e4f 49.95%,
    #009e4f 66.6%,
    #00aac3 66.6%,
    #00aac3 83.25%,
    #732982 83.25%,
    #732982 100%,
    #e7484f 100%
  );
  animation: slidebg 2.5s linear infinite;
}
</style>