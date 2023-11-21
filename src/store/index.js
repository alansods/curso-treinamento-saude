import Vue from "vue";
import Vuex from "vuex";

import Modulos from "@/data/modulos.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modulos: Modulos,
    showMenuDrawer: false,
    showWelcomeBack: false,
    showCongratulations: false,
    showGlossario: false,

    progresso_modulos: {
      modulo_01: false,
      modulo_02: false,
      modulo_03: false,
      modulo_04: false,
      modulo_05: false,
      modulo_06: false,
      modulo_07: false,
      modulo_08: false,
      modulo_09: false,
      studentName: "",
      LMS_Progress: 0,
      completion_status: "",
    },
  },
  mutations: {
    TOGGLE_SHOW_MENU_DRAWER(state) {
      state.showMenuDrawer = !state.showMenuDrawer;
    },

    TOGGLE_WELCOME_BACK(state) {
      state.showWelcomeBack = !state.showWelcomeBack;
    },

    TOGGLE_CONGRATULATIONS(state) {
      state.showCongratulations = !state.showCongratulations;
    },

    TOGGLE_GLOSSARIO(state) {
      state.showGlossario = !state.showGlossario;
    },

    /* ADICIONAR_SCORE(state) {
      const pontuacao = 100/8
      if (state.LMS_Progress < 100) {
        state.LMS_Progress += pontuacao;
      }
    } */
  },
  actions: {},

  getters: {

  },
  modules: {},
});
