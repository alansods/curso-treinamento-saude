<template>
  <div class="background" :class="{ dark: $vuetify.theme.dark }">
    <v-container v-if="$vuetify.breakpoint.smAndUp" fill-height style="max-width: 1200px">
      <v-row align="center" style="color: #fff;">
        <v-col cols="12" sm="9">
          <h4 class="font-weight-bold" :class="`text-h${titleSize}`">{{ titulo }}</h4>
        </v-col>

        <v-col
          cols="12"
          sm="3"
          class="text-center d-flex flex-column align-end"
        >
          <h6 class="font-weight-light text-h6">Módulo</h6>
          <h2 class="font-weight-bold text-h2">{{ numero }}</h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else fill-height>
      <v-row style="color: #fff;">
        <v-col cols="12" class="text-center">
          <h4 class="font-weight-bold text-h5">{{ titulo }}</h4>
          <h6 class="font-weight-light text-h6 text-center">
            Módulo {{ numero }}
          </h6>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["titulo", "numero", "titleSize"],
};
</script>

<style scoped>
.background {
  width: 100%;
  height: auto;
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
  padding: 20px;
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
