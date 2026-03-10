
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { modelados } from './data' 

const route = useRoute()
const currentId = Number(route.params.id)
const modeloActual = modelados.find(item => item.id === currentId)
</script>

<template>
  <div class="min-h-screen p-8 flex flex-col items-center justify-center bg-[url('/imagenes/Modelado/Puntos.jpg')] bg-cover bg-center bg-no-repeat">
    
    <div v-if="modeloActual" class="max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg text-center">
      <h1 class=" schoolbell-regular text-4xl font-bold mb-6">{{ modeloActual.titulo }}</h1>
      
      <video 
        v-if="modeloActual.videoDetalle"
        :src="modeloActual.videoDetalle" 
        autoplay 
        loop 
        muted 
        playsinline
        class="w-full max-h-125  object-contain rounded-lg mb-6 border"
      ></video>

      <img 
        v-else
        :src="modeloActual.imagenCarrusel" 
        :alt="modeloActual.titulo" 
        class="w-full max-h-125 object-contain rounded-lg mb-6 bg-transparent border"
      />
      
      <p class=" funnel-display text-lg text-gray-700 text-left mb-8 whitespace-pre-line">
        {{ modeloActual.descripcion }}
      </p>

      <button @click="$router.back()" class=" schoolbell-regular px-6 py-2 bg-[rgb(58,76,87)] text-white font-medium rounded-md hover:bg-[rgb(99,123,138)]">
        Volver atrás
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Schoolbell&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap');

.schoolbell-regular {
  font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

.funnel-display {
  font-family: "Funnel Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
