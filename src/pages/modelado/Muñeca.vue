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


const proceso = [
  { id: 1, src: '/imagenes/Modelado/Boceto.jpg', alt: '' },
  { id: 2, src: '/imagenes/Modelado/Plastilina.jpg', alt: '' },
  { id: 3, src: '/imagenes/Modelado/Alambre.jpg', alt: '' },
  { id: 4, src: '/imagenes/Modelado/Plata.jpg', alt: '' },
  { id: 5, src: '/imagenes/Modelado/Modelado.jpg', alt: '' },
  { id: 6, src: '/imagenes/Modelado/Horneado.jpg', alt: '' },
  { id: 7, src: '/imagenes/Modelado/Lijar.jpg', alt: '' },
  { id: 8, src: '/imagenes/Modelado/Pintar.jpg', alt: '' },
  { id: 9, src: '/imagenes/Modelado/Barnizar.jpg', alt: '' },
 
]
const resultado = [
  { id: 1, src: '/imagenes/Modelado/Resultado1.jpg', alt: '' },
  { id: 2, src: '/imagenes/Modelado/Resultado2.jpg', alt: '' },
  { id: 3, src: '/imagenes/Modelado/Resultado3.jpg', alt: '' },
  { id: 4, src: '/imagenes/Modelado/Resultado4.jpg', alt: '' },
  { id: 5, src: '/imagenes/Modelado/Resultado5.jpg', alt: '' },
  { id: 6, src: '/imagenes/Modelado/Doméstica.jpg', alt: '' },
]
</script>


<template>
<main>
    
    <section class="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
      
      <img 
        src="/imagenes/Modelado/Banner.jpg" 
        alt="Fondo de la sección modelado" 
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <h1 class="relative z-20 text-5xl md:text-7xl font-bold text-white transition-all text-center px-4">
        FIGURA SO YOUN LEE
      </h1>
      
    </section>

</main>

<main>

  <section class="w-full bg-[rgb(203,147,179)] text-white">
  
  <div class="max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
    
    <div class="w-full md:w-1/2 text-left">
      <p class="text-lg md:text-4xl opacity-80 mb-4 font-bold">
        INTRODUCCIÓN
      </p>
      <p class="text-lg md:text-2xl opacity-80">
        Para la realización de esta figura nos basamos en el arte de artista coreana So Youn Lee y en las figuras contemporáneas de Lladró.
        La obra de So Youn Lee se caracteriza por el uso de colores pasteles variados y las formas redondeadas, aspectos que tendríamos en cuenta para su creación. 
      </p>
    </div>

   <div class="w-full md:w-1/3">
  <a href="https://www.instagram.com/soyounlee/" target="_blank" class="block hover:opacity-90 transition-opacity">
    <img 
      src="/imagenes/Modelado/Introducción.jpg" 
      alt="Arte So Youn Lee" 
      class="w-full h-auto rounded-xl shadow-lg object-cover"
    >
  </a>
</div>

  </div>
  
</section>
  </main>

  <main>
    <section>
      <div class="max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        
        <div class="w-full md:w-1/2 border-7 border-[#a9d9c3] rounded-2xl p-3">
          <Carousel :plugins="plugins" :opts="{ loop: true }" class="relative w-full max-w-sm mx-auto">
            <CarouselContent>
              <CarouselItem v-for="photo in proceso" :key="photo.id">
                <div class="p-1">
                  <img 
                    :src="photo.src" 
                    :alt="photo.alt" 
                    class="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div class="w-full md:w-1/2 text-right">
          <p class="text-lg md:text-4xl opacity-80 mb-4 font-bold text-left">
            PROCESO
          </p>
          <p class="text-lg md:text-2xl opacity-80 text-left">
            Tras realizar tanto bocetos dibujados como con plastilina, comenzamos a formar la estructura base con alambre y papel de plata. 
            Una vez formada, ya solo se trataba de ir añadiendo "Sculpey" y modelarlo con las herramientas adecuadas para lograr el acabado que buscábamos.
            Para finalizar, horneamos la figura, la lijamos, pintamos y barnizamos para crear un efecto brillante. 
          </p>
        </div>

      </div>
    </section>
  </main>


  <main>
  <section class="relative flex justify-center items-center py-12 w-full px-4 overflow-hidden min-h-150">

    <img 
      src="/imagenes/Modelado/Elemento1.png" 
      alt="Fondo decorativo izquierdo" 
      class="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1/1 max-w-200 object-contain opacity-60 -z-10 pointer-events-none"
    />

    <img 
      src="/imagenes/Modelado/Elemento2.png" 
      alt="Fondo decorativo derecho" 
      class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/1 max-w-200 object-contain opacity-60 -z-10 pointer-events-none"
    />
    <Carousel
      orientation="vertical"
      class="relative w-full max-w-2xl mx-auto mb-12 "
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="-mt-1 h-125">
        
        <CarouselItem v-for="imagen in resultado" :key="imagen.id" class="pt-1 md:basis-1/2">
          <div class="p-1 h-full">
            
            <img 
              :src="imagen.src" 
              :alt="imagen.alt" 
              class="w-full h-full object-cover rounded-xl shadow-md border"
            />

          </div>
        </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  

  </section>
  </main>
</template>

<style scoped>

</style>