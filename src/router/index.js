import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";

import modulo_01_Routes from "./modulo_01_routes";
import modulo_07_Routes from "./modulo_07_routes";

import MeuProgresso from "../views/MeuProgresso";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/meu-progresso",
    name: "Meu Progresso",
    component: MeuProgresso,
  },

  ...modulo_01_Routes,
  ...modulo_07_Routes,

];

const router = new VueRouter({
  routes,
  //mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//salvar ultima pagina visitada ao reabrir o site
router.afterEach((to) => {
  localStorage.setItem("last_Page_Treinamento_Saude", to.name);
});

let isFirstTransition = true;

router.beforeEach((to, from, next) => {

  const lastRouteName = localStorage.getItem("last_Page_Treinamento_Saude");
  const shouldRedirect = Boolean(
    to.name === "Home" && lastRouteName && isFirstTransition
  );

  if (shouldRedirect && to.name !== from.name) {
    isFirstTransition = false;
    next({ name: lastRouteName });
    console.log("pegou o localstorage");
    //this.$store.commit("toggleWelcomeBack");
  } else {
    next();
    //console.log("Navegou normal sem reabrir a aba");
  }

});

export default router;
