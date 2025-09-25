<template>
  <div>
    <v-card class="rounded-lg px-2 py-1" :color="tipo === 'apresentacao' ? 'apresentacao' : tipo === 'objetivos_gerais' ? 'objetivos_gerais' : tipo === 'voce_sabia' ? 'voce_sabia' : tipo === 'atencao' ? 'atencao' : '' ">
      <v-card-text :class="{'text-center': !$vuetify.breakpoint.smAndUp}">
        <v-row align="center" justify="center">

          <v-col cols="12" sm="1" class="d-flex justify-center">
            <v-icon size="60" color="white" v-if="tipo === 'objetivos_gerais'">mdi-bullseye-arrow</v-icon>
            <v-icon size="60" color="white" v-if="tipo === 'apresentacao'">mdi-human-male-board</v-icon>
            <v-icon size="60" color="white" v-if="tipo === 'voce_sabia'">mdi-help-circle-outline</v-icon>
            <v-icon size="60" color="white" v-if="tipo === 'atencao'">mdi-alert-octagon-outline</v-icon>
          </v-col>

          <v-col cols="12" sm="11" class="white--text d-flex justify-center flex-column">
            <h5 class="text-h5 font-weight-bold mb-2" v-if="tipo === 'objetivos_gerais'">Objetivos Gerais</h5>
            <h5 class="text-h5 font-weight-bold mb-2" v-if="tipo === 'apresentacao'">Apresentação</h5>
            <h5 class="text-h5 font-weight-bold mb-2" v-if="tipo === 'voce_sabia'">Você Sabia?</h5>
            <h5 class="text-h5 font-weight-bold mb-2" v-if="tipo === 'atencao'">Atenção!</h5>
            <slot></slot>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: [ "tipo" ],

  components: {},
};
</script>

<style></style>
