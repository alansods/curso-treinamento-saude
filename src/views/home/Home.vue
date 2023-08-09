<template>
  <div class="home background">
    <BgVideo @onGoDown="activateFunction" />
    <Modulos ref="filhoRef" />
  </div>
</template>

<script>
import BgVideo from "./components/BgVideo.vue";
import Modulos from "./components/Modulos.vue";

export default {
  name: "Home",
  components: { BgVideo, Modulos },

  methods: {
    activateFunction() {
      this.$refs.filhoRef.goto();
    },
  },
};
</script>

<style scoped></style>
