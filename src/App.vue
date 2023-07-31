<template>
  <v-app class="app">
    <WelcomeBackDialog />
    <NavBar />
    <MenuDrawer />

    <v-main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <FooterLogo />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterLogo from "@/components/FooterLogo.vue";
import MenuDrawer from "@/components/MenuDrawer.vue";
import WelcomeBackDialog from "@/components/WelcomeBackDialog.vue";

export default {
  name: "App",

  components: {
    NavBar,
    FooterLogo,
    MenuDrawer,
    WelcomeBackDialog,
  },

  data: () => ({
    //
  }),

  created() {
    const progresso = localStorage.getItem("progresso_treinamento_saudeV2");

    if (progresso) {
      this.$store.commit("CARREGAR_PROGRESSO");
    }
  },

  beforeCreate() {
    const lastRouteName = localStorage.getItem("last_Page_Treinamento_Saude");
    console.log(lastRouteName)

    if (lastRouteName != "Home") {
      this.$store.commit("toggleWelcomeBack");
    }
  },
};
</script>

<style lang="scss">

.v-application--wrap {
  background: #F2F2F2;
}

body, #app {
  min-height: 100vh;
  max-width: 100vw;
  font-size: 18px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 0.7rem 0 !important;
}

p:first-of-type {
  margin-top: 0 !important;
}

p:last-of-type {
  margin-bottom: 0 !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  padding: 0 28px !important
}

.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 12px !important;
}

/* EXPANSION-PANEL */
.v-expansion-panel--active > .v-expansion-panel-header {
  font-weight: bold;
  color: #ffffff;
  background: #1565AC;
  margin-bottom: 20px
}

.v-expansion-panel--active > .v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon {
  color: #ffffff !important
}

.v-application--is-ltr .v-expansion-panel-header {
  font-weight: bold;
  text-transform: uppercase;
}

/* ROUTE TRANSITION */
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

small {
  display: block;
  color: #aaa;
  font-weight: 300;
  font-size: 12px;
}

hr {
  background: #ccc;
  height: 1px;
  border: none;
  margin: 30px 0
}

.cursor-pointer {
  cursor: pointer;
}
</style>
