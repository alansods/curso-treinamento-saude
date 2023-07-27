<template>
    <v-card class="elevation-0 rounded-lg px-2 py-3" :class="tipoToClass[tipo]">
      <v-card-text class="box-icon" :class="{'text-center': !$vuetify.breakpoint.smAndUp}">
        <v-row align="center" justify="center">

          <v-col cols="12" sm="1" class="d-flex justify-center">
            <v-icon size="60" color="white">{{ tipoIcon }}</v-icon>

          </v-col>

          <v-col cols="12" sm="11" class="white--text d-flex justify-center flex-column">
            <h5 class="text-h5 font-weight-bold mb-2">{{ tipoTitle }}</h5>

            <slot></slot>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>
</template>

<script>
const tipoToIconAndTitle = {
  objetivos_gerais: {
    icon: 'mdi-bullseye-arrow',
    title: 'Objetivos Gerais',
  },
  apresentacao: {
    icon: 'mdi-human-male-board',
    title: 'Apresentação',
  },
  voce_sabia: {
    icon: 'mdi-help-circle-outline',
    title: 'Você Sabia?',
  },
  atencao: {
    icon: 'mdi-alert-octagon-outline',
    title: 'Atenção!',
  },
  video_aula: {
    icon: 'mdi-video',
    title: 'Vídeoaula',
  },
  recapitulando: {
    icon: 'mdi-check-decagram',
    title: 'Recapitulando',
  },
};

export default {
  props: [ "tipo" ],

  components: {},

  computed: {
    tipoToClass() {
      return {
        objetivos_gerais: "objetivos_gerais",
        apresentacao: "apresentacao",
        voce_sabia: "voce_sabia",
        atencao: "atencao",
        recapitulando: "recapitulando",
        video_aula: "video_aula",
      };
    },
    tipoTitle() {
      return tipoToIconAndTitle[this.tipo]?.title;
    },
    tipoIcon() {
      return tipoToIconAndTitle[this.tipo]?.icon;
    },
  },
};
</script>

<style scoped>
.box-icon {
  font-size: 1rem
}

</style>
