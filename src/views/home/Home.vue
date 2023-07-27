<template>
  <div class="home background">
    <BgVideo />
    <Modulos />
  </div>
</template>

<script>
import BgVideo from "./components/BgVideo.vue";
import Modulos from "./components/Modulos.vue";

export default {
  name: "Home",
  components: { BgVideo, Modulos },
};
</script>

<style scoped>

</style>
