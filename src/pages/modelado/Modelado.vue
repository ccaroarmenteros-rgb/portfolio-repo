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

const photos = [
  { id: 1, src: '/imagenes/Modelado/Boceto.jpg', alt: 'Boceto' },
  { id: 2, src: '/imagenes/Modelado/Plastilina.jpg', alt: 'Plastilina' },
  { id: 3, src: '/imagenes/Modelado/Alambre.jpg', alt: 'Alambre' },
  { id: 4, src: '/imagenes/Modelado/Plata.jpg', alt: 'Papel de plata' },
  { id: 5, src: '/imagenes/Modelado/Modelado.jpg', alt: 'Modelar' },
  { id: 6, src: '/imagenes/Modelado/Horneado.jpg', alt: 'Horneado' },
  { id: 7, src: '/imagenes/Modelado/Lijar.jpg', alt: 'Lijar' },
  { id: 8, src: '/imagenes/Modelado/Pintar.jpg', alt: 'Pintar' },
  { id: 9, src: '/imagenes/Modelado/Barnizar.jpg', alt: 'Barnizar' },
 
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
        Modelado
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
      <img 
        src="/imagenes/Modelado/Introducción.jpg" 
        alt="Inspiración de So Youn Lee y Lladró" 
        class="w-full h-auto rounded-xl shadow-lg object-cover"
      >
    </div>

  </div>
  
</section>
  </main>

  <main>
    <section>
      <Carousel :plugins="plugins" :opts="{ loop: true }" class="relative w-full max-w-sm mx-auto">
        
        <CarouselContent>
          
          <CarouselItem v-for="photo in photos" :key="photo.id">
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
    </section>
  </main>
</template>



<style scoped>

</style>