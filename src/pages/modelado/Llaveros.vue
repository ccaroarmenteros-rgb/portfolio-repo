<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { modelados } from './data';

</script>

<template>
  <div class="relative min-h-screen w-full flex flex-col overflow-hidden">
      
      <img 
        src="/imagenes/Modelado/Cuadros 2.jpg" 
        alt="Fondo de cuadros" 
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div class="relative z-30 w-full bg-white px-6 py-4 shadow-md flex items-center justify-between">
        
        <button 
          @click="$router.push('/modelado')" 
          class=" schoolbell-regular px-4 py-2 bg-[rgb(58,76,87)] hover:bg-[rgb(99,123,138)] text-white font-medium rounded-md transition-colors flex items-center gap-2"
        >
          <span>&larr;</span> Volver a Modelado
        </button>

        <h1 class=" schoolbell-regular text-4xl font-bold text-gray-800 text-center flex-1 pr-10 md:pr-32">
         ¡ Elige tu llavero !
        </h1>
        
      </div>

      <div class="relative z-20 flex-1 w-full flex items-center justify-center p-4">
          <div class="w-full max-w-4xl flex justify-center">
              <Carousel
                :opts="{
                  align: 'start',
                  loop: true 
                }"
                class="w-full"
              >
                <CarouselContent>
                  <CarouselItem v-for="item in modelados" :key="item.id" class="md:basis-1/2 lg:basis-1/3">
                    <div class="p-2">
                      <Card 
                        class="overflow-hidden border-2 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                        @click="$router.push(`/modelado/${item.id}`)"
                      >
                        <CardContent class="flex aspect-square items-center justify-center p-0 relative bg-transparent">
                          
                         <img 
                          :src="item.imagenCarrusel" 
                          :alt="item.titulo" 
                          class="w-full h-full object-cover"
                        />
                          
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
          </div>
      </div>
      
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
