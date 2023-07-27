<template>
  <v-dialog v-model="$store.state.welcomeBack" max-width="500">
    <v-card class="pa-9 rounded-lg">
      <v-card-text class="text-center d-flex flex-column" style="gap: 40px">
        <div>
          <h3 class="mb-2 primary--text">Olá,</h3>
          <h3 class="primary--text">Seja bem vindo de volta!</h3>
        </div>

        <div>
          <p>Clique em continuar para seguir seus estudos.</p>
        </div>

        <NavButton
          name="Continuar"
          color="primary"
          @button-click="$store.commit('toggleWelcomeBack')"
        ></NavButton>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import NavButton from "@/components/NavButton.vue";

export default {
  components: {
    NavButton,
  },

  data() {
    return {
      dialog: false,
    };
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
