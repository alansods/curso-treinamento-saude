<template>
  <div class="mt-10" style="padding-bottom: 80px" ref="slideHere">
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
            <div class="numero-modulo primary white--text text-h6">
              {{ modulo.numero }}
            </div>

            <div class="titulo-modulo textColor--text text-body-1">
              {{ modulo.titulo }}
            </div>

            <div
              :class="
                $store.state[`progresso_modulos.modulo_${modulo.numero}`] ? 'progresso-modulo success' : 'progresso-modulo disabled'"
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
  props: {
    slideFunction: Function,
  },

  data() {
    return {
      modulos: modulos,
    };
  },

  computed: {

  },

  methods: {
    goto() {
      let element = this.$refs["slideHere"];
      let top = element.offsetTop - 30;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
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
