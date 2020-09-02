<template>
  <div id="app">
    <px-header :links="links"></px-header>

    <!-- Contenido que se remplara al cambiar la ruta para eso usamos: router-view -->
    <router-view
      class="container px-5 sm:px-15 py-20 flex justify-center"
    ></router-view>

  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: {
    "px-header": PxHeader
  },

  data(){
    return {
      links: [
        {
          title:'BTC',
          to: { name:'coin-detail', params: { id:'bitcoin' } }
        },
        {
          title:'ETH',
          to: { name:'coin-detail', params: { id:'ethereum' } }
        },
        {
          title:'XRP',
          to: { name:'coin-detail', params: { id:'ripple' } }
        }
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
