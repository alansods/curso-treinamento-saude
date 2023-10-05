<template>
  <div
    class="mb-5"
    :class="left ? 'text-left' : 'text-center'"
    data-aos="zoom-in"
    data-aos-easing="ease"
    data-aos-duration="500"
    data-aos-once="true"
  >
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
    <SmallText v-if="!loading && legenda">{{ legenda }}</SmallText>
    <SmallText v-if="!loading && fonte">Fonte: {{ fonte }}</SmallText>
  </div>
</template>

<script>
import SmallText from "@/components/SmallText.vue";

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    fonte: {
      type: String,
      required: false,
    },
    legenda: {
      type: String,
      required: false,
    },
    left: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

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
