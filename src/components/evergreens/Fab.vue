<template>
  <a
    class="rounded-full h-20 w-20 bg-orange-200 fixed bottom-2 right-2 z-50 flex justify-center items-center hover:cursor-pointer hover:scale-105 ease-in-out duration-300"
  >
    <ChatPageIcon class="h-full w-full p-4" />
  </a>
</template>


<script>
import ChatPageIcon from "./icons/ChatPageIcon.vue";

export default {
  components: {
    ChatPageIcon,
  },
  props: {
    fabFunction: {
      type: Function,
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