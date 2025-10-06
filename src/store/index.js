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

    ADICIONAR_SCORE(state) {
      const pontuacao = 100 / 9; // 9 módulos no total
      if (state.LMS_Progress < 100) {
        state.LMS_Progress += pontuacao;
        // Garantir que não ultrapasse 100%
        if (state.LMS_Progress > 100) {
          state.LMS_Progress = 100;
        }
      }
    },

    CHECK_COMPLETION(state) {
      const modulosConcluidos = [
        state.progresso_modulos.modulo_01,
        state.progresso_modulos.modulo_02,
        state.progresso_modulos.modulo_03,
        state.progresso_modulos.modulo_04,
        state.progresso_modulos.modulo_05,
        state.progresso_modulos.modulo_06,
        state.progresso_modulos.modulo_07,
        state.progresso_modulos.modulo_08,
        state.progresso_modulos.modulo_09,
      ];

      const todosConcluidos = modulosConcluidos.every(
        (modulo) => modulo === true
      );

      if (
        todosConcluidos &&
        state.progresso_modulos.completion_status !== "completed"
      ) {
        state.progresso_modulos.completion_status = "completed";
        state.LMS_Progress = 100;
        console.log(
          "🎉 TODOS OS MÓDULOS CONCLUÍDOS! SCORM marcado como completo."
        );
      }
    },
  },
  actions: {
    checkCompletion({ commit }) {
      commit("CHECK_COMPLETION");
    },
  },

  getters: {},
  modules: {},
});
