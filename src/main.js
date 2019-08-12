import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as slider } from "stencil-jeep-slider/loader";

import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.ignoredElements = [/jeep-\w*/];

Vue.use(Ionic);
slider(window);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
