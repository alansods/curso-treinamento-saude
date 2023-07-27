import Vue from "vue";
import Vuex from "vuex";

import Modulos from "@/data/modulos.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modulos: Modulos,
    menuDrawer: false,
    welcomeBack: false,
    progress: {
      modulo_1: 0,
      modulo_2: 0,
      modulo_3: 0,
      modulo_4: 0,
      modulo_5: 0,
      modulo_6: 0,
      modulo_7: 0,
      modulo_8: 0,
      modulo_9: 0,
    }
  },
  mutations: {
    togglemenuDrawer(state) {
      state.menuDrawer = !state.menuDrawer;
    },

    toggleWelcomeBack(state) {
      state.welcomeBack = !state.welcomeBack;
    },

    initialiseStore() {
      console.log('teste')
    }
  },
  actions: {},
  modules: {},
});
