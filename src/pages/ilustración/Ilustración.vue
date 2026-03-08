

<script setup lang="ts">


const galeria = [
     { 
    id: 1, 
    originalSrc: '/imagenes/Ilustración/Verde.jpg', 
    hoverSrc: '/imagenes/Ilustración/Detrás.jpg',
    alt: '' 
  },
  { 
    id: 2, 
    originalSrc: '/imagenes/Ilustración/Rosa.jpg', 
    hoverSrc: '/imagenes/Ilustración/DetrásRosa.jpg',
    alt: '' 
  },
  
   { 
    id: 3, 
    originalSrc: '/imagenes/Ilustración/Ilustracion.jpg', 
    hoverSrc: '',
    alt: '' 
  },
   { 
    id: 4, 
    originalSrc: '/imagenes/Ilustración/Amarillo.jpg', 
    hoverSrc: '/imagenes/Ilustración/Azul.jpg',
    alt: '' 
  },
   { 
    id: 5, 
    originalSrc: '/imagenes/Ilustración/Comic.jpg', 
    hoverSrc: '/imagenes/Ilustración/ComicColor.jpg',
    alt: '' 
  },
   { 
    id: 6, 
    originalSrc: '/imagenes/Ilustración/Gato.jpg', 
    hoverSrc: '',
    alt: '' 
  },
   { 
    id: 7, 
    originalSrc: '/imagenes/Ilustración/Chapa.jpg', 
    hoverSrc: '',
    alt: '' 
  },
 
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

    <section class="relative w-full h-64 md:h-96 flex items-center bg-[rgb(203,147,179)] justify-center overflow-hidden">
      <h1 class="relative z-20 text-5xl md:text-7xl font-bold text-white transition-all text-center px-4">
        ILUSTRACIÓN
      </h1>
    </section>

 <section class="w-full max-w-7xl mx-auto px-6 py-16">
  
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
    
    <div 
      v-for="imagen in galeria" 
      :key="imagen.id" 
      class="break-inside-avoid relative overflow-hidden shadow-md cursor-pointer group"
    >
      <img 
        :src="imagen.originalSrc" 
        :alt="imagen.alt" 
        class="w-full h-auto transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      <img 
        :src="imagen.hoverSrc" 
        :alt="imagen.alt + ' - Versión Interactiva'" 
        class="absolute inset-0 w-full h-full  object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      />

    </div>

  </div>
  
</section>
  </main>
</template>


<style scoped>

</style>