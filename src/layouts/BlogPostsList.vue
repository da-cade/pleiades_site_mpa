<template>
  <div class="content-width md:my-12 xl:my-24">
    <h1 class="text-6 raleway my-4 lg:my-8 2xl:my-16 font-extrabold text-white">
      The {{ $route.name }}
    </h1>
    <div class="postsMenu flex flex-col gap-4 bg-off-white p-4 rounded-3xl">
      <div
        class="rounded-3xl p-4 pb-8 md:p-24 flex flex-col gap-4 w-full bg-white alata"
      >
        <h2 class="text-4">
          {{ blog.headline }}
        </h2>
        <p class="text-1">
          {{ blog.description }}
        </p>
        <RainbowButton
          :to="'Contact'"
          :displayMessage="'Have a Specific Question?'"
        />
      </div>
      <div class="serviceCardWrapper grid xl:grid-cols-2 gap-4">
        <BlogPostCard
          class=""
          v-for="(post, i) in posts"
          :key="post.name"
          :post="post"
          :direction="i % 2 == 0 ? 'left' : 'right'"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import * as template from "../templates/main.json";
import RainbowButton from "../components/evergreens/RainbowButton.vue";
import BlogPostCard from "../components/BlogPostCard.vue";
export default {
  components: {
    RainbowButton,
    BlogPostCard,
  },
  setup() {
    onMounted(() => {
      console.log("PostsList");
    });
    return {
      blog: computed(() => template.blog),
      posts: computed(() => template.blog.posts),
    };
  },
};
</script>


<style lang="scss" scoped>
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
</style>