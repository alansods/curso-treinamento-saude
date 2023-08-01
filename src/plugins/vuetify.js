import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
//import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  }
});

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1565AC',
        secondary: '#b0bec5',
        disabled: '#C6C6C6',
        accent: '#8c9eff',
        error: '#D84848',
        success: '#09e2b3',
        background: "#F2F2F2",
        textColor: '#333333',
        objetivos_gerais: '#645CBB',
        voce_sabia: '#f07e27',
        atencao: '#D84848',
        video_aula: '#8c9eff',
        recapitulando: '#1ac0c6',
      },
      dark: {
        primary: '#fff',
        secondary: '#fff',
        disabled: '#C6C6C6',
        accent: '#8c9eff',
        error: '#D84848',
        success: '#fff',
        background: "#111",
        white: '#010101',
        textColor: '#fff',
        objetivos_gerais: '#fff',
        apresentacao: '#fff',
        voce_sabia: '#fff',
        atencao: '#fff',
        video_aula: '#fff',
        recapitulando: '#fff',
      },
    },
  },
});
