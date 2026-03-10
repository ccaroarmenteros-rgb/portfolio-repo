

<script setup lang="ts">
import { useFadeIn } from '../composable/useFadeIn'
const { isVisible, elementRef } = useFadeIn()
import BarraAnimada from '@/components/BarraAnimada.vue'
import NavBar from '@/components/NavBar.vue'
typeof elementRef;

const galeria = [
  { 
    id: 1, 
    originalSrc: '/imagenes/Ilustración/Verde.jpg', 
    hoverSrc: '/imagenes/Ilustración/Detrás.jpg',
    alt: '',
    clases: 'md:col-span-2 order-1' 
  },
  { 
    id: 2, 
    originalSrc: '/imagenes/Ilustración/Rosa.jpg', 
    hoverSrc: '/imagenes/Ilustración/DetrásRosa.jpg',
    alt: '',
    clases: 'md:col-span-2 order-2' 
  },
  { 
    id: 3, 
    originalSrc: '/imagenes/Ilustración/Ilustracion.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-2 order-3' 
  },
  { 
    id: 5, 
    originalSrc: '/imagenes/Ilustración/Comic.jpg', 
    hoverSrc: '/imagenes/Ilustración/ComicColor.jpg',
    alt: '',
    clases: 'md:col-span-3 order-4 ', 
    objectFitClase: 'object-contain' 
  },
  { 
    id: 4, 
    originalSrc: '/imagenes/Ilustración/Amarillo.jpg', 
    hoverSrc: '/imagenes/Ilustración/Azul.jpg',
    alt: '',
    clases: 'md:col-span-3 order-5 ' 
  },
{ 
    id: 6, 
    originalSrc: '/imagenes/Ilustración/Mon.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-3 order-6',
    objectFitClase: 'object-contain' 
  },
  { 
    id: 7, 
    originalSrc: '/imagenes/Ilustración/Chapa.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-3 order-7',
    objectFitClase: '' 
  },
  { 
    id: 8, 
    originalSrc: '/imagenes/Ilustración/Jazz.PNG', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-3 order-8',
    objectFitClase: '' 
  },
  { 
    id: 9, 
    originalSrc: '/imagenes/Ilustración/Texturas.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-3 order-9 w-2/3 mx-auto ',
    objectFitClase: 'object-contain' 
  },
 { 
    id: 10, 
    originalSrc: '/imagenes/Ilustración/Flor.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-2 order-10', 
    objectFitClase: 'object-cover' 
  },
  { 
    id: 11, 
    originalSrc: '/imagenes/Ilustración/Pastel.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-2 order-11',
    objectFitClase: 'object-cover' 
  },
  { 
    id: 12, 
    originalSrc: '/imagenes/Ilustración/Volcán.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-2 order-12',
    objectFitClase: 'object-cover' 
  },
  { 
    id: 13, 
    originalSrc: '/imagenes/Ilustración/Gato.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-4  order-13',
    objectFitClase: 'object-contain' 
  },
  
  
]

</script>

<template>
  <main class="w-full flex flex-col min-h-screen">
    <NavBar ruta="/" />

    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
  
  <h1 class="schoolbell-regular relative z-20 text-5xl md:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex items-center justify-center gap-6">
    <span>ILUSTRACIÓN</span>
    <img src="/imagenes/Home/BotónIlustración.png" alt="Ilustración" class="h-35 md:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" />
  </h1>
</section>


<BarraAnimada texto= "Bienvenido a mi galeria ♡ Descubre mis ilustraciones ♡ Arte tradicionar y digital" /> 
  

   <section class="w-full max-w-7xl mx-auto px-6 py-16">
  
  <div 
    ref="elementRef"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 auto-rows-auto transition-all duration-1000 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
  >
    
    <div 
      v-for="imagen in galeria" 
      :key="imagen.id" 
      :class="['relative overflow-hidden cursor-pointer group', imagen.clases]"
    >
      <img 
        :src="imagen.originalSrc" 
        :alt="imagen.alt" 
        class="w-full h-full transition-transform duration-500 group-hover:scale-110"
        :class="imagen.objectFitClase ? imagen.objectFitClase : 'object-cover'"
        loading="lazy"
      />

      <img 
        v-if="imagen.hoverSrc" 
        :src="imagen.hoverSrc" 
        :alt="imagen.alt + ' - Versión Interactiva'" 
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      />
    </div>

  </div>
</section>
  </main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

.animate-marquee-lr {
  display: inline-block;
  animation: scroll-left-to-right 35s linear infinite; 
}


</style>