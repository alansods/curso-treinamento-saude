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

      <v-btn icon @click="$store.commit('TOGGLE_SHOW_MENU_DRAWER')">
        <v-icon size="25">mdi-close</v-icon>
      </v-btn>
    </div>

    <v-list>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <router-link to="/">
          <v-list-item :class="{ 'menu-ativo': $route.path === `/` }" v-on="on">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Página Inicial</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
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
                  {{ modulo.titulo }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            {{ modulo.titulo }}
          </v-tooltip>
        </template>

        <v-list-item
          v-for="item in modulo.items"
          :key="item.titulo"
          :class="{ 'menu-ativo': $route.path === `/${item.link}` }"
        >
          <router-link :to="`/${item.link}`">
            <v-list-item-content class="btn-topico">
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
          </router-link>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script scoped>
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

.menu-ativo {
  background-color: rgba(0, 0, 0, 0.03);
  font-weight: bold;
}

a {
  width: 100%;
  color: #333 !important;
  text-decoration: none;
}
</style>
