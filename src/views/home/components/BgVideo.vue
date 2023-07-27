<template>
  <div class="background" :class="{'dark': $vuetify.theme.dark}">
    <div class="text-center" style="color: white;">
      <h4 class="font-weight-light text-sm-h5">Treinamento para Líderes</h4>

      <h3 class="font-weight-bold text-sm-h4">
        Impacto dos Custos de Saúde <br />
        e Segurança para sua Empresa
      </h3>

      <div class="youtube-container">
        <youtube
          video-id="BTBPdA3FjrA"
          class="mt-8 elevation-10"
          style="border: solid 3px white"
          fitParent
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 64px);
  padding: 0 10px;
  margin: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("../../../assets/bg-light.png");
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

@media (max-width: 600px) {
  .background {
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
