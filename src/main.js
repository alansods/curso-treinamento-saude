import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

new Vue({
  router,
  store,
  vuetify,
  mounted() {
    AOS.init()
  },
  render: (h) => h(App),
}).$mount("#app");
