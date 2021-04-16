import Vue from "vue";
import App from "./App.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
