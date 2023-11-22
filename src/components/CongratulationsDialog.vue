<template>
  <v-dialog v-model="$store.state.showCongratulations" max-width="500">
    <v-card class="pa-9 rounded-lg">
      <v-card-text class="text-center d-flex flex-column" style="gap: 40px">
        <div>
          <h3 class="mb-2 primary--text">Parabens!</h3>
        </div>

        <div>
          <p>
            Você concluiu o curso com nota
            <strong class="success--text"><u>{{ $store.state.progresso_modulos.LMS_Progress }}!</u></strong>
          </p>
        </div>

        <v-row dense>
          <v-col cols="12">
            <NavButton
              name="Continuar"
              color="primary"
              block
              @button-click="$store.commit('TOGGLE_CONGRATULATIONS')"
            ></NavButton>
          </v-col>

          <v-col cols="12">
            <NavButton
              name="Sair"
              color="red"
              block
              @button-click="quitLMS"
            ></NavButton>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import NavButton from "@/components/NavButton.vue";
import { SCORM } from "pipwerks-scorm-api-wrapper";

export default {
  components: {
    NavButton,
  },

  data() {
    return {};
  },

  methods: {
    quitLMS() {
      SCORM.quit();
    },
  },
};
</script>

<style scoped>
.v-dialog > .v-card > .v-card__text {
  padding: 0 !important;
}

h3 {
  font-size: 1.8rem;
}

p {
  font-size: 1.1rem;
}
</style>
