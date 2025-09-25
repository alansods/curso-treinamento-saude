<template>
  <v-app class="app">
    <WelcomeBackDialog />
    <CongratulationsDialog />
    <NavBar @font-size-changed="updateFontSize" />
    <MenuDrawer />

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
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
import CongratulationsDialog from "@/components/CongratulationsDialog.vue";

import { SCORM } from "pipwerks-scorm-api-wrapper";

export default {
  name: "App",

  components: {
    NavBar,
    FooterLogo,
    MenuDrawer,
    WelcomeBackDialog,
    CongratulationsDialog
  },

  data: () => ({
    isTabClosed: false,
  }),

  methods: {
    updateFontSize(fontSize) {
      document.documentElement.style.fontSize = fontSize + "px";
    },

    handleBeforeUnload(event) {
      // This method will be called when the user leaves the page or closes the tab
      this.isTabClosed = true;

      // Optionally, you can show a confirmation dialog to the user
      event.preventDefault();
      event.returnValue = "";
    },

    // Método para salvar progresso automaticamente
    saveProgress() {
      try {
        console.log("Salvando progresso automaticamente...");
        SCORM.set("cmi.score.raw", this.$store.state.progresso_modulos.LMS_Progress);
        SCORM.set("cmi.completion_status", this.$store.state.progresso_modulos.completion_status);
        SCORM.set("cmi.suspend_data", JSON.stringify(this.$store.state.progresso_modulos));
        SCORM.set("cmi.progress_measure", this.$store.state.progresso_modulos.LMS_Progress / 100);
        SCORM.set("cmi.success_status", this.$store.state.progresso_modulos.completion_status === "completed" ? "passed" : "unknown");
        SCORM.save();
        console.log("Progresso salvo com sucesso");
      } catch (error) {
        console.error("Erro ao salvar progresso:", error);
      }
    },
  },

  mounted() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    
    // Garantir que o conteúdo seja sempre exibido após o mount
    this.$nextTick(() => {
      // Forçar re-render se necessário
      if (this.$route.name === undefined || this.$route.name === null) {
        this.$router.push({ name: "Home" });
      }
      
      // Verificar se o router-view está renderizando corretamente
      const routerView = document.querySelector('.v-main router-view');
      if (!routerView || routerView.children.length === 0) {
        console.log('Router view vazio, forçando navegação para Home');
        this.$router.push({ name: "Home" });
      }
    });
  },

  created() {
    try {
      const suspendData = SCORM.get("cmi.suspend_data");
      if (suspendData && suspendData !== "null" && suspendData !== "") {
        const data = JSON.parse(suspendData);
        console.log(`created - tem data: ${JSON.stringify(data)}`);
        this.$store.state.progresso_modulos = data;
      } else {
        console.log("NAO TEM DATA - inicializando progresso");
        // Inicializar com dados padrão se não houver dados salvos
        this.$store.state.progresso_modulos = {
          modulo_01: false,
          modulo_02: false,
          modulo_03: false,
          modulo_04: false,
          modulo_05: false,
          modulo_06: false,
          modulo_07: false,
          modulo_08: false,
          modulo_09: false,
          studentName: "",
          LMS_Progress: 0,
          completion_status: "incomplete",
        };
      }
    } catch (error) {
      console.error("Erro ao carregar dados SCORM:", error);
      // Inicializar com dados padrão em caso de erro
      this.$store.state.progresso_modulos = {
        modulo_01: false,
        modulo_02: false,
        modulo_03: false,
        modulo_04: false,
        modulo_05: false,
        modulo_06: false,
        modulo_07: false,
        modulo_08: false,
        modulo_09: false,
        studentName: "",
        LMS_Progress: 0,
        completion_status: "incomplete",
      };
    }
    
    // Garantir que a rota inicial seja carregada corretamente
    this.$nextTick(() => {
      if (this.$route.name === undefined || this.$route.name === null) {
        this.$router.push({ name: "Home" });
      }
    });
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },

  beforeCreate() {
    const lastRouteName = localStorage.getItem("last_Page_Treinamento_Saude");
    console.log(lastRouteName);

    if (lastRouteName != "Home") {
      this.$store.commit("TOGGLE_WELCOME_BACK");
    }
  },

  watch: {
    isTabClosed(newValue) {
      if (newValue) {
        console.log("CLOSING...");

        // Usar API SCORM 2004
        SCORM.set("cmi.score.raw", this.$store.state.progresso_modulos.LMS_Progress);
        SCORM.set("cmi.completion_status", this.$store.state.progresso_modulos.completion_status);
        SCORM.set("cmi.suspend_data", JSON.stringify(this.$store.state.progresso_modulos));
        
        // Adicionar informações de progresso
        SCORM.set("cmi.progress_measure", this.$store.state.progresso_modulos.LMS_Progress / 100);
        SCORM.set("cmi.success_status", this.$store.state.progresso_modulos.completion_status === "completed" ? "passed" : "unknown");

        SCORM.save();
        SCORM.quit();
      }
    },

    '$store.state.progresso_modulos.LMS_Progress'(newValue) {
      // Salvar progresso automaticamente sempre que mudar
      this.saveProgress();
      
      // Usar tolerância para conclusão (≥95% em vez de =100%)
      if(newValue >= 95) {
        console.log("COMPLETOU - Progresso:", newValue);
        this.$store.state.showCongratulations = true;
        this.$store.state.progresso_modulos.completion_status = "completed";
        
        // Usar API SCORM 2004
        SCORM.set("cmi.completion_status", "completed");
        SCORM.set("cmi.success_status", "passed");
        SCORM.set("cmi.progress_measure", 1.0);
        SCORM.save();
      }
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
  background: #eee;
}

input[type="radio"] {
  transform: scale(1.5);
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
