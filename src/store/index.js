import Vue from "vue";
import Vuex from "vuex";

import Modulos from "@/data/modulos.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modulos: Modulos,
    menuDrawer: false,
    welcomeBack: false,
    progresso_modulo_1: {
      atividade: false,
      video: false,
    },
  },
  mutations: {
    togglemenuDrawer(state) {
      state.menuDrawer = !state.menuDrawer;
    },

    toggleWelcomeBack(state) {
      state.welcomeBack = !state.welcomeBack;
    },

    initialiseStore() {
      console.log("teste");
    },

    SALVAR_PROGRESSO(state) {
      localStorage.setItem("progresso_treinamento_saude", JSON.stringify(state));
    },

    CARREGAR_PROGRESSO(state, payload) {
      state = payload
    },
  },
  actions: {},
  modules: {},
});
