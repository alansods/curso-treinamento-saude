<template>
  <v-card
    class="elevation-0 rounded-lg px-2 py-3"
    :class="tipoToClass[tipo]"
    data-aos="fade-right"
    data-aos-easing="ease"
    data-aos-duration="500"
    data-aos-once="true"
  >
    <v-card-text
      class="box-icon text"
      :class="{ 'text-center': !$vuetify.breakpoint.smAndUp }"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" sm="1" class="d-flex justify-center">
          <!-- <v-icon size="60" color="white">{{ tipoIcon }}</v-icon> -->
          <lord-icon
            :src="`https://cdn.lordicon.com/${tipoIcon}.json`"
            trigger="loop"
            delay="1500"
            :colors="$vuetify.theme.dark ? 'primary:#000' : 'primary:#fff'"
            style="width: 65px; height: 65px"
          >
          </lord-icon>
        </v-col>

        <v-col
          cols="12"
          sm="11"
          class="white--text d-flex justify-center flex-column"
        >
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
    icon: "zncllhmn",
    title: "Objetivos Gerais",
  },
  voce_sabia: {
    icon: "nocvdjmh",
    title: "Você Sabia?",
  },
  atencao: {
    icon: "vacmyjrh",
    title: "Atenção!",
  },
  video_aula: {
    icon: "hmkhncjw",
    title: "Vídeoaula",
  },
  recapitulando: {
    icon: "yqzmiobz",
    title: "Recapitulando",
  },
};

export default {
  props: ["tipo"],

  data() {
    return {
      hoverIcon: false,
    };
  },

  components: {},

  computed: {
    tipoToClass() {
      return {
        objetivos_gerais: "objetivos_gerais",
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
  font-size: 1rem;
}
</style>
