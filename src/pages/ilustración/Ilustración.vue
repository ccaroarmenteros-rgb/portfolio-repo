

<script setup lang="ts">

const galeria = [
  { 
    id: 1, 
    originalSrc: '/imagenes/Ilustración/Verde.jpg', 
    hoverSrc: '/imagenes/Ilustración/Detrás.jpg',
    alt: 'Ilustración Verde',
    clases: 'md:col-span-2 order-1' 
  },
  { 
    id: 2, 
    originalSrc: '/imagenes/Ilustración/Rosa.jpg', 
    hoverSrc: '/imagenes/Ilustración/DetrásRosa.jpg',
    alt: 'Ilustración Rosa',
    clases: 'md:col-span-2 order-2' 
  },
  { 
    id: 3, 
    originalSrc: '/imagenes/Ilustración/Ilustracion.jpg', 
    hoverSrc: '',
    alt: 'Ilustración Principal',
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
    alt: 'Chapa',
    clases: 'md:col-span-3 order-7',
    objectFitClase: '' 
  },
  { 
    id: 8, 
    originalSrc: '/imagenes/Ilustración/Jazz.PNG', 
    hoverSrc: '',
    alt: 'Chapa',
    clases: 'md:col-span-3 order-8',
    objectFitClase: '' 
  },
  { 
    id: 9, 
    originalSrc: '/imagenes/Ilustración/Texturas.jpg', 
    hoverSrc: '',
    alt: 'Chapa',
    clases: 'md:col-span-3 order-9 w-2/3 mx-auto ',
    objectFitClase: 'object-contain' 
  },
  { 
  id: 10, 
  originalSrc: '/imagenes/Ilustración/Flor.jpg', 
  hoverSrc: '',
  alt: 'Flor',
  clases: 'md:col-span-3 order-10 w-2/3 mx-auto', 
  objectFitClase: '' 
},
{ 
  id: 11, 
  originalSrc: '/imagenes/Ilustración/Pastel.jpg', 
  hoverSrc: '',
  alt: '',
  clases: 'md:col-span-3 order-11 w-2/3 mx-auto',
  objectFitClase: '' 
},
  { 
    id: 12, 
    originalSrc: '/imagenes/Ilustración/Volcán.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-3 w-2/3 order-12 mx-auto',
    objectFitClase: 'object-cover' 
  },
  { 
    id: 13, 
    originalSrc: '/imagenes/Ilustración/Gato.jpg', 
    hoverSrc: '',
    alt: '',
    clases: 'md:col-span-3  order-13',
    objectFitClase: 'object-contain' 
  },
  
  
]
import { HouseHeart } from 'lucide-vue-next'
</script>

<template>
  <main class="w-full flex flex-col min-h-screen">
     <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
    <button 
      @click="$router.push('/')" 
      class="p-2 bg-[rgb(154,106,123)] hover:bg-[rgb(183,132,151)] text-white rounded-md transition-colors flex items-center justify-center"
      aria-label="Volver a Home"
    >
      <HouseHeart class="w-6 h-6" />
    </button>
  </nav>

    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
  <img src="/imagenes/Home/Claro.jpg" alt="" class="absolute inset-0 w-full h-full object-cover z-0" />
  <h1 class="schoolbell-regular relative z-20 text-5xl md:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex items-center justify-center gap-6">
    <span>ILUSTRACIÓN</span>
    <img src="/imagenes/Home/BotónIlustración.png" alt="Ilustración" class="h-35 md:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" />
  </h1>
</section>

<div class="w-full bg-white py-2 overflow-hidden border-b border-t border-gray-100 shadow-sm flex items-center">
  <p class="schoolbell-regular whitespace-nowrap text-[rgb(154,106,123)] text-xl font-bold animate-marquee-lr">
 Bienvenido a mi galeria ♡ Descubre mis ilustraciones ♡ Arte tradicionar y digital 
  </p>
 
</div>

   <section class="w-full max-w-7xl mx-auto px-6 py-16">
 <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 auto-rows-auto">
    
    <div 
      v-for="imagen in galeria" 
      :key="imagen.id" 
      :class="['relative overflow-hidden  cursor-pointer group ', imagen.clases]"
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

@keyframes scroll-left-to-right {
  0% {
    transform: translateX(-100%); 
  }
  100% {
    transform: translateX(100vw); 
  }
}
</style>