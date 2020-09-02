import Vue from "vue";
import Router from "vue-router";

//Importando vistas que utilizaremos
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

//Indicando a vue que utilice el Router
Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            //Ruta que no servira para mostrar una pagina cuando no exista la ruta que el usuario ingrese
            path: '/coin/:id',
            name: 'coin-detail',
            component: CoinDetail
        },
        {
            //Ruta que no servira para mostrar una pagina cuando no exista la ruta que el usuario ingrese
            path: '*',
            name: 'error',
            component: Error
        }
    ]
});