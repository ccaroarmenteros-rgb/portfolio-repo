
<script setup lang="ts">
import { useRoute } from 'vue-router'
// Asegúrate de que la ruta hacia data.ts sea la correcta dependiendo de dónde guardes este archivo
import { modelados } from './data' 

const route = useRoute()

// 1. Sacamos el ID directamente de la URL (ej: el "1" de /modelado/1)
// Lo convertimos a Number porque de la URL siempre llega como texto (String)
const currentId = Number(route.params.id)

// 2. Buscamos en tu data.ts el objeto que tenga ese mismo ID
const modeloActual = modelados.find(item => item.id === currentId)
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center">
    
    <div v-if="modeloActual" class="max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg text-center">
      
      <h1 class="text-4xl font-bold mb-6">{{ modeloActual.titulo }}</h1>
      
      <img 
        :src="modeloActual.src" 
        :alt="modeloActual.titulo" 
        class="w-full max-h-125 object-contain rounded-lg mb-6 bg-muted border"
      />
      
      <p class="text-lg text-gray-700 text-left mb-8 whitespace-pre-line">
        {{ modeloActual.descripcion }}
      </p>

      <button 
        @click="$router.back()" 
        class="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
      >
        Volver atrás
      </button>
    </div>

    <div v-else class="text-center">
      <h2 class="text-3xl font-bold text-red-500 mb-4">Ups, modelo no encontrado</h2>
      <button @click="$router.back()" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Volver atrás
      </button>
    </div>

  </div>
</template>