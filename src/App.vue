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
    CongratulationsDialog,
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

    // Método para salvar progresso automaticamente (suspend_data + progresso no LMS)
    saveProgress() {
      try {
        console.log("💾 Salvando progresso automaticamente...");

        if (this.isSCORMEnvironment()) {
          // Salvar dados de retomada
          SCORM.set(
            "cmi.suspend_data",
            JSON.stringify(this.$store.state.progresso_modulos)
          );

          // Calcular progresso percentual
          const modulosConcluidos = Object.keys(
            this.$store.state.progresso_modulos
          ).filter(
            (key) =>
              key.startsWith("modulo_") &&
              this.$store.state.progresso_modulos[key] === true
          ).length;
          const totalModulos = 9; // Total de módulos
          const progressoPercentual = Math.round(
            (modulosConcluidos / totalModulos) * 100
          );

          // Salvar progresso no LMS (SCORM 1.2)
          SCORM.set(
            "cmi.core.lesson_status",
            progressoPercentual === 100 ? "completed" : "incomplete"
          );
          SCORM.set("cmi.core.score.raw", progressoPercentual.toString());
          SCORM.set("cmi.core.score.max", "100");
          SCORM.set("cmi.core.score.min", "0");

          SCORM.save();
          console.log(`✅ Progresso salvo no SCORM: ${progressoPercentual}%`);
        } else {
          // Salvar no localStorage (desenvolvimento)
          localStorage.setItem(
            "treinamento_saude_progresso",
            JSON.stringify(this.$store.state.progresso_modulos)
          );
          console.log("✅ Progresso salvo no localStorage com sucesso");
        }
      } catch (error) {
        console.error("❌ Erro ao salvar progresso:", error);
        // Fallback para localStorage em caso de erro
        try {
          localStorage.setItem(
            "treinamento_saude_progresso",
            JSON.stringify(this.$store.state.progresso_modulos)
          );
          console.log("✅ Progresso salvo no localStorage como fallback");
        } catch (fallbackError) {
          console.error("❌ Erro no fallback:", fallbackError);
        }
      }
    },

    // Método para carregar dados do SCORM/LMS
    loadSCORMData() {
      try {
        console.log("🔄 Carregando dados do SCORM/LMS...");

        // Verificar se estamos em ambiente SCORM
        if (this.isSCORMEnvironment()) {
          // Tentar carregar dados do suspend_data
          const suspendData = SCORM.get("cmi.suspend_data");
          if (suspendData && suspendData !== "null" && suspendData !== "") {
            const data = JSON.parse(suspendData);
            console.log(`✅ Dados recuperados do LMS: ${JSON.stringify(data)}`);
            this.$store.state.progresso_modulos = data;

            // Verificar se todos os módulos foram concluídos
            this.$store.dispatch("checkCompletion");
          } else {
            console.log(
              "ℹ️ Nenhum dado encontrado no LMS - inicializando progresso"
            );
            this.initializeProgress();
          }

          // Não carregar métricas do SCORM (completion/score/progress); apenas suspend_data
        } else {
          console.log(
            "ℹ️ Ambiente de desenvolvimento - carregando dados do localStorage"
          );
          this.loadFromLocalStorage();
        }
      } catch (error) {
        console.error("❌ Erro ao carregar dados SCORM:", error);
        this.initializeProgress();
      }
    },

    // Método legado removido: não ler completion/score/progress do SCORM
    loadAdditionalSCORMData() {},

    // Método para inicializar progresso padrão
    initializeProgress() {
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
    },

    // Método para verificar se estamos em ambiente SCORM
    isSCORMEnvironment() {
      try {
        // Tentar acessar a API SCORM
        const api = SCORM.API.get();
        return api !== null && api !== undefined;
      } catch (error) {
        console.log("🔍 Não é ambiente SCORM - usando localStorage");
        return false;
      }
    },

    // Método para carregar dados do localStorage (desenvolvimento)
    loadFromLocalStorage() {
      try {
        const savedData = localStorage.getItem("treinamento_saude_progresso");
        if (savedData) {
          const data = JSON.parse(savedData);
          console.log(
            `✅ Dados recuperados do localStorage: ${JSON.stringify(data)}`
          );
          this.$store.state.progresso_modulos = data;
          this.$store.dispatch("checkCompletion");
        } else {
          console.log(
            "ℹ️ Nenhum dado encontrado no localStorage - inicializando progresso"
          );
          this.initializeProgress();
        }
      } catch (error) {
        console.error("❌ Erro ao carregar dados do localStorage:", error);
        this.initializeProgress();
      }
    },
  },

  mounted() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);

    // Garantir que o conteúdo seja sempre exibido após o mount
    this.$nextTick(() => {
      // Verificar se o router-view está renderizando corretamente
      const routerView = document.querySelector(".v-main router-view");
      if (!routerView || routerView.children.length === 0) {
        console.log("Router view vazio, forçando navegação para Home");
        // Verificar se já não está na rota Home para evitar navegação duplicada
        if (this.$route.name !== "Home") {
          this.$router.push({ name: "Home" }).catch((err) => {
            // Ignorar erro de navegação duplicada
            if (err.name !== "NavigationDuplicated") {
              console.error("Erro de navegação:", err);
            }
          });
        }
      }
    });
  },

  created() {
    this.loadSCORMData();

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

        // Salvar apenas dados de retomada (suspend_data)
        SCORM.set(
          "cmi.suspend_data",
          JSON.stringify(this.$store.state.progresso_modulos)
        );
        SCORM.save();
        SCORM.quit();
      }
    },

    "$store.state.progresso_modulos.LMS_Progress"() {
      // Salvar progresso automaticamente sempre que mudar
      this.saveProgress();

      // Verificar se todos os módulos foram concluídos (apenas estado interno)
      this.$store.dispatch("checkCompletion");
    },

    // Watcher para detectar quando um módulo é concluído
    "$store.state.progresso_modulos": {
      handler() {
        // Verificar se todos os módulos foram concluídos
        this.$store.dispatch("checkCompletion");

        // Salvar progresso automaticamente quando qualquer módulo for concluído
        this.saveProgress();

        // Log do progresso atual
        const modulosConcluidos = Object.keys(
          this.$store.state.progresso_modulos
        ).filter(
          (key) =>
            key.startsWith("modulo_") &&
            this.$store.state.progresso_modulos[key] === true
        ).length;
        console.log(`📊 Módulos concluídos: ${modulosConcluidos}/9`);
      },
      deep: true,
    },
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
