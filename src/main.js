import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as linechart } from "stencil-linechart/dist/loader";
import Ionic from "@ionic/vue";

Vue.use(Ionic);

Vue.config.ignoredElements = [/jeep-\w*/];

linechart(window);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
