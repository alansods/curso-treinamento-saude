<template>
  <div class="background" :class="{'dark': $vuetify.theme.dark}">
    <v-container
      v-if="$vuetify.breakpoint.smAndUp"
      fill-height
      class="d-flex justify-space-between align-center"
      style="color: white; max-width: 1200px"
    >
      <h4 class="font-weight-bold text-h3">{{ titulo }}</h4>
      <div class="text-center">
        <h6 class="font-weight-light text-h6">Módulo</h6>
        <h2 class="font-weight-bold text-h2">{{ numero }}</h2>
      </div>
    </v-container>

    <v-container
      v-else
      fill-height
      class="d-flex flex-column justify-center align-center white--text"
    >
      <h4 class="font-weight-bold text-h4">{{ titulo }}</h4>
      <h6 class="font-weight-light text-h6 text-center">Módulo {{ numero }}</h6>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["titulo", "numero"],
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 180px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("../assets/bg-light.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-bottom: 30px;
}

.dark {
  background: url("../assets/bg-dark.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

@media (min-width: 1600px) {
  .background {
    height: 220px;
  }
}
</style>
