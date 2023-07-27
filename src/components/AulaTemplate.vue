<template>
  <div class="white" style="padding-bottom: 80px">
    <BannerAula :titulo="titulo" :numero="numero" />

    <v-container class="container px-5">
      <Breadcumbs />
      <slot></slot>
    </v-container>
  </div>
</template>

<script>
import BannerAula from "@/components/BannerAula.vue";
import Breadcumbs from "@/components/Breadcumbs.vue";

export default {
  components: { BannerAula, Breadcumbs },

  props: ["titulo", "numero"],

  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
}
</style>
