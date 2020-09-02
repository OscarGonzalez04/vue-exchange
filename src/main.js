import Vue from "vue";
import App from "./App.vue";
//Importando tailwind
import "@/assets/css/tailwind.css";

//Importando filtros
import { dollarFilter, percentFilter } from "@/filters"
//Registrando filtros: Nesecita un nombre y la funcion que se ejecutara cuando se llame
Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);

//Importando componentes de terceros
import { VueSpinners } from '@saeris/vue-spinners'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)

//Importando el router
import Router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router: Router, //Indicando a vue que utilizaremo el router que hemos creado
  render: h => h(App)
}).$mount("#app");
