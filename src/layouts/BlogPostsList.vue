<template>
  <div class="content-width md:my-12 xl:my-24">
    <h1 class="text-6 raleway mb-4 font-extrabold text-white">
      {{ $route.name }}
    </h1>
    <div class="postsMenu flex flex-col gap-4 bg-off-white p-4 rounded-3xl">
      <div
        class="rounded-3xl p-4 pb-8 md:p-24 flex flex-col gap-4 w-full bg-white alata"
      >
        <p class="text-2">
          We offer a lot of services at Pleiades, because there's a lot that
          people need.
        </p>
        <p class="text-1">
          We go above and beyond in everything that we do; that means meaningful
          results for you in anything that can be measured. We'll work with your
          budget to craft a menu of solutions that's right for both you and your
          goals, and talk to you every step of the way so that you know what's
          happening under the hood.
        </p>
        <RainbowButton :to="'Contact'" :displayMessage="'Talk to Us'" />
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
      posts: computed(() => template.blog),
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