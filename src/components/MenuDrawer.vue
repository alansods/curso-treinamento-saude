<template>
  <v-navigation-drawer
    class="container"
    v-model="$store.state.showMenuDrawer"
    fixed
    temporary
    :width="$vuetify.breakpoint.smAndUp ? '40%' : '100%'"
  >
    <div class="d-flex align-center justify-space-between pa-4">
      <div class="primary--text text-h4 font-weight-bold">Sumário</div>

      <v-btn icon @click="$store.commit('toggleshowMenuDrawer')">
        <v-icon size="25">mdi-close</v-icon>
      </v-btn>
    </div>

    <v-list>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-list-item @click="$router.push('/')" v-on="on">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Página Inicial</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <span>Página Inicial</span>
      </v-tooltip>

      <v-list-group
        v-for="modulo in $store.state.modulos"
        :key="modulo.numero"
        prepend-icon="mdi-bookshelf"
      >
        <template v-slot:activator>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-list-item-content>
                <v-list-item-title v-on="on">
                  <strong class="text--body-2">{{ modulo.numero }}. </strong>
                  {{ modulo.titulo }}</v-list-item-title
                >
              </v-list-item-content>
            </template>
            <span>{{ modulo.titulo }}</span>
          </v-tooltip>
        </template>

        <v-list-item v-for="item in modulo.items" :key="item.titulo">
          <v-list-item-content
            class="btn-topico"
            @click="$router.push(`/${item.link}`)"
          >
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-list-item-title v-if="item.numero" v-on="on">
                  Tópico {{ item.numero }} - {{ item.titulo }}
                </v-list-item-title>
                <v-list-item-title v-else v-on="on">
                  {{ item.titulo }}
                </v-list-item-title>
              </template>
              <span v-if="item.numero"
                >Tópico {{ item.numero }} - {{ item.titulo }}</span
              >
              <span v-else>{{ item.titulo }}</span>
            </v-tooltip>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-btn block class="mt-5" @click="$router.push('/meu-progresso')">
      Meu Progresso
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.btn-topico {
  cursor: pointer;
  padding-left: 36px;
}

@media (max-width: 600px) {
  .btn-topico {
    padding-left: 4px;
  }
}

.btn-topico:hover {
  background: rgba(0, 0, 0, 0.03);
}
</style>
