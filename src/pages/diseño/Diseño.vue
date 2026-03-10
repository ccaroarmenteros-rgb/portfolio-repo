
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const pluginsInsoul = [
  Autoplay({
    delay: 2000, 
  })
]

const pluginsKaoka = [
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
      
        <h1 class="schoolbell-regular relative z-20 text-5xl md:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex items-center justify-center gap-6">
            <span>DISEÑO</span>
            
            <img 
              src="/imagenes/Home/BotónDiseño.png"
              alt="Ilustración" 
              class="h-35 md:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" 
            />
        </h1>
      
      
    </section>

    <div class="w-full bg-[rgb(154,106,123)] py-2 overflow-hidden border-b border-t border-gray-100 shadow-sm flex items-center">
         <p class="schoolbell-regular whitespace-nowrap text-white text-xl font-bold animate-marquee-lr">
      Trabajos destacados ♡ Descubre mis diseños ♡ Todo tipo de soportes
        </p>
 
    </div>

 <section class="relative flex-1 w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-12 bg-[rgb(214,209,241)] transition-colors duration-500 group cursor-pointer gap-8 md:gap-12">
  
  <div class="w-full md:w-1/3 flex justify-start">
    <h2 class=" climate-crisis relative z-20 text-4xl md:text-5xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
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
  <div class="w-full max-w-sm rounded-2xl p-3 bg-[rgb(242,236,248)]">
    <Carousel :plugins="pluginsInsoul" :opts="{ loop: true }" class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="photo in insoul" :key="photo.id">
          <div class="p-1">
            <img 
              :src="photo.src" 
              :alt="photo.alt" 
              class="w-full h-64 object-contain rounded-xl"
            /> </div>
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
    <h2 class=" modak-regular relative z-20 text-6xl md:text-7xl font-bold text-yellow-950 transition-transform duration-500 group-hover:translate-x-4">
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
  <div class="w-full max-w-sm rounded-2xl p-3  bg-amber-50">
    <Carousel :plugins="pluginsKaoka" :opts="{ loop: true }" class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="photo in kaoka" :key="photo.id">
          <div class="p-1">
            <img 
              :src="photo.src" 
              :alt="photo.alt" 
              class="w-full h-64 object-contain rounded-xl"
            /> </div>
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
    <h2 class=" ultra-regular relative z-20 text-5xl md:text-6xl font-bold text-white transition-transform duration-500 group-hover:translate-x-4">
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
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@1979&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');
.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

.animate-marquee-lr {
  display: inline-block;
  animation: scroll-left-to-right 35s linear infinite; 
}
.modak-regular {
  font-family: "Modak", system-ui;
  font-weight: 400;
  font-style: normal;
}

.climate-crisis {
  font-family: "Climate Crisis", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "YEAR" 1979;
}


.ultra-regular {
  font-family: "Ultra", serif;
  font-weight: 400;
  font-style: normal;
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