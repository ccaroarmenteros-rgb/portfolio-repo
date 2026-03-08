
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import Diseño from "@/pages/diseño/Diseño.vue";
import Modelado from "@/pages/modelado/Modelado.vue";
import Informacion from "@/pages/informacion/Informacion.vue";
import Muñeca from "@/pages/modelado/Muñeca.vue";
import Bici from "@/pages/modelado/Bici.vue";
import Llaveros from "@/pages/modelado/Llaveros.vue";
import Detalle from"@/pages/modelado/Detalle.vue";
import Ilustración from "@/pages/ilustración/Ilustración.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
       path: '/ilustración',
       name: 'ilustración',
       component: Ilustración
    },
     {
       path: '/diseño',
       name: 'diseño',
       component: Diseño
    },
    {
       path: '/informacion',
       name: 'informacion',
       component: Informacion
    },
    {
      path: '/modelado/:id', 
      name: 'detalle-modelado',
      component: Detalle
    },
    {
       path: '/modelado',
       name: 'modelado',
       component: Modelado,

       children: [
        {
           path: 'muneca', 
           name: 'modelado-muneca',
           component: Muñeca
         },
         {
           path: 'bici', 
           name: 'modelado-bici',
           component: Bici
         },
         {
           path: 'llaveros',
           name: 'modelado-llaveros',
           component: Llaveros
         }
       ]
    }
  ]
  
})