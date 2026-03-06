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
  <div class="min-h-screen w-full flex items-center justify-center bg-gray-50/50 p-4">
    
    <Carousel
      :opts="{
        align: 'start',
        loop: true 
      }"
      class="w-full max-w-4xl"
    >
      <CarouselContent>
        <CarouselItem v-for="item in modelados" :key="item.id" class="md:basis-1/2 lg:basis-1/3">
          <div class="p-2">
            <Card 
              class="overflow-hidden border-2 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              @click="$router.push(`/modelado/${item.id}`)"
            >
              <CardContent class="flex aspect-square items-center justify-center p-0 relative bg-muted">
                
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
</template>


<style scoped>

</style>
