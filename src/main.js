import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as slider } from "stencil-jeep-slider/dist/loader";
import Ionic from "@ionic/vue";

Vue.use(Ionic);

Vue.config.ignoredElements = [/jeep-\w*/];

slider(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
