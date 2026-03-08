
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const plugins = [
  Autoplay({
    delay: 2000, 
  })
]

const insoul = [
  { id: 1, src: '/imagenes/Diseño/Mesa1.jpg', alt: '' },
  { id: 2, src: '/imagenes/Diseño/Mesa2.jpg', alt: '' },
  { id: 3, src: '/imagenes/Diseño/Mesa3.jpg', alt: '' },
  { id: 4, src: '/imagenes/Diseño/Mesa4.jpg', alt: '' },
  { id: 5, src: '/imagenes/Diseño/Mesa5.jpg', alt: '' },
  { id: 6, src: '/imagenes/Diseño/Mesa6.jpg', alt: '' },
  { id: 7, src: '/imagenes/Diseño/Mesa7.jpg', alt: '' },
 
]
const kaoka = [
  { id: 1, src: '/imagenes/Diseño/Kaoka1.png', alt: '' },
  { id: 2, src: '/imagenes/Diseño/Kaoka3.png', alt: '' },
  { id: 3, src: '/imagenes/Diseño/Kaoka4.png', alt: '' },
  { id: 4, src: '/imagenes/Diseño/Kaoka5.png', alt: '' },
  { id: 5, src: '/imagenes/Diseño/Kaoka6.png', alt: '' },
  { id: 6, src: '/imagenes/Diseño/Kaoka7.png', alt: '' },
  
 
]
</script>


<template>
  <main class="w-full flex flex-col min-h-screen">
    
    <nav class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
      <button 
        @click="$router.push('/')" 
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md transition-colors flex items-center gap-2"
      >
        <span>&larr;</span> Volver a Home
      </button>
    </nav>

    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
     
      <h1 class="relative z-20 text-5xl md:text-7xl font-bold text-black transition-all text-center px-4">
        DISEÑO 
      </h1>
    </section>

 <section class="relative flex-1 w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-12 bg-[rgb(214,209,241)] transition-colors duration-500 group cursor-pointer gap-8 md:gap-12">
  
  <div class="w-full md:w-1/3 flex justify-start">
    <h2 class="relative z-20 text-5xl md:text-6xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
      Diseño de producto
    </h2>
  </div>
  
  <div class="w-full md:w-1/3 flex justify-center items-center relative z-30">
    <img 
      src="/imagenes/Diseño/Insoul.png"  
      alt="Imagen Insoul" 
      class="w-[120%] max-w-none h-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-105 -my-20 md:-my-32 relative z-30"
    />
  </div>

  <div class="w-full md:w-1/3 flex md:justify-end justify-center relative z-20">
    <div class="w-full max-w-sm  p-3">
      <Carousel :plugins="plugins" :opts="{ loop: true }" class="relative w-full">
        <CarouselContent>
          <CarouselItem v-for="photo in insoul" :key="photo.id">
            <div class="p-1">
              <img 
                :src="photo.src" 
                :alt="photo.alt" 
                class="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>

</section>

  <section class="relative flex-1 w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-12 bg-[rgb(253,236,201)] transition-colors duration-500 group cursor-pointer gap-8 md:gap-12">
  
  <div class="w-full md:w-1/3 flex justify-start">
    <h2 class="relative z-20 text-5xl md:text-6xl font-bold text-yellow-950 transition-transform duration-500 group-hover:translate-x-4">
      Branding
    </h2>
  </div>
  
  <div class="w-full md:w-1/3 flex justify-center items-center relative z-30">
    <img 
      src="/imagenes/Diseño/Kaoka2.png"  
      alt="Imagen central" 
      class="w-[120%] max-w-none h-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-105 -my-20 md:-my-32 relative z-30"
    />
  </div>

  <div class="w-full md:w-1/3 flex md:justify-end justify-center relative z-20">
    <div class="w-full max-w-sm rounded-2xl p-3">
      <Carousel :plugins="plugins" :opts="{ loop: true }" class="relative w-full">
        <CarouselContent>
          <CarouselItem v-for="photo in kaoka" :key="photo.id">
            <div class="p-1">
              <img 
                :src="photo.src" 
                :alt="photo.alt" 
                class="w-full h-64 object-cover shadow-md rounded-xl"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>

</section>
<section class="relative flex-1 w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-12 overflow-hidden bg-[rgb(227,178,192)] transition-colors duration-500 group cursor-pointer gap-8 md:gap-12">
  
  <div class="w-full md:w-1/3 flex justify-start">
    <h2 class="relative z-20 text-5xl md:text-6xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
      Diseño gráfico
    </h2>
  </div>
  
  <div class="w-full md:w-1/3 flex justify-center items-center relative z-20">
    <img 
      src="/imagenes/Diseño/Lujuria.jpg"  
      alt="" 
      class="w-full max-w-xs h-auto object-cover  shadow-lg transition-transform duration-500 hover:scale-105"
    />
  </div>

  <div class="w-full md:w-1/3 flex md:justify-end justify-center relative z-20">
     <img 
      src="/imagenes/Diseño/Geometria.jpg"  
      alt="" 
      class="w-full max-w-xs h-auto object-cover  shadow-lg transition-transform duration-500 hover:scale-105"
    />
  </div>
   <div class="w-full md:w-1/3 flex md:justify-end justify-center relative z-20">
     <img 
      src="/imagenes/Diseño/Textura.jpg"  
      alt="" 
      class="w-full max-w-xs h-auto object-cover shadow-lg transition-transform duration-500 hover:scale-105"
    />
  </div>

</section>
   </main>
</template>



<style scoped>

</style>