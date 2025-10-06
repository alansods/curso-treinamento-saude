<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="655"
      @click:outside="toggleDialog"
      @keydown.esc="toggleDialog"
    >
      <v-card class="rounded-lg">
        <v-card-title
          class="text-h5 d-flex align-center justify-space-between mb-5 pl-8 primary white--text"
        >
          <span class="font-weight-bold">Sumário</span>
          <v-btn icon @click="toggleDialog"
            ><v-icon size="28" color="white">mdi-close</v-icon></v-btn
          >
        </v-card-title>

        <v-card-text>
          <div
            class="d-flex align-center v-pointer mx-3"
            v-for="modulo in modulos"
            :key="modulo.numero"
            @click="goToAula(modulo)"
          >
            <v-icon size="20">mdi-book-open</v-icon>
            <div class="titulo-modulo" style="cursor: pointer">
              {{ modulo.titulo }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import modulos from "@/data/modulos.json";

export default {
  data() {
    return {
      modulos: modulos,
    };
  },

  methods: {
    toggleDialog() {
      this.$store.commit("toggleMenuDialog");
    },

    goToAula(modulo) {
      this.toggleDialog();
      this.$router.push(`/${modulo.link}`);
    },
  },

  computed: {
    dialog() {
      return this.$store.state.menuDialog;
    },
  },
};
</script>

<style scoped>
.titulo-modulo {
  margin: 12px 10px 12px 18px;
  font-size: 18px;
  color: 333;
}
</style>
