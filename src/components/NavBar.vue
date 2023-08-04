<template>
  <v-app-bar color="white" app>
    <div class="d-flex gap-5 align-center" style="gap: 10px">
      <v-img
        v-if="!$vuetify.theme.dark"
        :src="require('../assets/logo-sesi-light.svg')"
        height="30"
        width="90"
        @click="$router.push('/')"
        style="cursor: pointer"
      />

      <v-img
        v-if="$vuetify.theme.dark"
        :src="require('../assets/logo-sesi-dark.svg')"
        height="30"
        width="90"
        @click="$router.push('/')"
        style="cursor: pointer"
      />

      <span
        class="font-weight-bold primary--text text-body-1 text-uppercase"
        v-if="$vuetify.breakpoint.smAndUp && $route.path !== '/'"
        >Treinamento para Líderes: Impacto dos Custos de Saúde e Segurança para
        sua Empresa</span
      >
    </div>

    <v-spacer />

    <AccessibilityButtons></AccessibilityButtons>

    <span class="grey--text mx-3">|</span>

    <div>
      <!-- <v-btn icon @click="$router.push('/')">
        <v-icon>mdi-home</v-icon>
      </v-btn> -->

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon @click="toggleDarkMode" v-on="on">
            <v-icon>{{
              isDarkMode === "#fff"
                ? "mdi-white-balance-sunny"
                : "mdi-weather-night"
            }}</v-icon>
          </v-btn>
        </template>
        <span>Modo claro/escuro</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon @click="toggleMenu" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <span>Menu</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script>
import AccessibilityButtons from "@/components/AccessibilityButtons.vue";

export default {
  components: {
    AccessibilityButtons,
  },

  data() {
    return {};
  },

  computed: {
    isDarkMode() {
      return this.$vuetify.theme.dark ? "#000" : "#fff";
    },
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "dark_theme",
        JSON.stringify(this.$vuetify.theme.dark)
      );
    },

    toggleMenu() {
      this.$store.commit("togglemenuDrawer");
    },
  },

  created() {
    const isDarkModeLocal = localStorage.getItem("dark_theme");
    if (isDarkModeLocal) {
      this.$vuetify.theme.dark = JSON.parse(isDarkModeLocal);
    }
  },
};
</script>

<style scoped></style>
