
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import Juego from "@/pages/juego/Juego.vue";
import Llaveros from "@/pages/llaveros/Llaveros.vue";
import Modelado from "@/pages/modelado/Modelado.vue";
import Informacion from "@/pages/informacion/Informacion.vue";




export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
       path: '/juego',
       name: 'juego',
       component:Juego
    },
     {
       path: '/llaveros',
       name: 'llaveros',
       component:Llaveros
    },
     {
       path: '/modelado',
       name: 'modelado',
       component: Modelado
    },
    {
       path: '/informacion',
       name: 'informacion',
       component: Informacion
    }
    
  ]
})