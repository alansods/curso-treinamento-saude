import Vue from "vue";
import Vuex from "vuex";

import Modulos from "@/data/modulos.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modulos: Modulos,
    menuDrawer: false,
    welcomeBack: false,
    showGlossario: false,

    progresso_modulo_01: {
      porcentagem: 0,
      items: {
        video_01: false,
        video_02: false,
        video_03: false,
        atividade: false,
        apresentacao: false,
        topico_01: false,
        topico_02: false,
        topico_03: false,
        topico_04: false,
        topico_05: false,
      },
    },
  },
  mutations: {
    togglemenuDrawer(state) {
      state.menuDrawer = !state.menuDrawer;
    },

    toggleWelcomeBack(state) {
      state.welcomeBack = !state.welcomeBack;
    },

    TOGGLE_GLOSSARIO(state) {
      state.showGlossario = !state.showGlossario
    },

    initialiseStore() {
      console.log("teste");
    },

    SALVAR_PROGRESSO(state) {
      localStorage.setItem(
        "progresso_treinamento_saudeV2",
        JSON.stringify(state)
      );
    },

    CARREGAR_PROGRESSO(state) {
      const progressoLocalStorage = localStorage.getItem("progresso_treinamento_saudeV2")

      if (progressoLocalStorage) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(
            state,
            JSON.parse(localStorage.getItem("progresso_treinamento_saudeV2"))
          )
        );
      }
    },
  },
  actions: {},
  modules: {},
});
