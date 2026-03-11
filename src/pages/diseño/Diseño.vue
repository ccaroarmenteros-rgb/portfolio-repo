
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import BarraAnimada from '@/components/BarraAnimada.vue'
import NavBar from '@/components/NavBar.vue'

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

</script>


<template>
  <main class="w-full flex flex-col min-h-screen">
    
    <NavBar ruta="/" />

    <section class="relative w-full h-48 md:h-64 lg:h-96 flex items-center justify-center overflow-hidden">
      <h1 class="schoolbell-regular relative z-20 text-4xl md:text-6xl lg:text-7xl font-bold text-[rgb(154,106,123)] transition-all px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <span>DISEÑO</span>
        <img 
          src="/imagenes/Home/BotónDiseño.png"
          alt="" 
          class="h-20 md:h-32 lg:h-52 w-auto object-contain hover:opacity-90 transition-all cursor-pointer" 
        />
      </h1>
    </section>

    <BarraAnimada texto="Trabajos destacados ♡ Descubre mis diseños ♡ Todo tipo de soportes" />
    

    <section class="relative flex-1 w-full flex flex-row flex-wrap lg:flex-nowrap justify-between items-center px-4 md:px-12 lg:px-24 py-8 lg:py-12 bg-[rgb(214,209,241)] transition-colors duration-500 group cursor-pointer gap-y-8 lg:gap-12 overflow-hidden">
      
      <div class="w-full lg:w-1/3 flex justify-center lg:justify-start text-center lg:text-left">
        <h2 class="climate-crisis relative z-20 text-3xl md:text-5xl lg:text-5xl font-bold text-white transition-transform duration-500 lg:group-hover:translate-x-4">
          Diseño de producto
        </h2>
      </div>
      
      <div class="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center relative z-30 px-2 lg:px-0">
        <img 
          src="/imagenes/Diseño/Insoul.png"  
          alt="" 
          class="w-full md:w-[90%] lg:w-[120%] max-w-sm md:max-w-md lg:max-w-none h-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-105 my-4 lg:-my-32 relative z-30"
        />
      </div>

      <div class="w-full md:w-1/2 lg:w-1/3 flex justify-center lg:justify-end relative z-20 px-2 lg:px-0">
        <div class="w-full max-w-sm md:max-w-xs lg:max-w-sm rounded-2xl p-3 bg-[rgb(242,236,248)]">
          <Carousel :plugins="pluginsInsoul" :opts="{ loop: true }" class="relative w-full">
            <CarouselContent>
              <CarouselItem v-for="photo in insoul" :key="photo.id" class="basis-full">
                <div class="p-1">
                  <img 
                    :src="photo.src" 
                    :alt="photo.alt" 
                    class="w-full h-48 md:h-56 lg:h-64 object-contain rounded-xl"
                  /> 
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="hidden md:flex" />
            <CarouselNext class="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>

    <section class="relative flex-1 w-full flex flex-row flex-wrap lg:flex-nowrap justify-between items-center px-4 md:px-12 lg:px-24 py-8 lg:py-12 bg-[rgb(253,236,201)] transition-colors duration-500 group cursor-pointer gap-y-8 lg:gap-12 overflow-hidden">
      
      <div class="w-full lg:w-1/3 flex justify-center lg:justify-start text-center lg:text-left">
        <h2 class="modak-regular relative z-20 text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-950 transition-transform duration-500 lg:group-hover:translate-x-4">
          Branding
        </h2>
      </div>
      
      <div class="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center relative z-30 px-2 lg:px-0">
        <img 
          src="/imagenes/Diseño/Kaoka2.png"  
          alt="" 
          class="w-full md:w-[90%] lg:w-[120%] max-w-sm md:max-w-md lg:max-w-none h-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-105 my-4 lg:-my-32 relative z-30"
        />
      </div>

      <div class="w-full md:w-1/2 lg:w-1/3 flex justify-center lg:justify-end relative z-20 px-2 lg:px-0">
        <div class="w-full max-w-sm md:max-w-xs lg:max-w-sm rounded-2xl p-3 bg-amber-50">
          <Carousel :plugins="pluginsKaoka" :opts="{ loop: true }" class="relative w-full">
            <CarouselContent>
              <CarouselItem v-for="photo in kaoka" :key="photo.id" class="basis-full">
                <div class="p-1">
                  <img 
                    :src="photo.src" 
                    :alt="photo.alt" 
                    class="w-full h-48 md:h-56 lg:h-64 object-contain rounded-xl"
                  /> 
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="hidden md:flex" />
            <CarouselNext class="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>

    <section class="relative flex-1 w-full flex flex-row flex-wrap lg:flex-nowrap justify-between items-center px-4 md:px-12 lg:px-24 py-12 overflow-hidden bg-[rgb(227,178,192)] transition-colors duration-500 group cursor-pointer gap-6 lg:gap-12">
      
      <div class="w-full lg:w-1/4 flex justify-center lg:justify-start text-center lg:text-left mb-4 lg:mb-0">
        <h2 class="ultra-regular relative z-20 text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-transform duration-500 lg:group-hover:translate-x-4">
          Diseño gráfico
        </h2>
      </div>
      
      <div class="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        <div class="flex justify-center items-center">
          <img 
            src="/imagenes/Diseño/Lujuria.jpg"  
            alt="" 
            class="w-full max-w-xs md:max-w-50 lg:max-w-xs h-auto object-cover shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div class="flex justify-center items-center">
          <img 
            src="/imagenes/Diseño/Geometria.jpg"  
            alt="" 
            class="w-full max-w-xs md:max-w-50 lg:max-w-xs h-auto object-cover shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div class="flex justify-center items-center">
          <img 
            src="/imagenes/Diseño/Textura.jpg"  
            alt="" 
            class="w-full max-w-xs md:max-w-50 lg:max-w-xs h-auto object-cover shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
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


</style>