<template>
  <div :class="left ? 'text-left' : 'text-center'">
    <div class="pa-0 ma-0 elevation-0 mb-1">
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
        class="rounded-lg my-5"
      />
    </div>
    <small v-if="!loading">{{ legenda }}</small>
    <small v-if="!loading">Fonte: {{ fonte }}</small>
  </div>
</template>

<script>
export default {
  props: ["src", "fonte", "legenda", "left"],
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
