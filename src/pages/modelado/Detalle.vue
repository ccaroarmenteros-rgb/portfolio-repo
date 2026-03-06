
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
      <h1 class="text-4xl font-bold mb-6">{{ modeloActual.titulo }}</h1>
      
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
      
      <p class="text-lg text-gray-700 text-left mb-8 whitespace-pre-line">
        {{ modeloActual.descripcion }}
      </p>

      <button @click="$router.back()" class="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800">
        Volver atrás
      </button>
    </div>
  </div>
</template>