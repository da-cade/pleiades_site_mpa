<template>
  <div class="postWrapper">
    <!-- <div class="img-wrapper"> -->
    <div
      class="bgImage"
      :id="post.coverImg.split('/').pop()"
      :style="`background-image: url(${post.coverImg})`"
      :alt="post.coverImgAlt"
    >
      <div class="postTitle">
        <h1 class="text-10 raleway font-extrabold">{{ post.title }}</h1>
      </div>
    </div>
    <!-- </div> -->

    <div
      class="bodyContent grid gap-4 lg:gap-8 2xl:gap-16 content-width bg-white"
    >
      <div
        v-for="b in post.blocks"
        :key="b.subtitle"
        class="bodyBlock grid gap-4"
      >
        <h2 class="text-4">{{ b.subtitle }}</h2>
        <p class="text-1">{{ b.body }}</p>
      </div>
      <RainbowButton
        class="text-3"
        :to="'Contact'"
        :displayMessage="`Let's Have a Chat 👋`"
      />
    </div>
  </div>
</template>


<script>
import * as template from "../templates/main.json";
import { computed } from "vue";
import { useRoute } from "vue-router";
import RainbowButton from "../components/evergreens/RainbowButton.vue";
export default {
  components: { RainbowButton },
  setup() {
    const route = useRoute();

    const post = computed(() => {
      return template.blog.posts.find((s) => s == route.params.instance);
    });
    return {
      post,
    };
  },
};
</script>


<style lang="scss" scoped>
.bgImage {
  background-color: #ffffffd9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(80vh - 100px);
}
.bodyContent {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.postTitle {
  width: fit-content;
  padding: 1rem;
  background: white;
  mix-blend-mode: screen;
  h1 {
    color: black;
  }
}
</style>