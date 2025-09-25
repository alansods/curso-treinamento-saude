<template>
  <div class="background-container" :class="{ dark: $vuetify.theme.dark }">
    <div
      class="text-center d-flex flex-column justify-space-around"
      style="color: white; height: 100%"
    >
      <div>
        <div class="mb-3">
        <h4 class="font-weight-light text-h6 text-sm-h5">Treinamento para Líderes</h4>

        <h3 class="font-weight-bold text-h5 text-sm-h4">
          Impacto dos Custos de Saúde <br />
          e Segurança para sua Empresa
        </h3>
      </div>

      <div class="youtube-container">
        <youtube
          video-id="vn1f68rPSKE"
          class="mt-8 elevation-10"
          style="border: solid 3px white"
          fitParent
        />
      </div>
      </div>

      <v-icon size="60" color="white" class="go-down" @click="goDown">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goDown(){
      this.$emit("onGoDown")
    }
  }
};
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100vw;
  height: calc(100vh - 64px);
  padding: 30px 10px 10px 10px;
  margin: 0 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url("../../../assets/bg-light.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.dark {
  background: url("../../../assets/bg-dark.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.youtube-container {
  margin: 0 auto;
}

.go-down {
  cursor: pointer;
  width: 60px;
  margin: 0 auto;
  animation: bounce 2s ease infinite;
  margin-top: 5px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-3px);
  }
}

@media (max-width: 600px) {
  .background-container {
    height: calc(100vh - 56px);
  }

  .youtube-container {
    width: 330px !important;
  }
}

@media (max-width: 1600px) {
  .youtube-container {
    width: 600px;
  }
}

@media (min-width: 1600px) {
  .youtube-container {
    width: 820px;
  }
}
</style>
