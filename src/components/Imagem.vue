<template>
  <div class="mb-5" :class="left ? 'text-left' : 'text-center'">
    <div class="pa-0 ma-0 elevation-0">
      <v-skeleton-loader
        v-show="loading"
        class="pa-0 ma-0"
        :height="200"
        type="image"
      />
      <img
        v-show="!loading"
        :src="require(`../assets/${src}`)"
        @load="handleImageLoad"
        class="rounded-lg"
      />
    </div>
    <SmallText v-if="!loading">{{ legenda }}</SmallText>
    <SmallText v-if="!loading">Fonte: {{ fonte }}</SmallText>
  </div>
</template>

<script>
import SmallText from "@/components/SmallText.vue";

export default {
  props: ["src", "fonte", "legenda", "left"],

  components: {
    SmallText,
  },

  data() {
    return {
      loading: true,
    };
  },
  methods: {
    handleImageLoad() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
