<template>
  <v-app class="app">
    <WelcomeBackDialog />
    <NavBar @font-size-changed="updateFontSize" />
    <MenuDrawer />

    <v-main>
      <transition name="fade" mode="out-in">
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

  methods: {
    updateFontSize(fontSize) {
      document.documentElement.style.fontSize = fontSize + "px";
    },
  },

  beforeCreate() {
    //this.$store.commit("CARREGAR_PROGRESSO");

    const lastRouteName = localStorage.getItem("last_Page_Treinamento_Saude");
    console.log(lastRouteName);

    if (lastRouteName != "Home") {
      this.$store.commit("TOGGLE_WELCOME_BACK");
    }
  },
};
</script>

<style lang="scss">
body {
  font-size: 18px;
}

.v-application--wrap {
  background: #f2f2f2;
}

#app {
  min-height: 100vh;
  max-width: 100vw;

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

.label-radio-input {
  border-radius: 4px;
  padding: 8px 10px;
  margin: 3px;
  transition: background 200ms ease;
  cursor: pointer;
}

.label-radio-input:hover {
  background:  #eee;
}

input[type="radio"] {
  transform: scale(1.5)
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  padding: 10px 28px !important;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 12px !important;
}

/* EXPANSION-PANEL */
.v-expansion-panel--active > .v-expansion-panel-header {
  font-weight: bold;
  color: #ffffff;
  background: #1565ac;
  margin-bottom: 20px;
}

.v-expansion-panel--active
  > .v-expansion-panel-header--active
  .v-expansion-panel-header__icon:not(
    .v-expansion-panel-header__icon--disable-rotate
  )
  .v-icon {
  color: #ffffff !important;
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

.fade-enter-active,
.fade-leave-active {
  transition: 400ms ease all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
  margin: 30px 0;
}

.cursor-pointer {
  cursor: pointer;
}

.animated-box {
  animation: shake 1.5s ease-in infinite;
}

@keyframes shake {
  0% {
    transform: translateX(0px);
  }
  15% {
    transform: translateX(3px);
  }
  30% {
    transform: translateX(0px);
  }
  45% {
    transform: translateX(3px);
  }
  60% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
