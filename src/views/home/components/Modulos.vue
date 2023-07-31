<template>
  <div class="mt-10" style="padding-bottom: 80px">
    <v-container style="max-width: 828px">
      <v-row>
        <v-col cols="12">
          <h4 class="font-weight-bold text-h4 text-center primary--text">
            Módulos
          </h4>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div
            class="container-modulo white"
            v-for="modulo in modulos"
            :key="modulo.numero"
            @click="$router.push(`/${modulo.items[0].link}`)"
          >
            <div class="numero-modulo primary white--text">
              {{ modulo.numero }}
            </div>

            <div class="titulo-modulo textColor--text">{{ modulo.titulo }}</div>

            <div
              v-if="$store.state.progresso_modulo_1.atividade"
              class="progresso-modulo success"
            ></div>

            <div
              v-if="!$store.state.progresso_modulo_1.atividade"
              class="progresso-modulo disabled"
            ></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
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

  computed: {
    modulo_01_completo() {
      const completed = this.$store.state.progresso_modulo_1.atividade && this.$store.state.progresso_modulo_1.video
      return completed
    }
  },
};
</script>

<style scoped>
.container-modulo {
  display: flex;
  align-items: center;
  min-height: 54px;
  height: auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  margin: 20px 0;
  user-select: none;
  cursor: pointer;
  transition: transform 200ms ease;
}

.container-modulo:hover {
  transform: scale(1.025);
}
.numero-modulo {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  min-height: 54px;
  height: auto;
  text-align: center;
  border-radius: 8px 0 0 8px;
  align-self: stretch;
}

.titulo-modulo {
  margin-left: 32px;
  margin-right: 10px;
  flex: 1;
  padding: 8px 0;
  font-size: 18px;
}

.progresso-modulo {
  min-height: 54px;
  height: auto;
  width: 7px;
  border-radius: 0 8px 8px 0;
  align-self: stretch;
}

@media (max-width: 600px) {
  .titulo-modulo {
    margin-left: 20px;
    flex: 1;
    padding: 8px 0;
  }
}
</style>
